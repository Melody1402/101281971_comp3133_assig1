const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({

    // All fields are required
    // username must be unique
    username: {
        type: String,
        required: [true, 'Please enter username name'],
        unique: [true, 'username must be unique'],
        trim: true,
        lowercase: true
    },
    firstname: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: [true, 'Please enter last name'],
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        validate: function(value) {
            regex = /^[A-Za-z0-9#$&_]+$/
            return regex.test(value);}
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        trim: true,
        uppercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        trim: true,
        lowercase: true
    }

});

const User = mongoose.model("User", UserSchema);
module.exports = User;