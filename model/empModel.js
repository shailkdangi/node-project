const mongoose = require('mongoose');
const Schema = mongoose.Schema
const empschema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    jwttoken: {
        type: String
    }
});

module.exports = mongoose.model('Employe', empschema) 