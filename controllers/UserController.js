const bcrypt = require("bcryptjs");
const User = require("../models").User;
const errors = require("../errors");
const passport = require("passport");

exports.create = (req, res, next) => {
  const saltRounds = bcrypt.genSaltSync(10);

  const user = req.body
    ? {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        role_id: req.body.role_id,
        img: req.body.img
      }
    : {};

  user.password = bcrypt.hashSync(user.password, saltRounds);

  User.createModel(user)
    .then(u => {
      res.status(200);
      res.end();
    })
    .catch(err => {
      next(err);
    });
};

exports.login = (req, res, next) => {
  if (!req.body.user.email) {
    throw errors.blankError("email");
  }

  if (!req.body.user.password) {
    throw errors.blankError("password");
  }

  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      // throw errors.invalidUser();
    }
  })(req, res, next);
};
