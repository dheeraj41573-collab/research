const PharmacologicalTableLichMDb = require("../../models/lichMDb/PharmacologicalTableLichMDbModel");
const fs = require("fs");
const path = require("path");

const getPharmacologicalTableLichMDb = async (req, res) => {
  try {
    const data = await PharmacologicalTableLichMDb.find().sort({ s_no: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPharmacologicalTableLichMDbById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PharmacologicalTableLichMDb.findOne({ s_no: id });
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPharmacologicalTableLichMDb = async (req, res) => {
  try {
    const data = new PharmacologicalTableLichMDb(req.body);
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePharmacologicalTableLichMDb = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PharmacologicalTableLichMDb.findOneAndUpdate(
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

const deletePharmacologicalTableLichMDb = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PharmacologicalTableLichMDb.findOneAndDelete({ s_no: id });
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const seedPharmacologicalTableLichMDb = async (req, res) => {
  try {
    // Check if data already exists
    const existingData = await PharmacologicalTableLichMDb.findOne();
    if (existingData) {
      return res.status(400).json({ message: "Data already exists" });
    }

    // Read JSON file
    const jsonPath = path.join(__dirname, "../../PharmacologicalTableLichMDb.json");
    const jsonData = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(jsonData);

    // Filter out header row and insert data
    const dataToInsert = data.filter(item => typeof item.s_no === "number");
    
    await PharmacologicalTableLichMDb.insertMany(dataToInsert);
    res.json({ message: "Data seeded successfully", count: dataToInsert.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPharmacologicalTableLichMDb,
  getPharmacologicalTableLichMDbById,
  createPharmacologicalTableLichMDb,
  updatePharmacologicalTableLichMDb,
  deletePharmacologicalTableLichMDb,
  seedPharmacologicalTableLichMDb,
};
