const PharmacologicalTableFmdb = require("../../models/fmdb/PharmacologicalTableFMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getPharmacologicalTableFmdb = async (req, res) => {
  try {
    const rows = await PharmacologicalTableFmdb.find({});
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getPharmacologicalTableFmdbById = async (req, res) => {
  const id = req.params.tableId;
  try {
    const row = await PharmacologicalTableFmdb.findById(id);
    res.status(200).json(row);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createPharmacologicalTableFmdb = async (req, res) => {
  const row = new PharmacologicalTableFmdb({
    _id: new mongoose.Types.ObjectId(),
    s_no: req.body.s_no,
    gymnospermSpecies: req.body.gymnospermSpecies,
    totalMolecules: req.body.totalMolecules,
    numberSuperclasses: req.body.numberSuperclasses,
    Column5: req.body.Column5,
  });
  try {
    await row.save();
    res.status(201).json(row);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologicalTableFmdb = async (req, res) => {
  const id = req.params.tableId;
  mongoose.set("useFindAndModify", false);
  PharmacologicalTableFmdb.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err }));
};

const deletePharmacologicalTableFmdb = async (req, res) => {
  const id = req.params.tableId;
  try {
    const row = await PharmacologicalTableFmdb.findByIdAndDelete(id);
    res.status(200).json(row);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const seedPharmacologicalTableFmdb = async (req, res) => {
  try {
    const existing = await PharmacologicalTableFmdb.findOne();
    if (existing) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../..", "fmdb", "pharmacological-table.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = data.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      s_no: row.s_no,
      gymnospermSpecies: row.gymnospermSpecies,
      totalMolecules: row.totalMolecules,
      numberSuperclasses: row.numberSuperclasses,
      Column5: row.Column5,
    }));
    await PharmacologicalTableFmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPharmacologicalTableFmdb,
  getPharmacologicalTableFmdbById,
  createPharmacologicalTableFmdb,
  updatePharmacologicalTableFmdb,
  deletePharmacologicalTableFmdb,
  seedPharmacologicalTableFmdb,
};
