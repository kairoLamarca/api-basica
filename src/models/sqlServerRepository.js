const conn = require('../config/sqlServerConnection');
const sql = require('mssql');

exports.getAll = async () => {
    //abre a conexão
    const connection = await conn();

    const results = await connection.request().query('select * from usuarios');

    //fecha a conexão
    sql.close();

    return results.recordset;
}