/**
 * Booking Controller
 * Manages restaurant table reservations - create, view, update, and cancel bookings
 */

const bookingService = require('../services/bookingService');

// Create a new table booking
exports.bookTable = async (req, res) => {
  try {
    const booking = await bookingService.createBooking({ ...req.body, user: req.user._id });
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Retrieve all bookings for the authenticated user
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getUserBookings(req.user._id);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cancel an existing booking
exports.cancelMyBooking = async (req, res) => {
  try {
    await bookingService.cancelBooking(req.params.id, req.user._id);
    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update booking details (date, time, party size, etc.)
exports.updateBooking = async (req, res) => {
  try {
    const updated = await bookingService.updateBooking(req.params.id, req.user._id, req.body);
    res.json({ message: 'Booking updated successfully', updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};