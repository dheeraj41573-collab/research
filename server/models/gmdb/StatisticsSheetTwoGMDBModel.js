const mongoose = require("mongoose");

const statisticsSheetTwoGmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  Attributes: { type: String, required: true },
  NumberGymnospermMetabolites: { type: Number, required: true },
});

module.exports = mongoose.model("StatisticsSheetTwoGmdb", statisticsSheetTwoGmdbSchema);
