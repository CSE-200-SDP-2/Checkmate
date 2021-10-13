const express = require("express");
const authcontroller = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authcontroller.signup);
router.post("/verify", authcontroller.verify);
router.post("/login", authcontroller.login);

module.exports = router;
