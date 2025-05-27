import mariadb from "mariadb"
import dotenv from "dotenv";

dotenv.config();  

const pool = mariadb.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  idleTimeoutMillis: 30000,
  supportBigNumbers: true,
  bigNumberStrings: true
});

export default pool;