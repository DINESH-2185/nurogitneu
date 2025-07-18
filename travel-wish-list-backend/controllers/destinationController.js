// controllers/destinationController.js
const Destination = require("../models/Destination");

// GET all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create a new destination
exports.createDestination = async (req, res) => {
  const { name, location, description } = req.body;

  try {
    const newDestination = new Destination({ name, location, description });
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET destination by ID
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update destination
exports.updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE destination
exports.deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: "Destination deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
