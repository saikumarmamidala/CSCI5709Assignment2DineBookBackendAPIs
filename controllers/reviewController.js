/**
 * Review Controller
 * Handles restaurant reviews and ratings management
 */

const reviewService = require('../services/reviewService');

// Create a new restaurant review
exports.createReview = async (req, res) => {
  try {
    const review = await reviewService.addReview({ ...req.body, user: req.user._id });
    res.status(201).json({ message: 'Review added successfully', review });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all reviews written by the authenticated user
exports.getMyReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getUserReviews(req.user._id);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a user's review
exports.deleteMyReview = async (req, res) => {
  try {
    await reviewService.deleteReview(req.params.id, req.user._id);
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an existing review
exports.updateReview = async (req, res) => {
  try {
    const updated = await reviewService.updateReview(req.params.id, req.user._id, req.body);
    res.json({ message: 'Review updated successfully', updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

