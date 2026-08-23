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
    '002_packages.sql'
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