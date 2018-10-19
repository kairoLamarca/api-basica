const sql = require('../models/sqlServerRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await sql.getById(id);

        if (result.rowsAffected[0] > 0) {
            res.status(200).json(result.recordset[0]);
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi encontrado' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await sql.getAll();

        if (result.rowsAffected[0] > 0) {
            res.status(200).json(result.recordset);
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi encontrado' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.post = async (req, res) => {
    try {
        const dados = req.body;

        const result = await sql.post(dados);

        if (result.rowsAffected[0] > 0) {
            res.status(201).json({ 'mensagem': `${result.rowsAffected[0]} registro(s) inserido(s) com sucesso` });
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi inserido' });
        }
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

        if (result.rowsAffected[0] > 0) {
            res.status(204).json({ 'mensagem': `${result.rowsAffected[0]} registro(s) alterado(s) com sucesso` });
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi alterado' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await sql.delete(id);

        if (result.rowsAffected[0] > 0) {
            res.status(200).json({ 'mensagem': `${result.rowsAffected[0]} registro(s) excluído(s) com sucesso` });
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi excluído' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}