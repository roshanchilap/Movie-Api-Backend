const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  mid: { type: Number, index: { unique: true }, required: true },
  name: { type: String, index: { unique: true }, required: true },
  summary: { type: String, required: true },
  rating: { type: String, required: true },
  posterpath: { type: String, required: true },
  runtime: { type: String, required: true },
  theatresId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theatre" }],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
