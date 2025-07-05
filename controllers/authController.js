/**
 * Authentication Controller
 * Handles user registration, login, and profile management
 */

const authService = require('../services/authService');

// Handle user registration
exports.register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Handle user login and JWT token generation
exports.login = async (req, res) => {
  try {
    const { token, role, userId } = await authService.loginUser(req.body);
    res.json({ message: 'Login successful', token, role, userId });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

// Get authenticated user's profile information
exports.profile = async (req, res) => {
  try {
    const user = await authService.getUserProfile(req.user._id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
