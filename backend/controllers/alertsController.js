const db = require("../models/db");

exports.createAlert = (req, res) => {

  const { type, location } = req.body;

  const query = `
    INSERT INTO alerts (type, location)
    VALUES (?, ?)
  `;

  db.query(query, [type, location], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.status(201).json({
      message: "Alert created successfully"
    });

  });
};

exports.getAlerts = (req, res) => {

  const query = "SELECT * FROM alerts ORDER BY created_at DESC";

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(results);

  });
};
exports.resolveAlert = (req, res) => {

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

    res.json({ message: "Alert resolved" });

  });
};