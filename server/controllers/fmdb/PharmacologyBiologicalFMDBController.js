const PharmacologyBiologicalFmdb = require("../../models/fmdb/PharmacologyBiologicalFMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyFmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalFmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyFmdbs = async (req, res) => {
  try {
    const pharmacologys = await PharmacologyBiologicalFmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addPharmacologyFmdb = async (req, res) => {
  const pharmacology = new PharmacologyBiologicalFmdb({
    _id: new mongoose.Types.ObjectId(),
    CID: req.body.CID,
    CompoundName: req.body.CompoundName,
    BiologicalActivity: req.body.BiologicalActivity,
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
    const pharmacology = await PharmacologyBiologicalFmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyFmdb = async (req, res) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyBiologicalFmdb.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err }));
};

const seedPharmacologyBiologicalFmdb = async (req, res) => {
  try {
    const existing = await PharmacologyBiologicalFmdb.findOne();
    if (existing) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../..", "fmdb", "pharmacology-biological.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = data.map((item) => ({
      _id: new mongoose.Types.ObjectId(),
      CID: item.CID,
      CompoundName: item.CompoundName,
      BiologicalActivity: item.BiologicalActivity,
    }));
    await PharmacologyBiologicalFmdb.insertMany(mapped);
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
  seedPharmacologyBiologicalFmdb,
};
