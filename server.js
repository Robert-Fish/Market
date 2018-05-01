const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");
const categoriesData = require("./data/categories");

// create express app
const app = express();

// create middleware to handle serving app
app.use("/", serverStatic(path.join(__dirname, "/public")));

// api
app.get("/api/cities", function(req, res) {
  res.json(categoriesData);
});

app.get("/api/:city/:categories", function(req, res) {
  res.json(categoriesData);
});

app.get("/api/:city/:categories/:listing/:item", function(req, res) {
  res.json(categoriesData);
});

app.get("/api/categories", function(req, res) {
  res.json(categoriesData);
});

////

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// create default port to serve app
const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started on port " + port);
