const mongo = require('../config/mongoConnection');
const Usuario = require('./mongoModels/usuarioModel');

exports.post = async (dados) => {
    //Abre a conexão
    const db = await mongo();

    let usuario = new Usuario(dados);
    await usuario.save();
    return usuario
}

