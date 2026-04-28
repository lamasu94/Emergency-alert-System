const express = require("express");
const router = express.Router();

const {
  createAlert,
  getAlerts,
  resolveAlert
} = require("../controllers/alertsController");

// CREATE ALERT
router.post("/", createAlert);

// GET ALERTS
router.get("/", getAlerts);

// RESOLVE ALERT
router.put("/:id", resolveAlert);

module.exports = router;