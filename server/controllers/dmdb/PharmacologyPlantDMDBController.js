const PharmacologyPlantDmdb = require("../../models/dmdb/PharmacologyPlantDMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyDmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyPlantDmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyDmdbs = async (req, res) => {
  try {
    const pharmacologys = await PharmacologyPlantDmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addPharmacologyDmdb = async (req, res) => {
  const pharmacology = new PharmacologyPlantDmdb({
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

const deletePharmacologyDmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyPlantDmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyDmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyPlantDmdb.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err }));
};

const seedPharmacologyPlantDmdb = async (req, res) => {
  try {
    const existing = await PharmacologyPlantDmdb.findOne();
    if (existing) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../..", "dmdb", "pharmacology-plant.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = data.map((item) => ({
      _id: new mongoose.Types.ObjectId(),
      ...item,
    }));
    await PharmacologyPlantDmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOnePharmacologyDmdb,
  getAllPharmacologyDmdbs,
  addPharmacologyDmdb,
  deletePharmacologyDmdb,
  updatePharmacologyDmdb,
  seedPharmacologyPlantDmdb,
};
