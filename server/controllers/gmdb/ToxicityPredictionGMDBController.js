const ToxicityPredictionGMDB = require("../../models/gmdb/ToxicityPredictionGMDBModel");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOneToxicityPrediction = async (req, res, next) => {
  const id = req.params.toxicityId;
  try {
    const toxicity = await ToxicityPredictionGMDB.findById(id);
    res.status(200).json(toxicity);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllToxicityPredictions = async (req, res, next) => {
  try {
    const toxicities = await ToxicityPredictionGMDB.find({});
    res.status(200).json(toxicities);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addToxicityPrediction = async (req, res, next) => {
  const toxicity = new ToxicityPredictionGMDB({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    cid: req.body.cid,
    commonName: req.body.commonName,
    ld50: req.body.ld50,
    toxicityClass: req.body.toxicityClass,
    averageSimilarity: req.body.averageSimilarity,
    predictionAccuracy: req.body.predictionAccuracy,
    toxicityEntries: req.body.toxicityEntries
  });

  try {
    await toxicity.save();
    res.status(201).json(toxicity);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteToxicityPrediction = async (req, res, next) => {
  const id = req.params.toxicityId;
  try {
    const toxicity = await ToxicityPredictionGMDB.findByIdAndDelete(id);
    res.status(200).json(toxicity);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateToxicityPrediction = async (req, res, next) => {
  const id = req.params.toxicityId;
  mongoose.set("useFindAndModify", false);
  ToxicityPredictionGMDB.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const seedToxicityPrediction = async (req, res) => {
  try {
    // Delete all existing data first
    await ToxicityPredictionGMDB.deleteMany({});
    
    // Read the processed JSON file
    const dataPath = path.join(__dirname, '../../../ToxicityPrediction_processed.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(rawData);
    
    // Add _id to each entry
    const entries = data.map(item => ({
      ...item,
      _id: new mongoose.Types.ObjectId()
    }));
    
    // Insert all data into the database
    await ToxicityPredictionGMDB.insertMany(entries);
    
    res.json({ 
      message: "Data seeded successfully!", 
      count: entries.length 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToxicityPrediction,
  getOneToxicityPrediction,
  getAllToxicityPredictions,
  deleteToxicityPrediction,
  updateToxicityPrediction,
  seedToxicityPrediction,
};
