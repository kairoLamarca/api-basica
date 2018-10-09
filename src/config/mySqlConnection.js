const mysql = require('mysql2/promise');

//create the connection to database
const connection = async () => {
    await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        password: '1234'
    })
};

module.exports = connection;