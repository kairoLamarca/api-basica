const mysql = require('../config/mySqlConnection');

exports.getById = async (id) => {
    //abre conexão
    const connection = await mysql();

    const [results] = await connection.query('select * from usuarios where id = ?', [id]);

    return results;
}

exports.getAll = async () => {
    //abre conexão
    const connection = await mysql();

    const [results] = await connection.query('select * from usuarios;');

    return results;
}

