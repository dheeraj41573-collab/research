const StatisticsGmdb = require("../../models/gmdb/StatisticsGMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getStatisticsGmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsGmdb.findById(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatisticsGmdbs = async (req, res, next) => {
  try {
    const statistics = await StatisticsGmdb.find({});
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addStatisticsGmdb = async (req, res, next) => {
  const statistics = new StatisticsGmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    Attributes: req.body.Attributes,
    NumberGymnospermMetabolites: req.body.NumberGymnospermMetabolites,
  });

  try {
    await statistics.save();
    res.status(201).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteStatisticsGmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsGmdb.findByIdAndDelete(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatisticsGmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  mongoose.set("useFindAndModify", false);
  StatisticsGmdb.findByIdAndUpdate(
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


module.exports = {
  addStatisticsGmdb,
  getStatisticsGmdb,
  getAllStatisticsGmdbs,
  deleteStatisticsGmdb,
  updateStatisticsGmdb,
};
