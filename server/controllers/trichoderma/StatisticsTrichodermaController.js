const StatisticsTrichoderma = require("../../models/trichoderma/StatisticsTrichodermaModel.js");
const mongoose = require("mongoose");

const getOneStatisticsTrichoderma = async (req, res, next) => {
  const id = req.params.StatisticsTrichodermaId;
  try {
    const statisticsTrichoderma = await StatisticsTrichoderma.findById(id);
    res.status(200).json(statisticsTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatisticsTrichoderma = async (req, res, next) => {
  try {
    const statistics = await StatisticsTrichoderma.find({});
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addStatisticsTrichoderma = async (req, res, next) => {
  const statisticsTrichoderma = new StatisticsTrichoderma({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    speciesName: req.body.speciesName,
    NoMetabolite: req.body.NoMetabolite,
  });
  try {
    await statisticsTrichoderma.save();
    res.status(201).json(statisticsTrichoderma);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatisticsTrichoderma = async (req, res, next) => {
  const id = req.params.StatisticsTrichodermaId;
  mongoose.set("useFindAndModify", false);
  StatisticsTrichoderma.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      speciesName: req.body.speciesName,
      NoMetabolite: req.body.NoMetabolite,
    },
    function (err, statisticsTrichoderma) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StatisticsTrichoderma updated successfully",
          statisticsTrichoderma: statisticsTrichoderma,
        });
      }
    }
  );
};

const deleteStatisticsTrichoderma = async (req, res, next) => {
  const id = req.params.StatisticsTrichodermaId;
  try {
    await StatisticsTrichoderma.deleteOne({ _id: id });
    res.status(200).json({ message: "StatisticsTrichoderma deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStatisticsTrichoderma,
  getAllStatisticsTrichoderma,
  addStatisticsTrichoderma,
  deleteStatisticsTrichoderma,
  updateStatisticsTrichoderma,
};
