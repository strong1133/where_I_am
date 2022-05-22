const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

const app = express();

// Express Midleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const user = require("./routes/user");


// Express Route
app.use('/user',user)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.send("Page Not Found").status(404).end()
});


module.exports = app;
