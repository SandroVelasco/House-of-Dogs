const mysql = require("mysql2/promise");
require("dotenv").config();

(async () => {
  const pool = await mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 1000,
    queueLimit: 0,
  });

  console.log("Connected to the database!");
})();