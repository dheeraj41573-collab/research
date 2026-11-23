const Menegazzia = require("../../models/lichMDb/MenegazziaModel.js");
const mongoose = require("mongoose");

const addMenegazzia = async (req, res, next) => {
  const menegazzia = new Menegazzia({
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
    await menegazzia.save();
    res.status(201).json(menegazzia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneMenegazzia = async (req, res, next) => {
  const id = req.params.menegazziaId;
  try {
    const menegazzia = await Menegazzia.findById(id);
    res.status(200).json(menegazzia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllMenegazzias = async (req, res, next) => {
  try {
    const menegazzias = await Menegazzia.find({});
    res.status(200).json(menegazzias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateMenegazzia = async (req, res, next) => {
  const id = req.params.menegazziaId;
  mongoose.set("useFindAndModify", false);
  Menegazzia.findByIdAndUpdate(
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
    function (err, menegazzia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Menegazzia updated successfully",
          menegazzia: menegazzia,
        });
      }
    }
  );
};

const deleteMenegazzia = async (req, res, next) => {
  const id = req.params.menegazziaId;
  try {
    await Menegazzia.deleteOne({ _id: id });
    res.status(200).json({ message: "Menegazzia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneMenegazzia,
  getAllMenegazzias,
  addMenegazzia,
  deleteMenegazzia,
  updateMenegazzia,
};