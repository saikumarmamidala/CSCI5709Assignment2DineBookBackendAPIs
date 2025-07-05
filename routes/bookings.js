/**
 * Booking Routes
 * Handles all restaurant reservation-related endpoints
 * All routes require authentication
 */

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, bookingController.bookTable);       // Create new booking
router.get('/', authMiddleware, bookingController.getMyBookings);    // Get user's bookings
router.delete('/:id', authMiddleware, bookingController.cancelMyBooking); // Cancel booking
router.put('/:id', authMiddleware, bookingController.updateBooking); // Update booking

module.exports = router;
