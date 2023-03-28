const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        minLength: [3, "Name must be at least 3 characters long"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Player', PlayerSchema);