const mongoose = require("mongoose");

const pharmacologyPlantGmdbSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sn: { type: Number, required: true },
  },
  { strict: false }
);

module.exports = mongoose.model("PharmacologyPlantGmdb", pharmacologyPlantGmdbSchema);
