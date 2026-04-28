const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  loginUser,
  deleteUser,
  updateUser
} = require("../controllers/usersControllers");

// LOGIN
router.post("/login", loginUser);

// USERS CRUD
router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
