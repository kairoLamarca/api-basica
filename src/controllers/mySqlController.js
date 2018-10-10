const mysql = require('../models/mySqlRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await mysql.getById(id);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await mysql.getAll();

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.post = async (req, res) => {
    try {
        const dados = req.body;

        const result = await mysql.post(dados);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}