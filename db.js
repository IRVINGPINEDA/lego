const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'lego_store',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = connection;