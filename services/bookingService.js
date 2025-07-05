/**
 * Booking Service
 * Contains business logic for restaurant booking operations
 */

const Booking = require('../models/Booking');

// Create a new restaurant booking
exports.createBooking = async (data) => {
  const booking = new Booking(data);
  return await booking.save();
};

// Get all bookings for a specific user
exports.getUserBookings = async (userId) => {
  return await Booking.find({ user: userId }).sort({ date: 1 });
};

// Cancel a booking (delete from database)
exports.cancelBooking = async (bookingId, userId) => {
  return await Booking.findOneAndDelete({ _id: bookingId, user: userId });
};

// Update existing booking details
exports.updateBooking = async (bookingId, userId, data) => {
  const booking = await Booking.findOneAndUpdate(
    { _id: bookingId, user: userId },
    data,
    { new: true }
  );
  if (!booking) throw new Error('Booking not found or unauthorized');
  return booking;
};
