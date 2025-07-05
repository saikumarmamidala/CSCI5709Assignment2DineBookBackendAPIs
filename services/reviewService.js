/**
 * Review Service
 * Contains business logic for restaurant review operations
 */

const Review = require('../models/Review');

// Create a new restaurant review
exports.addReview = async (data) => {
  const review = new Review(data);
  return await review.save();
};

// Get all reviews written by a specific user
exports.getUserReviews = async (userId) => {
  return await Review.find({ user: userId }).sort({ createdAt: -1 });
};

// Delete a user's review
exports.deleteReview = async (reviewId, userId) => {
  return await Review.findOneAndDelete({ _id: reviewId, user: userId });
};

// Update an existing review
exports.updateReview = async (reviewId, userId, data) => {
  const review = await Review.findOneAndUpdate(
    { _id: reviewId, user: userId },
    data,
    { new: true }
  );
  if (!review) throw new Error('Review not found or unauthorized');
  return review;
};
