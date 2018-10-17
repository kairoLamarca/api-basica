const sql = require('../config/sqlServerConnection');

exports.getAll = async () => {
    //abre a conexão
    const connection = await sql();

    const results = await connection.request().query('select * from usuarios');

    return results.recordset;
}