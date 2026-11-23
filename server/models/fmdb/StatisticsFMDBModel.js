const mongoose = require("mongoose");

const statisticsFmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  BioactivitiesName: { type: String, required: true },
  TotalMetabolites: { type: Number, required: true },
});

module.exports = mongoose.model("StatisticsFmdb", statisticsFmdbSchema);
