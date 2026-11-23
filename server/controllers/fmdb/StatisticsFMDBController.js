const StatisticsFmdb = require("../../models/fmdb/StatisticsFMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOneStatisticsFmdb = async (req, res) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsFmdb.findById(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatisticsFmdbs = async (req, res) => {
  try {
    const stats = await StatisticsFmdb.find({});
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addStatisticsFmdb = async (req, res) => {
  const stat = new StatisticsFmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    BioactivitiesName: req.body.BioactivitiesName,
    TotalMetabolites: req.body.TotalMetabolites,
    sourceSheet: req.body.sourceSheet,
  });
  try {
    await stat.save();
    res.status(201).json(stat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteStatisticsFmdb = async (req, res) => {
  const id = req.params.statisticsId;
  try {
    const stat = await StatisticsFmdb.findByIdAndDelete(id);
    res.status(200).json(stat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatisticsFmdb = async (req, res) => {
  const id = req.params.statisticsId;
  mongoose.set("useFindAndModify", false);
  StatisticsFmdb.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err }));
};

const getStatisticsSheetOne = async (req, res) => {
  try {
    const stats = await StatisticsSheetOneFmdb.find({});
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getStatisticsSheetTwo = async (req, res) => {
  try {
    const stats = await StatisticsSheetTwoFmdb.find({});
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const seedStatisticsFmdb = async (req, res) => {
  try {
    const oneExists = await StatisticsSheetOneFmdb.findOne();
    const twoExists = await StatisticsSheetTwoFmdb.findOne();
    if (oneExists || twoExists) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonOne = path.join(__dirname, "../../..", "fmdb", "statistics-sheet-one.json");
    const jsonTwo = path.join(__dirname, "../../..", "fmdb", "statistics-sheet-two.json");
    const dataOne = JSON.parse(fs.readFileSync(jsonOne, "utf8"));
    const dataTwo = JSON.parse(fs.readFileSync(jsonTwo, "utf8"));
    const mappedOne = dataOne.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      sn: row.sn,
      BioactivitiesName: row.BioactivitiesName,
      TotalMetabolites: row.TotalMetabolites,
    }));
    const mappedTwo = dataTwo.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      sn: row.sn,
      BioactivitiesName: row.BioactivitiesName,
      TotalMetabolites: row.TotalMetabolites,
    }));
    await StatisticsSheetOneFmdb.insertMany(mappedOne);
    await StatisticsSheetTwoFmdb.insertMany(mappedTwo);
    res.json({ message: "Seeded successfully", count: mappedOne.length + mappedTwo.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOneStatisticsFmdb,
  getAllStatisticsFmdbs,
  addStatisticsFmdb,
  deleteStatisticsFmdb,
  updateStatisticsFmdb,
  getStatisticsSheetOne,
  getStatisticsSheetTwo,
  seedStatisticsFmdb,
};
