const PharmacologyCerealDmdb = require("../../models/dmdb/PharmacologyCerealDMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyDmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyCerealDmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyDmdbs = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyCerealDmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyDmdb = async (req, res, next) => {
  const pharmacology = new PharmacologyCerealDmdb({
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

const deletePharmacologyDmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyCerealDmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyDmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyCerealDmdb.findByIdAndUpdate(
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

const normalizeKey = (k) => k;

const seedPharmacologyCerealDmdb = async (req, res) => {
  try {
    const existing = await PharmacologyCerealDmdb.findOne();
    if (existing && req.query.force !== "true") {
      return res.status(400).json({ message: "Data already exists" });
    }
    if (req.query.force === "true") {
      await PharmacologyCerealDmdb.deleteMany({});
    }
    const jsonPath = path.join(__dirname, "../../..", "dmdb", "PharmacologicalCereals.json");
    const rows = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = rows.map((row) => {
      const obj = { _id: new mongoose.Types.ObjectId() };
      Object.entries(row).forEach(([key, val]) => {
        obj[normalizeKey(key)] = typeof val === "number" ? val : String(val);
      });
      return obj;
    });
    await PharmacologyCerealDmdb.insertMany(mapped);
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
  seedPharmacologyCerealDmdb,
};
