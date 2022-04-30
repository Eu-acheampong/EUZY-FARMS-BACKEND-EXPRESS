const mongoose = require("mongoose");

// connecting to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/euzyfarm")
  .then(() => console.log("Database connected successfully!"));
