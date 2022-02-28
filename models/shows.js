const mongoose = require("mongoose");
const showSchema = new mongoose.Schema({
  sid: { type: Number, index: { unique: true }, required: true },
  time: { type: String, index: { unique: true }, required: true },
  availableSeats: { type: Number, required: true },
});

const Shows = mongoose.model("Shows", showSchema);

module.exports = Shows;
