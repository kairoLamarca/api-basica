const sql = require('mssql');

//Sql1234*
const config = {
    user: 'sa',
    password: 'Sql1234*',
    server: 'localhost',
    database: 'api_sql_server'
}

const connection = async () => {
    return await sql.connect(config);
}

module.exports = connection;