const createError = require("http-errors");
const express = require("express");
const path = require("path");
const errors = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
require("dotenv").config();

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");

// Passport strategy
require("./services/passport");

// Routes
app.use("/", indexRouter);
app.use("/api/users", usersRouter);

//  Error handle Middleware
app.use(errors.handle);

module.exports = app;
