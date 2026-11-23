const mongoose = require("mongoose");

const statisticsLichMDbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn:{type:Number,required:true},
  Attributes: { type: String, required: true },
  NumberLichenMetabolities: { type: Number, required: true },
});

module.exports = mongoose.model("StatisticsLichMDb",statisticsLichMDbSchema);