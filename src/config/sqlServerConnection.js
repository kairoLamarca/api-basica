const sql = require('mssql');

//Sql1234*
const config = {
    user: process.env.SQLSRV_USER,
    password: process.env.SQLSRV_PASSWORD,
    server: process.env.SQLSRV_SERVER,
    database: process.env.SQLSRV_DATABASE, 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

const connection = async () => {    
    return await sql.connect(config);
}

module.exports = connection;