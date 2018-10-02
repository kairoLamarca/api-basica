const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const usuarioModel = new Schema({
    usuario: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
})

module.exports = mongoose.model('usuario', usuarioModel)