const PharmacologyBiologicalDmdb = require("../../models/dmdb/PharmacologyBiologicalDMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyDmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalDmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyDmdbs = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyBiologicalDmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyDmdb = async (req, res, next) => {
  const pharmacology = new PharmacologyBiologicalDmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    CID: req.body.CID,
    CompoundName: req.body.CompoundName,
    BiologicalActivities: req.body.BiologicalActivities,
  });

  try {
    await pharmacology.save();
    res.status(201).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deletePharmacologyDmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalDmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyDmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyBiologicalDmdb.findByIdAndUpdate(
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

const seedPharmacologyBiologicalDmdb = async (req, res) => {
  try {
    const existing = await PharmacologyBiologicalDmdb.findOne();
    if (existing && req.query.force !== "true") {
      return res.status(400).json({ message: "Data already exists" });
    }
    if (req.query.force === "true") {
      await PharmacologyBiologicalDmdb.deleteMany({});
    }
    const jsonPath = path.join(__dirname, "../../..", "dmdb", "PharmacologicalBiological.json");
    const rows = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = rows.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      sn: row.sn,
      CID: row.CID,
      CompoundName: row.CompoundName,
      BiologicalActivities: row.BiologicalActivities,
    }));
    await PharmacologyBiologicalDmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPharmacologyDmdb,
  getOnePharmacologyDmdb,
  getAllPharmacologyDmdbs,
  deletePharmacologyDmdb,
  updatePharmacologyDmdb,
  seedPharmacologyBiologicalDmdb,
};
