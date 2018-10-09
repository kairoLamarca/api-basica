const express = require('express');
const router = express.Router();
const controller = require('../controllers/mySqlController');

router.route('/')
    .get(controller.getAll);

module.exports = router;