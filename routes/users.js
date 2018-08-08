var express = require("express");
var router = express.Router();
const users = require("../controllers/UserController");
var auth = require("../middlewares/auth");

router.post("/", [], users.create);
router.post("/login", [], users.login);

module.exports = router;
