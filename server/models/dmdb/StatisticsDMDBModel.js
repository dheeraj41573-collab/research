const mongoose = require("mongoose");

const statisticsDmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  Activities: { type: String, required: true },
  Total: { type: Number, required: true },
});

module.exports = mongoose.model("StatisticsDmdb", statisticsDmdbSchema);
