const sql = require('../models/sqlServerRepository');

exports.getAll = async (req, res) => {
    try {
        const result = await sql.getAll();

        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}