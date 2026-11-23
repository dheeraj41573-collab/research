const mongoose = require("mongoose");

const fmdbSpeciesSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sn: { type: Number },
    ScientificName: { type: String },
    CommonName: { type: String },
    cid: { type: String },
    CompoundName: { type: String },
    IUPACName: { type: String },
    MolecularWeight: { type: String },
    MolecularFormula: { type: String },
    CanonicalSmiles: { type: String },
    References: { type: String },
  },
  { strict: false }
);

module.exports = fmdbSpeciesSchema;
