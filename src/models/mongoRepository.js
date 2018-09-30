const mongo = require('../config/mongoConnection');
const Usuario = require('./mongoModels/usuarioModel');

exports.getById = async (id) => {
    //Abre a conexão
    await mongo();

    const usuario = await Usuario.findById(id);

    return usuario;
}

exports.getAll = async () => {
    //Abre a conexão
    await mongo();

    const usuarios = await Usuario.find();

    return usuarios;
}

exports.post = async (dados) => {
    //Abre a conexão
    await mongo();

    let usuario = new Usuario(dados);
    await usuario.save();
    return usuario
}

