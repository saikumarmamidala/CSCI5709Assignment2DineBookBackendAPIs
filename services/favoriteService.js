/**
 * Favorite Service
 * Contains business logic for managing user's favorite restaurants
 */

const Favorite = require('../models/Favorite');

// Add a restaurant to user's favorites (prevent duplicates)
exports.addFavorite = async (data) => {
  const exists = await Favorite.findOne({ user: data.user, restaurantName: data.restaurantName });
  if (exists) throw new Error('Restaurant already in favorites');
  const favorite = new Favorite(data);
  return await favorite.save();
};

// Get all favorite restaurants for a user
exports.getUserFavorites = async (userId) => {
  return await Favorite.find({ user: userId });
};

// Remove a restaurant from favorites
exports.removeFavorite = async (favoriteId, userId) => {
  return await Favorite.findOneAndDelete({ _id: favoriteId, user: userId });
};

// Update favorite restaurant information
exports.updateFavorite = async (favoriteId, userId, data) => {
  const favorite = await Favorite.findOneAndUpdate(
    { _id: favoriteId, user: userId },
    data,
    { new: true }
  );
  if (!favorite) throw new Error('Favorite not found or unauthorized');
  return favorite;
};
