var express = require("express");
var router = express.Router();
const { User } = require("../models/index");

/* GET users listing. */
router.get("/", function(req, res, next) {
  // User.findAll().then(users => {
  //   console.log(users);
  // });

  User.findAll().then(users => {
    res.json(users);
  });
});

module.exports = router;
