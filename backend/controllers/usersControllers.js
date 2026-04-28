const { getDb } = require("../models/db");

exports.createUser = (req, res) => {
  const db = getDb();
  const { name, email, password, role, phone } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).send("Missing required fields");
  }

  const sql = `
    INSERT INTO users (name, email, password, role, phone)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, password, role, phone], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error creating user");
    }
    res.send("User created successfully");
  });
};

exports.getUsers = (req, res) => {
  const db = getDb();
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching users");
    }
    res.json(results);
  });
};

exports.loginUser = (req, res) => {
  const db = getDb();
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = results[0];
    delete user.password;
    res.json({ user });
  });
};

exports.deleteUser = (req, res) => {
  const db = getDb();
  const id = req.params.id;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting user");
    }
    res.send("User deleted");
  });
};

exports.updateUser = (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const { name, phone } = req.body;

  const sql = "UPDATE users SET name = ?, phone = ? WHERE id = ?";

  db.query(sql, [name, phone, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error updating user");
    }
    res.send("User updated");
  });
};