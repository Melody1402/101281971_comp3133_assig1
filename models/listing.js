const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    listing_title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String, 
        required: true,
        maxLength: 1000,
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        //validate
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    username: {
        type: String,
        required: [true, 'Please enter username name'],
        trim: true,
        lowercase: true
    },
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;