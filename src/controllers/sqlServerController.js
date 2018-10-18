const sql = require('../models/sqlServerRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await sql.getById(id);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await sql.getAll();

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.post = async (req, res) => {
    try {
        const dados = req.body;

        const result = await sql.post(dados);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.id;
        const dados = req.body;

        const result = await sql.put(id, dados);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}