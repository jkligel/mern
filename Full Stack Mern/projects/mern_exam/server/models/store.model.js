const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        minLength: [3, "Name must be at least 3 characters long"]
    },
    number: {
        type: Number,
        required: [true, "Please enter store number"],
        min: [1, "The store number must be greater than 0"]
    },
    open: {
        type: Boolean,   
    }
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);