const mongoose = require("mongoose");

const pharmacologyCerealFmdbSchema = new mongoose.Schema(
  {_id: mongoose.Schema.Types.ObjectId,
    sn: { type: String, required: true },
     "Plants": { type: String, required: true },
  "Anticancerous": { type: String, required: true },
  "Antibacterial": { type: String, required: true },
  "Antifungal": { type: String, required: true }, 
  "Antiinflammattory": { type: String, required: true },
  "Antioxidant": { type: String, required: true },
  "Antidiabetic": { type: String, required: true },
  "Antiprotozons": { type: String, required: true },  
  "Antiallergic": { type: String, required: true },
  "Anticonvulsant": { type: String, required: true },
  "Anticoagulant": { type: String, required: true },
  "Antiulcer": { type: String, required: true },
  "Antiaging": { type: String, required: true },
  "Antiobesity": { type: String, required: true },  
  "Antianxiety": { type: String, required: true },  
  "Antidepressive": { type: String, required: true },
  "Antiosteoporosis": { type: String, required: true },
  "Antineoplastic": { type: String, required: true },
  "Antialgal": { type: String, required: true },
  "Antispasmodic": { type: String, required: true },
  "Antiestrogenic": { type: String, required: true },
  "Antiproliferative": { type: String, required: true }
    
  
  },
  { strict: false }
);

module.exports = mongoose.model("PharmacologyCerealFmdb", pharmacologyCerealFmdbSchema);
