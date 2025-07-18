const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
  },
  rating: Number,
  comment: String,
});

module.exports = mongoose.model("Review", reviewSchema);
