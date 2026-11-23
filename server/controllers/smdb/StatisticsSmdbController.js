const StatisticsSmdb = require("../../models/smdb/StatisticsSMDbModel.js");
const mongoose = require("mongoose");

const getOneStatisticsSmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsSmdb.findById(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatisticsSmdb = async (req, res, next) => {
  try {
    const pharmacologys = await StatisticsSmdb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addStatisticsSmdb = async (req, res, next) => {
  const statistics = new StatisticsSmdb({
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

const deleteStatisticsSmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    await StatisticsSmdb.deleteOne({ _id: id });
    res.status(200).json({ message: "StatisticsSmdb deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatisticsSmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  mongoose.set('useFindAndModify', false);
  StatisticsSmdb.findByIdAndUpdate(
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
          .json({ message: "StatisticsSmdb updated successfully", statistics });
      }
    }
  );
};

module.exports = {
  getOneStatisticsSmdb,
  getAllStatisticsSmdb,
  addStatisticsSmdb,
  deleteStatisticsSmdb,
  updateStatisticsSmdb,
};
