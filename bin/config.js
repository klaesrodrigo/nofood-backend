const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const variables = require("./variables");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

mongoose.connect(variables.database.connection);

module.exports = app;