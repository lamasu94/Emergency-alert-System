const express = require("express");
const router = express.Router();


const { createUser, getUsers } = require("../controllers/usersControllers");
const { loginUser } = require("../controllers/usersControllers");

router.post("/users/login", loginUser);

router.post("/users", createUser);
router.get("/users", getUsers);

module.exports = router;