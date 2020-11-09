const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pogchamp:pogchamp@cluster0.9jipw.mongodb.net/webdev?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(process.env.MONGODGB_URL, { UseUnifiedTopology: true,useNewUrlParser: true});

const db=mongoose.connection;

db.on("error", console.error.bind(console, "MOngoDB connection error:"));

db.once("open", function() {
  console.log("connected to DB...");
});

