const { Router } = require("express");
const router = require("Router");
const authController = require("../controllers/authController");

router.get("/signup", (req, res) => authController.signup_get);
router.post("/signup", (req, res) => authController.signup_post);
router.get("/login", (req, res) => authController.login_get);
router.post("/login", (req, res) => authController.login_get);

module.exports = router;
