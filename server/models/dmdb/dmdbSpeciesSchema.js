const mongoose = require("mongoose");

const dmdbSpeciesSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sn: { type: Number },
    PlantName: { type: String },
    ScientificName: { type: String },
    CID: { type: String },
    MetaboliteName: { type: String },
    IUPACName: { type: String },
    MolecularWeight: { type: String },
    MolecularFormula: { type: String },
    CanonicalSmile: { type: String },
    References: { type: String },
  },
  { strict: false }
);

module.exports = dmdbSpeciesSchema;
