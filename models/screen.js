const mongoose = require("mongoose");
const screenSchema = new mongoose.Schema({
  scid: { type: String, index: { unique: true }, required: true },
  screenNo: {
    type: String,
    index: { unique: true },
    required: true,
    max: 4,
    min: 1,
  },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  showTime: [{ type: mongoose.Schema.Types.ObjectId, ref: "Shows" }],
});

const Screen = mongoose.model("Screen", screenSchema);

module.exports = Screen;
