const mongoose = require("mongoose");

const pharmacologyPlantLichMDbSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
 Antimicrobial: { type: String, required: true },
  Antiprotozoal: { type: String, required: true },
  Antiviral: { type: String, required: true },
  Antiinflammatory: { type: String, required: true },
  Antioxidant: { type: String, required: true },
  Antidiabetic: { type: String, required: true },
  Antiapoptotic: { type: String, required: true },
  Anticancer: { type: String, required: true },
  Antibacterial: { type: String, required: true },
  Antifungal: { type: String, required: true },
  Antiallergy: { type: String, required: true },
  Antiestrogenic: { type: String, required: true },
  Anticonvulsant: { type: String, required: true },
  Antiobesity: { type: String, required: true },
  Antinociceptive: { type: String, required: true },
  Antiatherosclerotic: { type: String, required: true },
  Antirheumatic: { type: String, required: true },
  Antidiabetic: { type: String, required: true },
  Antihypertensive: { type: String, required: true },
  Antiulcer: { type: String, required: true },
  Antiasthmatic: { type: String, required: true },

});

module.exports = mongoose.model("PharmacologyPlantLichMDb",pharmacologyPlantLichMDbSchema);