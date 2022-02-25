const mongoose = require("mongoose");
const Movie = require("../models/movie");
const theatreSchema = new mongoose.Schema({
  tid: { type: Number, index: { unique: true }, required: true },
  name: { type: String, index: { unique: true }, required: true },
  rating: { type: String, required: true },
  capacity: { type: Number, required: true },
  screens: [{ type: mongoose.Schema.Types.ObjectId, ref: "Screen" }],
});

const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;
