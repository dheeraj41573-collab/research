const mongoose = require("mongoose");

const pharmacologyPlantFmdbSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sn: { type: Number, required: true },
  },
  { strict: false }
);

module.exports = mongoose.model("PharmacologyPlantFmdb", pharmacologyPlantFmdbSchema);
