const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");
const categoriesData = require("./data/categories");
const citiesData = require("./data/cities");
const itemsData = require("./data/items");
// create express app
const app = express();

// create middleware to handle serving app
app.use("/", serverStatic(path.join(__dirname, "/public")));

// api
//shows all the cities
app.get("/api/cities", function(req, res) {
  res.json(citiesData);
});

//shows all the categories for a city
app.get("/api/:city", function(req, res) {
  res.json(categoriesData);
});

//This shows all the items for that category
app.get("/api/:city/:categories", function(req, res) {
  res.json(itemsData);
});

// Show all the items for that listing
app.get("/api/:city/:categories/:listing", function(req, res) {
  res.json(itemsData);
});

// Show the selected item
app.get("/api/:city/:categories/:listing/:item", function(req, res) {
  res.json(itemsData);
});

////

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// create default port to serve app
const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started on port " + port);
