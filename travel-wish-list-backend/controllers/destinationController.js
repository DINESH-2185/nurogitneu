// controllers/destinationController.js
const { destinations } = require('../data/dummyData');

exports.getAllDestinations = (req, res) => {
  res.json(destinations);
};

exports.createDestination = (req, res) => {
  res.json({ message: "Destination created (dummy)" });
};

exports.updateDestination = (req, res) => {
  res.json({ message: "Destination updated (dummy)" });
};

exports.deleteDestination = (req, res) => {
  res.json({ message: "Destination deleted (dummy)" });
};
