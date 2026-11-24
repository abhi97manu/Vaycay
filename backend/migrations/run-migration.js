import mysql from "mysql2/promise";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log("Current directory path:", __dirname);

async function runMigration(){
    let  connection;
    try{
     connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
         multipleStatements: true
    });
    const migrationfiles = [
    '001_initial_schema.sql',
    '002_packages.sql',
    '003_trip_activities.sql',
    '004_departures.sql',
    '005_name_in_trips.sql'
]



for(const file of migrationfiles){
    const filePath = path.join(__dirname, file);
    console.log("Running migration file:", filePath);
    try{

        const sql = fs.readFileSync(filePath, 'utf-8');
        await connection.query(sql);
        console.log(`Migration ${file} executed successfully.`);
    }
    catch(error)
    {
        console.log(`Error executing migration ${file}:`, error);
    }
}

    // Bring databases that already have the old, incomplete tables up to the
    // same catalog shape used by the trip and package admin flow.
    const ensureColumns = async (table, columns) => {
        const [existing] = await connection.query(`SHOW COLUMNS FROM \`${table}\``);
        const names = new Set(existing.map((column) => column.Field));
        for (const [name, definition] of Object.entries(columns)) {
            if (!names.has(name)) {
                await connection.query(`ALTER TABLE \`${table}\` ADD COLUMN \`${name}\` ${definition}`);
            }
        }
    };
    const [tripTable] = await connection.query("SHOW TABLES LIKE 'trips'");
    if (!tripTable.length) {
        await connection.query(`CREATE TABLE trips (
            id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, destination_id INT NOT NULL,
            photo VARCHAR(500), starting_point VARCHAR(255) NOT NULL, ending_point VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL, description TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    } else {
        const [tripColumns] = await connection.query("SHOW COLUMNS FROM trips");
        if (!tripColumns.some((column) => column.Field === "id")) {
            await connection.query("ALTER TABLE trips ADD COLUMN id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST");
        }
        await ensureColumns("trips", {
            name: "VARCHAR(255) NOT NULL DEFAULT ''", destination_id: "INT NOT NULL DEFAULT 0",
            photo: "VARCHAR(500) NULL", starting_point: "VARCHAR(255) NOT NULL DEFAULT ''",
            ending_point: "VARCHAR(255) NOT NULL DEFAULT ''", price: "DECIMAL(10,2) NOT NULL DEFAULT 0",
            description: "TEXT NULL", created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
        });
    }
    const [packageTable] = await connection.query("SHOW TABLES LIKE 'packages'");
    if (!packageTable.length) {
        await connection.query(`CREATE TABLE packages (
            id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, description TEXT,
            destination_id INT NOT NULL, trip_id INT NULL, price DECIMAL(10,2) NOT NULL,
            category VARCHAR(30) NOT NULL DEFAULT 'nature', stock INT NOT NULL DEFAULT 0,
            duration VARCHAR(80) NOT NULL DEFAULT 'Trip', is_new TINYINT(1) NOT NULL DEFAULT 1,
            is_published TINYINT(1) NOT NULL DEFAULT 1, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    } else {
        await ensureColumns("packages", {
            trip_id: "INT NULL", category: "VARCHAR(30) NOT NULL DEFAULT 'nature'",
            stock: "INT NOT NULL DEFAULT 0", duration: "VARCHAR(80) NOT NULL DEFAULT 'Trip'",
            is_new: "TINYINT(1) NOT NULL DEFAULT 1", is_published: "TINYINT(1) NOT NULL DEFAULT 1"
        });
    }
    await connection.query(`CREATE TABLE IF NOT EXISTS itinerary_days (
        id INT AUTO_INCREMENT PRIMARY KEY, trip_id INT NOT NULL, day_number INT NOT NULL,
        description TEXT, activity VARCHAR(255), meal VARCHAR(100) NOT NULL DEFAULT 'None',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, UNIQUE KEY unique_trip_day (trip_id, day_number)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    await connection.query(`CREATE TABLE IF NOT EXISTS departures (
        id INT AUTO_INCREMENT PRIMARY KEY, start_date DATETIME NOT NULL, end_date DATETIME NOT NULL,
        total_seats INT NOT NULL, available_seats INT NOT NULL, trip_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

}
catch(error)
{
    console.log("Error connecting to the database:", error);
}
finally{
    if(connection)
    {
        await connection.end();
        console.log("Database connection closed.");
    
    }
}


}

runMigration();
