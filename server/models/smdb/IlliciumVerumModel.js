const mongoose = require("mongoose");

const illiciumVerumSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // sn:{type:Number,required:false,unique: true},
  scientificName: { type: String, required: false },
  commonName: { type: String, required: false },
  cid: { type: Number, required: true },
  compoundName: { type: String, required: true },
  IUPACName: { type: String, required: true },
  molecularWeight: { type: Number, required: true },
  molecularFormula: { type: String, required: true },
  canonicalSmiles: { type: String, required: true },
  superClass: { type: String, required: true },
  class: { type: String, required: true },
});

module.exports = mongoose.model("IlliciumVerum", illiciumVerumSchema);


