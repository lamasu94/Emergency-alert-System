const express = require("express");
const router = express.Router();

const {
  createAlert,
  getAlerts,
  resolveAlert
} = require("../controllers/alertsController");

router.post("/alerts", createAlert);
router.get("/alerts", getAlerts);
router.put("/alerts/:id", resolveAlert); // 🔥 important

module.exports = router;