import mariadb from "mariadb"

const pool = mariadb.createPool({
  port: 3307,
  host: "localhost",
  user: "root",
  password: "root",
  database: "whatsapp-business-portfolio",
  waitForConnections: true,
  connectionLimit: 10,
  idleTimeoutMillis: 30000,
  supportBigNumbers: true,
  bigNumberStrings: true,
 
  // host: "ec2-3-108-102-118.ap-south-1.compute.amazonaws.com",
  // user: "root",
  // password: "AnzilChatbot!2025",
  // database: "whatsapp-business-portfolio",
  // port: 3306,
});

export default pool;