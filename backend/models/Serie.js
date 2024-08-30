const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    releaseDate: {
        type: Date,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Serie', serieSchema);
