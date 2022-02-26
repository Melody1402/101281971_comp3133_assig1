const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_date: {
        type: Date, 
        required: true,
        default: Date.now
    },
    booking_start: {
        type: Date, 
        required: true,
    },
    booking_end: {
        type: Date, 
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;