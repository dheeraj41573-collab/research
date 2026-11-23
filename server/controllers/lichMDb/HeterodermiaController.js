const Heterodermia = require("../../models/lichMDb/HeterodermiaModel.js");
const mongoose = require("mongoose");

const addHeterodermia = async (req, res, next) => {
  const heterodermia = new Heterodermia({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    lichen: req.body.lichen,
    cid: req.body.cid,
    commonName: req.body.commonName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    references: req.body.references,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await heterodermia.save();
    res.status(201).json(heterodermia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneHeterodermia = async (req, res, next) => {
  const id = req.params.heterodermiaId;
  try {
    const heterodermia = await Heterodermia.findById(id);
    res.status(200).json(heterodermia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHeterodermias = async (req, res, next) => {
  try {
    const heterodermias = await Heterodermia.find({});
    res.status(200).json(heterodermias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateHeterodermia = async (req, res, next) => {
  const id = req.params.heterodermiaId;
  mongoose.set("useFindAndModify", false);
  Heterodermia.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      lichen: req.body.lichen,
      cid: req.body.cid,
      commonName: req.body.commonName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      references: req.body.references,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, heterodermia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Heterodermia updated successfully",
          heterodermia: heterodermia,
        });
      }
    }
  );
};

const deleteHeterodermia = async (req, res, next) => {
  const id = req.params.heterodermiaId;
  try {
    await Heterodermia.deleteOne({ _id: id });
    res.status(200).json({ message: "Heterodermia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHeterodermia,
  getAllHeterodermias,
  addHeterodermia,
  deleteHeterodermia,
  updateHeterodermia,
};