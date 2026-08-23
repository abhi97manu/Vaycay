
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

async function seedData() {
        let connection;
    try{
         connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            multipleStatements: true
        });

        const pass = await bcrypt.hash("admin@123", 10);
        console.log ("Seeding data with hashed password:", pass);
    await connection.query(`
    INSERT IGNORE INTO users (id, username, email, password, created_at, updated_at) VALUES 
    (1, 'admin', 'admin@example.com', ?, NOW(), NOW()) `, [pass]);

    await connection.query(`INSERT IGNORE INTO countries (name) VALUES ('India')`)

    await connection.query(`INSERT IGNORE INTO states (name,country_id)
VALUES
    ('Goa',1),
    ('Rajasthan',1),
    ('Kerala',1),
    ('Himachal Pradesh',1),
    ('Uttarakhand',1),
    ('Tamil Nadu',1),
    ('Maharashtra',1),
    ('West Bengal',1),
    ('Sikkim',1),
    ('Karnataka',1);`);




    }



    catch(error)
    {
        console.log("Error seeding data:", error);
    }
    finally
    {
        if(connection){
            await connection.end();
            console.log("Database connection closed after seeding data.");

        }
    }
}

seedData();