const express = require("express");
const cors = require("cors");

require("./models/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const alertRoutes = require("./routes/alertsRoute");
const userRoutes = require("./routes/usersRoute");

app.use("/api/alerts", alertRoutes);
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Emergency Alert Backend Running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});