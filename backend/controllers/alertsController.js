const { getDb } = require("../models/db");

// CREATE ALERT
exports.createAlert = (req, res) => {
  const db = getDb();
  const { type, location } = req.body;

  if (!type || !location) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const query = `
    INSERT INTO alerts (type, location, status)
    VALUES (?, ?, 'Active')
  `;

  db.query(query, [type, location], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Alert created successfully" });
  });
};

// GET ALERTS
exports.getAlerts = (req, res) => {
  const db = getDb();
  const query = "SELECT * FROM alerts ORDER BY created_at DESC";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

// RESOLVE ALERT
exports.resolveAlert = (req, res) => {
  const db = getDb();
  const { id } = req.params;

  const query = `
    UPDATE alerts
    SET status = 'Resolved'
    WHERE id = ?
  `;

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Alert not found" });
    }

    res.json({ message: "Alert resolved" });
  });
};