const mongoose = require("mongoose");

const pharmacologicalTableLichMDbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  s_no: { type: Number, required: true },
  lichenSpecies: { type: String, required: true },
  totalMolecules: { type: Number, required: true },
  numberSuperclasses: { type: Number, required: true },
  Column5: { type: Number, required: true },
});

module.exports = mongoose.model("PharmacologicalTableLichMDb", pharmacologicalTableLichMDbSchema);
