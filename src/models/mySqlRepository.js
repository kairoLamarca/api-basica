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

exports.post = async (dados) => {
    //abre conexão
    const connection = await mysql();

    const [results] = await connection.query('insert into usuarios set ?', dados);

    return results; //results.insertId

    // Exemplo de JSON de envio
    // {
    //     "nome": "teste3",
    //     "senha": "1234",
    //     "email": "teste3@teste.com"
    // }
}

exports.put = async (id, dados) => {
    //abre conexão
    const connection = await mysql();

    const [results] = await connection.query('update usuarios set nome = ?, email = ?, senha = ? where id = ?', [dados.nome, dados.email, dados.senha, id]);

    return results; //results.affectedRows

    // Exemplo de JSON de envio
    // {
    //     "nome": "teste3",
    //     "senha": "1234",
    //     "email": "teste3@teste.com"
    // }
}

exports.delete = async (id) => {
    //abre conexão
    const connection = await mysql();

    const [results] = await connection.query('delete from usuarios where id = ?', [id]);

    return results; //results.affectedRows
}