const mongoose = require("mongoose");

const biologicalActivityStatisticsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Antimicrobial: { type: String, required: false },
  Antiprotozoal: { type: String, required: false },
  Antiviral: { type: String, required: false },
  Antiinflammatory: { type: String, required: false },
  Antioxidant: { type: String, required: false },
  Antiapoptotic: { type: String, required: false },
  Anticancer: { type: String, required: false },
  Antibacterial: { type: String, required: false },
  Antifungal: { type: String, required: false },
  Analgesic: { type: String, required: false },
  Antiallergy: { type: String, required: false },
  Antiestrogenic: { type: String, required: false },
  Anticonvulsant: { type: String, required: false },
  Antiobesity: { type: String, required: false },
  Antinociceptive: { type: String, required: false },
  Antiatherosclerotic: { type: String, required: false },
  Antirheumatic: { type: String, required: false },
  Antidiabetic: { type: String, required: false },
  Antihypertensive: { type: String, required: false },
  Antiulcer: { type: String, required: false },
  AntiOxidant: { type: String, required: false },
  Antiasthmatic: { type: String, required: false }
});

module.exports = mongoose.model("BiologicalActivityStatistics", biologicalActivityStatisticsSchema);
