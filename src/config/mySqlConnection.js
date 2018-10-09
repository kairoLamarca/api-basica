const mysql = require('mysql2/promise');

//create the connection to database
const connection = async () => {
    return await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_MYSQL_PASSWORD
    })
};

module.exports = connection;
