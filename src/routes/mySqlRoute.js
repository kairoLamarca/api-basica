const express = require('express');
const router = express.Router();
const controller = require('../controllers/mySqlController');

router.route('/')
    .get(controller.getAll)
    .post(controller.post);

router.route('/:id')    
    .get(controller.getById)
    .put(controller.put);

module.exports = router;