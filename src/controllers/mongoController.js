const mongo = require('../models/mongoRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        
        const result = await mongo.getById(id);

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await mongo.getAll();

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.post = async (req, res, next) => {
    try {
        const dados = req.body;

        const result = await mongo.post(dados)

        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

exports.put = async (req, res, next) => {
    try {
        let id = req.params.id;
        let dados = req.body;

        const result = await mongo.put(id, dados);

        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        let id = req.params.id;

        const result = await mongo.delete(id);

        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}