const mysql = require('../config/mySqlConnection');

exports.getAll = async () => {

    const connection = await mysql();

    const [results] = await connection.query('select * from usuario;');

    return results;
}