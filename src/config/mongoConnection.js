const mongoose = require('mongoose');

const db = () => mongoose.connect(process.env.MONGO);

module.exports = db;