const mongoose = require("mongoose");

const jaifalSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  scientificName: { type: String, required: true },
  commonName: { type: String, required: true },
  cid: { type: String, required: true },
  compoundName: { type: String, required: true },
  IUPACName: { type: String, required: true },
  molecularWeight: { type: Number, required: true },
  molecularFormula: { type: String, required: true },
  canonicalSmiles: { type: String, required: true },
  superClass: { type: String, required: true },
  class: { type: String, required: true },
});

module.exports = mongoose.model("Jaifal", jaifalSchema);