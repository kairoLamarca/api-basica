const mysql = require('../models/mySqlRepository');

exports.getAll = async (req, res) => {
    try {
        const result = await mysql.getAll();

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}