// controllers/userController.js
const { users } = require('../data/dummyData');

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  res.json({ message: "User created (dummy)" });
};

exports.updateUser = (req, res) => {
  res.json({ message: "User updated (dummy)" });
};

exports.deleteUser = (req, res) => {
  res.json({ message: "User deleted (dummy)" });
};
