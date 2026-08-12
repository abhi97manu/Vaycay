import mysql from "mysql2/promise";
import { env, hasDatabaseConfig } from "./env.js";

export const pool = hasDatabaseConfig
  ? mysql.createPool({
      host: env.dbHost,
      port: env.dbPort,
      user: env.dbUser,
      password: env.dbPassword,
      database: env.dbName,
      waitForConnections: true,
      connectionLimit: 10
    })
  : null;

  pool?.getConnection().then((connection) => {
    console.log("Database connection pool initialized successfully.");
    connection.release();
  }).catch((error) => {
    console.error("Error initializing database connection pool:", error);
  });

 