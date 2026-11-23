const mongoose = require("mongoose");

const statisticsGmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  Attributes: { type: String, required: true },
  NumberGymnospermMetabolites: { type: Number, required: true },
  sourceSheet: { type: String, enum: ["one", "two"], required: false },
});

module.exports = mongoose.model("StatisticsGmdb", statisticsGmdbSchema);
