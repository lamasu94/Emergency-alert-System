console.log("DB FILE LOADED");

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "emergency_alert"
});

db.connect((err) => {
    if (err) {
        console.log(" ERROR:", err.message);
    } else {
        console.log(" Database connected");
    }
});

module.exports = db;