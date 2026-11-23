const mongoose = require("mongoose");

const pharmacologyBiologicalGmdbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  PubChemCID: { type: Number, required: true },
  CommonName: { type: String, required: true },
  PharmacologicalActivity: { type: String, required: true },
});

module.exports = mongoose.model("PharmacologyBiologicalGmdb", pharmacologyBiologicalGmdbSchema);
