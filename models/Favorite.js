/**
 * Favorite Model
 * Defines the structure for user's favorite restaurants
 */

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantName: { type: String, required: true },
  cuisineType: { type: String },
  location: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
