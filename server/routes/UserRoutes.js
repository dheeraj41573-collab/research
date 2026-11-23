const express = require("express");

const UserController = require("../controllers/UserController.js");
const checkAuth = require("../middlewares/check-auth.js");
const checkAdmin = require("../middlewares/check-admin.js");

const router = express.Router();
 
router.post("/signup", UserController.signup);
router.post("/register-admin", checkAdmin, UserController.registerAdmin);
router.post("/login", UserController.login);
router.get("/:userId", checkAuth, UserController.getOneUser);

module.exports = router;
