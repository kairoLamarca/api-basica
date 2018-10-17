const express = require('express');
const router = express.Router();
const controller = require('../controllers/sqlServerController');

router.route('/')
    .get(controller.getAll);

module.exports = router;