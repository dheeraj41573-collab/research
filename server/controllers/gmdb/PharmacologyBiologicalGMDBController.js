const PharmacologyBiologicalGmdb = require("../../models/gmdb/PharmacologyBiologicalGMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyGmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalGmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyGmdbs = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyBiologicalGmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyGmdb = async (req, res, next) => {
  const pharmacology = new PharmacologyBiologicalGmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    PubChemCID: req.body.PubChemCID,
    CommonName: req.body.CommonName,
    PharmacologicalActivity: req.body.PharmacologicalActivity,
  });

  try {
    await pharmacology.save();
    res.status(201).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deletePharmacologyGmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalGmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyGmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyBiologicalGmdb.findByIdAndUpdate(
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

const seedPharmacologyBiologicalGmdb = async (req, res) => {
  try {
    const existing = await PharmacologyBiologicalGmdb.findOne();
    if (existing && req.query.force !== "true") {
      return res.status(400).json({ message: "Data already exists" });
    }
    if (req.query.force === "true") {
      await PharmacologyBiologicalGmdb.deleteMany({});
    }
    const jsonPath = path.join(__dirname, "../../..", "gmdb", "PharmacologicalBiological.json");
    const rows = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = rows.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      sn: row.sn,
      PubChemCID: row.PubChemCID,
      CommonName: row.CommonName,
      PharmacologicalActivity: row.PharmacologicalActivity,
    }));
    await PharmacologyBiologicalGmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPharmacologyGmdb,
  getOnePharmacologyGmdb,
  getAllPharmacologyGmdbs,
  deletePharmacologyGmdb,
  updatePharmacologyGmdb,
  seedPharmacologyBiologicalGmdb,
};
