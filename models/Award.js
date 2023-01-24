const mongoose = require('mongoose');

const Award = mongoose.model('Award', {
    name: String,
    type: String,
    amount: Number,
})

module.exports = Award