const mongoose = require("mongoose");

const gmdbSpeciesSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sn: { type: Number },
    speciesName: { type: String },
    commonName: { type: String },
    pubchemID: { type: String },
    IUPACName: { type: String },
    molecularWeight: { type: String },
    molecularFormula: { type: String },
    canonicalSmiles: { type: String },
    superclass: { type: String },
    class: { type: String },
    reference: { type: String },
  },
  { strict: false }
);

module.exports = gmdbSpeciesSchema;
