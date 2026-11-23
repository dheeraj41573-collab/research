const StatisticsDmdb = require("../../models/dmdb/StatisticsDMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getStatisticsDmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsDmdb.findById(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatisticsDmdbs = async (req, res, next) => {
  try {
    const statistics = await StatisticsDmdb.find({});
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addStatisticsDmdb = async (req, res, next) => {
  const statistics = new StatisticsDmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    Activities: req.body.Activities,
    Total: req.body.Total,
  });

  try {
    await statistics.save();
    res.status(201).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteStatisticsDmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await StatisticsDmdb.findByIdAndDelete(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatisticsDmdb = async (req, res, next) => {
  const id = req.params.statisticsId;
  mongoose.set("useFindAndModify", false);
  StatisticsDmdb.findByIdAndUpdate(
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
  addStatisticsDmdb,
  getStatisticsDmdb,
  getAllStatisticsDmdbs,
  deleteStatisticsDmdb,
  updateStatisticsDmdb,
};
