const mysql = require('../config/mySqlConnection');

exports.getAll = async () => {
    const connection = await mysql();
    
    const usuarios = connection.execute('select * from usuario');

    return usuarios;
}