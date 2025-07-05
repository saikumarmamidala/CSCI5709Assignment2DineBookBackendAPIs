/**
 * Review Routes
 * Handles restaurant review and rating endpoints
 * All routes require authentication
 */

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, reviewController.createReview);     // Create new review
router.get('/', authMiddleware, reviewController.getMyReviews);      // Get user's reviews
router.delete('/:id', authMiddleware, reviewController.deleteMyReview); // Delete review
router.put('/:id', authMiddleware, reviewController.updateReview);   // Update review

module.exports = router;
