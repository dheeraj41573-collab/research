const mongoose = require("mongoose");

const pharmacologyBiologicalSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn:{type:Number,required:true},
  metaboliteName: { type: String, required: true },
  pubchemID: { type: String, required: true },
  biologicalActivity: { type: String, required: true },
});

module.exports = mongoose.model("PharmacologyBiological",pharmacologyBiologicalSchema);