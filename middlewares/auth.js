const jwt = require("express-jwt");

const getTokenFromHeader = req => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Token"
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  return null;
};

const auth = {
  required: jwt({
    secret: process.env.SEED_TOKEN,
    userProperty: "payload",
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: process.env.SEED_TOKEN,
    userProperty: "payload",
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;
