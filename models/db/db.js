const mysql = require("mysql2/promise");

(async () => {
  const pool = await mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "house_of_dogs",
    waitForConnections: true,
    connectionLimit: 1000,
    queueLimit: 0,
  });

  console.log("DB up!");
})();