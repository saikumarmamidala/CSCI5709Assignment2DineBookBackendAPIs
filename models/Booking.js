/**
 * Booking Model
 * Defines the structure for restaurant table reservations
 */

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  specialRequest: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
