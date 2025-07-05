/**
 * DineBook Backend Server - Restaurant Booking System
 * Main entry point that sets up Express server, database connection, and API routes
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import route handlers
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings'); 
const reviewRoutes = require('./routes/reviews');
const favoriteRoutes = require('./routes/favorites');

const app = express();
dotenv.config();

// Configure middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Establish MongoDB database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// API route configuration
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/favorites', favoriteRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('DineBook API server is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
