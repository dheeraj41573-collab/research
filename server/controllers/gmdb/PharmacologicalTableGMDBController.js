const PharmacologicalTableGmdb = require("../../models/gmdb/PharmacologicalTableGMDBModel");
const fs = require("fs");
const path = require("path");

const getPharmacologicalTableGmdb = async (req, res) => {
  try {
    const data = await PharmacologicalTableGmdb.find().sort({ s_no: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPharmacologicalTableGmdbById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PharmacologicalTableGmdb.findOne({ s_no: id });
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPharmacologicalTableGmdb = async (req, res) => {
  try {
    const item = new PharmacologicalTableGmdb(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePharmacologicalTableGmdb = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PharmacologicalTableGmdb.findOneAndUpdate(
      { s_no: id },
      req.body,
      { new: true }
    );
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePharmacologicalTableGmdb = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PharmacologicalTableGmdb.findOneAndDelete({ s_no: id });
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const seedPharmacologicalTableGmdb = async (req, res) => {
  try {
    const existingData = await PharmacologicalTableGmdb.findOne();
    if (existingData) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../PharmacologicalTableGmdb.json");
    const jsonData = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(jsonData);
    const dataToInsert = data.filter(item => typeof item.s_no === "number");
    await PharmacologicalTableGmdb.insertMany(dataToInsert);
    res.json({ message: "Data seeded successfully", count: dataToInsert.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPharmacologicalTableGmdb,
  getPharmacologicalTableGmdbById,
  createPharmacologicalTableGmdb,
  updatePharmacologicalTableGmdb,
  deletePharmacologicalTableGmdb,
  seedPharmacologicalTableGmdb,
};
