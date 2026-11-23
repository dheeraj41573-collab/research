const mongoose = require("mongoose");

const pharmacologyCerealGmdbSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    sn: { type: String, required: true },
  },
  { strict: false }
);

module.exports = mongoose.model("PharmacologyCerealGmdb", pharmacologyCerealGmdbSchema);
