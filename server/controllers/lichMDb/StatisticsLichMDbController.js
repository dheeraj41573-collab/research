const StatisticsLichMDb = require("../../models/lichMDb/StatisticsLichMDbModel.js");
const mongoose = require("mongoose");

const getOneStatisticsLichMDb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsLichMDb.findById(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatisticsLichMDb = async (req, res, next) => {
  try {
    const statistics = await StatisticsLichMDb.find({});
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addStatisticsLichMDb = async (req, res, next) => {
  const statistics = new StatisticsLichMDb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    statisticsName: req.body.statisticsName,
    totalNumber: req.body.totalNumber,
  });

  try {
    await statistics.save();
    res.status(201).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteStatisticsLichMDb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    await StatisticsLichMDb.deleteOne({ _id: id });
    res.status(200).json({ message: "StatisticsLichMDb deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatisticsLichMDb = async (req, res, next) => {
  const id = req.params.statisticsId;
  mongoose.set('useFindAndModify', false);
  StatisticsLichMDb.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      statisticsName: req.body.statisticsName,
      totalNumber: req.body.totalNumber,
    },
    function (err, statistics) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "StatisticsLichMDb updated successfully", statistics });
      }
    }
  );
};

module.exports = {
  getOneStatisticsLichMDb,
  getAllStatisticsLichMDb,
  addStatisticsLichMDb,
  deleteStatisticsLichMDb,
  updateStatisticsLichMDb,
};
