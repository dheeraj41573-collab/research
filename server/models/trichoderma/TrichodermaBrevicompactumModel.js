const mongoose = require("mongoose");

const trichodermaBrevicompactumSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  speciesName: { type: String, required: false },
  commonName: { type: String, required: false },
  pubchemID: { type: Number, required: true },
  IUPACName: { type: String, required: true },
  molecularWeight: { type: Number, required: true },
  molecularFormula: { type: String, required: true },
  canonicalSmiles: { type: String, required: true },
  superclass: { type: String, required: true },
  class: { type: String, required: true },
  reference: { type: String, required: false },
});

module.exports = mongoose.model("TrichodermaBrevicompactum", trichodermaBrevicompactumSchema);
