/**
 * Authentication Service
 * Contains business logic for user authentication operations
 */

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user account
exports.registerUser = async ({ name, email, password, role }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error('Email already registered');
  const user = new User({ name, email, password, role });
  await user.save();
  return user;
};

// Authenticate user and generate JWT token
exports.loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
  return { token, role: user.role, userId: user._id };
};

// Retrieve user profile information
exports.getUserProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};
