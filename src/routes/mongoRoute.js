const express = require('express');
const router = express.Router();
const controller = require('../controllers/mongoController');

// router.post('/', controller.post);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

router.route('/')
    .get(controller.get)
    .post(controller.post)

router.route('/:id')
    .put(controller.put)
    .delete(controller.delete)

module.exports = router;
