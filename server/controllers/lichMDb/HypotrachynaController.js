const Hypotrachyna = require("../../models/lichMDb/HypotrachynaModel.js");
const mongoose = require("mongoose");

const addHypotrachyna = async (req, res, next) => {
  const hypotrachyna = new Hypotrachyna({
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
    await hypotrachyna.save();
    res.status(201).json(hypotrachyna);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneHypotrachyna = async (req, res, next) => {
  const id = req.params.hypotrachynaId;
  try {
    const hypotrachyna = await Hypotrachyna.findById(id);
    res.status(200).json(hypotrachyna);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllHypotrachynas = async (req, res, next) => {
  try {
    const hypotrachynas = await Hypotrachyna.find({});
    res.status(200).json(hypotrachynas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateHypotrachyna = async (req, res, next) => {
  const id = req.params.hypotrachynaId;
  mongoose.set("useFindAndModify", false);
  Hypotrachyna.findByIdAndUpdate(
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
    function (err, hypotrachyna) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Hypotrachyna updated successfully",
          hypotrachyna: hypotrachyna,
        });
      }
    }
  );
};

const deleteHypotrachyna = async (req, res, next) => {
  const id = req.params.hypotrachynaId;
  try {
    await Hypotrachyna.deleteOne({ _id: id });
    res.status(200).json({ message: "Hypotrachyna deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneHypotrachyna,
  getAllHypotrachynas,
  addHypotrachyna,
  deleteHypotrachyna,
  updateHypotrachyna,
};