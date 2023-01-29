const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: String,
    company: String,
    chances: Number,
    award: String
})

module.exports = User