const express = require("express");
const connectDB = require("./config/database");
const destinationRoutes = require("./routes/destinationRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/destinations", destinationRoutes);
app.use("/api/reviews", reviewRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
