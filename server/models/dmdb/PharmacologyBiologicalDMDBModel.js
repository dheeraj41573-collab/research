const mongoose = require("mongoose");

const pharmacologyBiologicalDmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  CID: { type: Number, required: true },
  CompoundName: { type: String, required: true },
  BiologicalActivities: { type: String, required: true },
});

module.exports = mongoose.model("PharmacologyBiologicalDmdb", pharmacologyBiologicalDmdbSchema);
