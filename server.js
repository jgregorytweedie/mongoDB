const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(process.env.MONGODGB_URL, { UseUnifiedTopology: true,useNewUrlParser: true});

const db=mongoose.connection;

db.on("error", console.error.bind(console, "MOngoDB connection error:"));

db.once("open", function() {
  console.log("connected to DB...");
});

