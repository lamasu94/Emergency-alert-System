const express = require("express");
const cors = require("cors");

require("./models/db");

const app = express();

// ✅ CORS and JSON must be FIRST, before ALL routes
app.use(cors());
app.use(express.json());

// Routes AFTER middleware
const alertRoutes = require("./routes/alertsRoute");
app.use("/api", alertRoutes);

const userRoutes = require("./routes/usersRoute");
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Emergency Alert Backend Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});