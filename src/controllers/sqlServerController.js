const sql = require('../models/sqlServerRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await sql.getById(id);

        if (result.rowsAffected[0] > 0) {
            res.status(200).json(result.recordset[0]);
        }
        else {
            res.status(404).json({ 'mensagem': 'Id não encontrado' });
        }
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

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await sql.delete(id);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}