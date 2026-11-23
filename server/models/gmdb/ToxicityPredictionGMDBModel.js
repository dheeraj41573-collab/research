const mongoose = require("mongoose");

const toxicityPredictionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn: { type: Number, required: true },
  cid: { type: String, required: false },
  commonName: { type: String, required: false },
  ld50: { type: String, required: false },
  toxicityClass: { type: String, required: false },
  averageSimilarity: { type: String, required: false },
  predictionAccuracy: { type: String, required: false },
  toxicityEntries: [
    {
      classification: { type: String, required: false },
      target: { type: String, required: false },
      prediction: { type: String, required: false },
      probability: { type: String, required: false },
    }
  ]
});

module.exports = mongoose.model("ToxicityPredictionGMDB", toxicityPredictionSchema);
