const mongoose = require("mongoose");

const umbilicariaSpodochroa1Schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lichen: { type: String, required: true },
  cid: { type: String, required: true },
  commonName: { type: String, required: true },
  IUPACName: { type: String, required: true },
  molecularWeight: { type: Number, required: true },
  molecularFormula: { type: String, required: true },
  canonicalSmiles: { type: String, required: true },
  references: { type: String, required: true },
  superClass: { type: String, required: true },
  class: { type: String, required: true },
});

module.exports = mongoose.model("UmbilicariaSpodochroa1", umbilicariaSpodochroa1Schema);
