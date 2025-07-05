/**
 * Favorite Controller
 * Manages user's favorite restaurants list
 */

const favoriteService = require('../services/favoriteService');

// Add a restaurant to user's favorites
exports.saveFavorite = async (req, res) => {
  try {
    const favorite = await favoriteService.addFavorite({ ...req.body, user: req.user._id });
    res.status(201).json({ message: 'Restaurant added to favorites', favorite });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all favorite restaurants for the user
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await favoriteService.getUserFavorites(req.user._id);
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove a restaurant from favorites
exports.deleteFavorite = async (req, res) => {
  try {
    await favoriteService.removeFavorite(req.params.id, req.user._id);
    res.json({ message: 'Restaurant removed from favorites' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update favorite restaurant details
exports.updateFavorite = async (req, res) => {
  try {
    const updated = await favoriteService.updateFavorite(req.params.id, req.user._id, req.body);
    res.json({ message: 'Favorite updated successfully', updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

