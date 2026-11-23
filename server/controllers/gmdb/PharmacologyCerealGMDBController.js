const PharmacologyCerealGmdb = require("../../models/gmdb/PharmacologyCerealGMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOnePharmacologyGmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyCerealGmdb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyGmdbs = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyCerealGmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyGmdb = async (req, res, next) => {
  const pharmacology = new PharmacologyCerealGmdb({
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

const deletePharmacologyGmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyCerealGmdb.findByIdAndDelete(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyGmdb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set("useFindAndModify", false);
  PharmacologyCerealGmdb.findByIdAndUpdate(
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

const seedPharmacologyCerealGmdb = async (req, res) => {
  try {
    const existing = await PharmacologyCerealGmdb.findOne();
    if (existing && req.query.force !== "true") {
      return res.status(400).json({ message: "Data already exists" });
    }
    if (req.query.force === "true") {
      await PharmacologyCerealGmdb.deleteMany({});
    }
    const jsonPath = path.join(__dirname, "../../..", "gmdb", "PharmacologicalCereals.json");
    const rows = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = rows.map((row) => {
      const obj = { _id: new mongoose.Types.ObjectId() };
      Object.entries(row).forEach(([key, val]) => {
        obj[normalizeKey(key)] = typeof val === "number" ? val : String(val);
      });
      return obj;
    });
    await PharmacologyCerealGmdb.insertMany(mapped);
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
  seedPharmacologyCerealGmdb,
};
