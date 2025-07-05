/**
 * Review Model
 * Defines the structure for restaurant reviews and ratings
 */

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  visitDate: { type: String } // Optional field for when the user visited the restaurant
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
