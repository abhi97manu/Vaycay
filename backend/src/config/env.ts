import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 4000),
  clientOrigin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173",
  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT ?? 3306),
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  jwtsecret: process.env.JWT_SECRET ?? "default-secret",
};

export const hasDatabaseConfig = Boolean(
  env.dbHost && env.dbUser && env.dbName  
);

//add && env.dbPassword when in prod
