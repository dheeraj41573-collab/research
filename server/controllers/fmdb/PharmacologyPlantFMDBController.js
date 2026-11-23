const PharmacologyPlantFmdb = require("../../models/fmdb/PharmacologyPlantFMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyFmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyPlantFmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyFmdbs = async (req, res) => {
  try {
    const pharmacologys = await PharmacologyPlantFmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addPharmacologyFmdb = async (req, res) => {
  const pharmacology = new PharmacologyPlantFmdb({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  try {
    await pharmacology.save();
    res.status(201).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deletePharmacologyFmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyPlantFmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyFmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyPlantFmdb.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err }));
};

const seedPharmacologyPlantFmdb = async (req, res) => {
  try {
    const existing = await PharmacologyPlantFmdb.findOne();
    if (existing) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../..", "dmdb", "pharmacology-plant.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = data.map((item) => ({
      _id: new mongoose.Types.ObjectId(),
      ...item,
    }));
    await PharmacologyPlantFmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOnePharmacologyFmdb,
  getAllPharmacologyFmdbs,
  addPharmacologyFmdb,
  deletePharmacologyFmdb,
  updatePharmacologyFmdb,
  seedPharmacologyPlantFmdb,
};
