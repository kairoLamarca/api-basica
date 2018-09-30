const mongo = require('../models/mongoRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
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

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
}