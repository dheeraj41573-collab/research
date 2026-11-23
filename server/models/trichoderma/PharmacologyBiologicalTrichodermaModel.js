const mongoose = require("mongoose");

const pharmacologyBiologicalTrichodermaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  PubchemID: { type: Number, required: true },
  MetaboliteName: { type: String, required: true },
  BiologicalActivity: { type: String, required: true },
});

module.exports = mongoose.model("PharmacologyBiologicalTrichoderma", pharmacologyBiologicalTrichodermaSchema);
