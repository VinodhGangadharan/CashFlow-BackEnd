const { default: mongoose } = require("mongoose");

// define the schema for our user model
const userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "role": {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    },
    "currency": {
        type: String,
        enum: ['INR', 'USD', 'GBP', 'EUR'],
        default: 'INR'
    },
    "createdAt": {
        type: Date,
        default: Date.now
    },
    "updatedAt": {
        type: Date,
        default: Date.now
    }
});

// create a model and export it
module.exports = mongoose.model('User', userSchema, 'users');