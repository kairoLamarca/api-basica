const conn = require('../config/sqlServerConnection');
const sql = require('mssql');

exports.getById = async (id) => {
    //abre a conexão
    const connection = await conn();

    const result = await connection.request().query(`select * from usuarios where id = ${id}`);

    //fecha a conexão
    sql.close();

    return result.recordset[0];
}

exports.getAll = async () => {
    //abre a conexão
    const connection = await conn();

    const results = await connection.request().query('select * from usuarios');

    //fecha a conexão
    sql.close();

    return results.recordset;
}

exports.post = async (dados) => {
    //abre a conexão
    const connection = await conn();

    const result = await connection.request()
        .input('nome', sql.VarChar, dados.nome)
        .input('senha', sql.VarChar, dados.senha)
        .input('email', sql.VarChar, dados.email)
        .query('insert into usuarios (nome, senha, email) values (@nome, @senha, @email)');

    //fecha a conexão
    sql.close()

    return result;
}

exports.put = async (id, dados) => {
    //abre a conexão
    const connection = await conn();

    const result = await connection.request()
        .input('nome', sql.VarChar, dados.nome)
        .input('senha', sql.VarChar, dados.senha)
        .input('email', sql.VarChar, dados.email)
        .input('id', sql.VarChar, id)
        .query('update usuarios set nome = @nome, senha = @senha, email = @email where id = @id');

    //fecha a conexão
    sql.close()

    return result;
}

exports.delete = async (id) => {
    //abre a conexão
    const connection = await conn();
}