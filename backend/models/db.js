console.log("DB FILE LOADED");

const mysql = require("mysql2");

function createConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST || "database",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
    database: process.env.MYSQL_DATABASE || "emergency_alert",
  });
}

let db;

function connectWithRetry() {
  db = createConnection();
  db.connect((err) => {
    if (err) {
      console.log("Database not ready, retrying in 3 seconds...");
      db.destroy();
      setTimeout(connectWithRetry, 3000);
    } else {
      console.log("Database connected successfully");
    }
  });
}

connectWithRetry();

module.exports = {
  getDb: () => db
};