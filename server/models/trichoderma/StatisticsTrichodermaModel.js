const mongoose = require("mongoose");

const statisticsTrichodermaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  speciesName: { type: String, required: true },
  NoMetabolite: { type: Number, required: true },
});

module.exports = mongoose.model("StatisticsTrichoderma", statisticsTrichodermaSchema);
