const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    employed: {
        type: Boolean
    }
})

module.exports = mongoose.model('Person', personSchema)