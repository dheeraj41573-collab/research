const mongoose = require("mongoose");

const pharmacologyBiologicalFmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  CID: { type: Number, required: true },
  CompoundName: { type: String, required: true },
  BiologicalActivity: { type: String, required: true },
});

module.exports = mongoose.model("PharmacologyBiologicalFmdb", pharmacologyBiologicalFmdbSchema);
