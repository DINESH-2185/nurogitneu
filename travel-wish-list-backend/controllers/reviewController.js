// controllers/reviewController.js
const { reviews } = require('../data/dummyData');

exports.getAllReviews = (req, res) => {
  res.json(reviews);
};

exports.createReview = (req, res) => {
  res.json({ message: "Review created (dummy)" });
};

exports.updateReview = (req, res) => {
  res.json({ message: "Review updated (dummy)" });
};

exports.deleteReview = (req, res) => {
  res.json({ message: "Review deleted (dummy)" });
};
