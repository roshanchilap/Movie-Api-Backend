const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@cluster0.6bxxu.mongodb.net/movie?retryWrites=true&w=majority";
mongoose.connect(url, () => {
  console.log("Connection to database is sucessfull!");
});
