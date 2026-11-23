const BiologicalActivityStatistics = require("../../models/lichMDb/BiologicalActivityStatisticsModel");
const fs = require("fs");
const path = require("path");

const getBiologicalActivityStatistics = async (req, res) => {
  try {
    const data = await BiologicalActivityStatistics.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBiologicalActivityStatisticsById = async (req, res) => {
  try {
    const data = await BiologicalActivityStatistics.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Biological activity statistics not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBiologicalActivityStatistics = async (req, res) => {
  try {
    const data = new BiologicalActivityStatistics(req.body);
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBiologicalActivityStatistics = async (req, res) => {
  try {
    const data = await BiologicalActivityStatistics.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!data) {
      return res.status(404).json({ message: "Biological activity statistics not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBiologicalActivityStatistics = async (req, res) => {
  try {
    const data = await BiologicalActivityStatistics.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Biological activity statistics not found" });
    }
    res.json({ message: "Biological activity statistics deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const importBiologicalActivityStatistics = async (req, res) => {
  try {
    // Clear existing data
    await BiologicalActivityStatistics.deleteMany({});
    
    // Read and parse the JSON file
    const filePath = path.join(__dirname, '../../../Statisties Biological activity.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);
    
    // Insert all records
    const result = await BiologicalActivityStatistics.insertMany(jsonData);
    res.json({ 
      message: `Successfully imported ${result.length} biological activity statistics records`,
      count: result.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBiologicalActivityStatistics,
  getBiologicalActivityStatisticsById,
  createBiologicalActivityStatistics,
  updateBiologicalActivityStatistics,
  deleteBiologicalActivityStatistics,
  importBiologicalActivityStatistics
};
