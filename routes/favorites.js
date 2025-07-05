/**
 * Favorite Routes
 * Handles user's favorite restaurants management endpoints
 * All routes require authentication
 */

const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, favoriteController.saveFavorite);     // Add to favorites
router.get('/', authMiddleware, favoriteController.getFavorites);      // Get user's favorites
router.delete('/:id', authMiddleware, favoriteController.deleteFavorite); // Remove from favorites
router.put('/:id', authMiddleware, favoriteController.updateFavorite); // Update favorite

module.exports = router;
