const mysql = require("mysql2");

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'sanroque',
    database: 'expressdb'
});

db.connect();

module.exports = db;