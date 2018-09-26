const mongoose = require('mongoose');

const db = () => mongoose.connect('mongodb://localhost/api-mongo');

module.exports = db;