const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const usuarioModel = new Schema({
    usuario: { type: String },
    email: { type: String },
    senha: { type: String }
})

module.exports = mongoose.model('usuario', usuarioModel)