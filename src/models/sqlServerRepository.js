const sql = require('../config/sqlServerConnection');

exports.getAll = async () => {
    //abre a conexão
    console.log('1');
    const connection = await sql();
    console.log('2');
    const results = await connection.request().query('select * from usuarios');
    console.log('3');

    console.log('results', results);
    return results;
}