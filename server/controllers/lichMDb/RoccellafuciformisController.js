const Roccellafuciformis = require("../../models/lichMDb/RoccellafuciformisModel.js");
const mongoose = require("mongoose");

const addRoccellafuciformis = async (req, res, next) => {
  const roccellafuciformis = new Roccellafuciformis({
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
    await roccellafuciformis.save();
    res.status(201).json(roccellafuciformis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRoccellafuciformis = async (req, res, next) => {
  const id = req.params.roccellafuciformisId;
  try {
    const roccellafuciformis = await Roccellafuciformis.findById(id);
    res.status(200).json(roccellafuciformis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRoccellafuciformiss = async (req, res, next) => {
  try {
    const roccellafuciformiss = await Roccellafuciformis.find({});
    res.status(200).json(roccellafuciformiss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRoccellafuciformis = async (req, res, next) => {
  const id = req.params.roccellafuciformisId;
  mongoose.set("useFindAndModify", false);
  Roccellafuciformis.findByIdAndUpdate(
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
    function (err, roccellafuciformis) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Roccellafuciformis updated successfully",
          roccellafuciformis: roccellafuciformis,
        });
      }
    }
  );
};

const deleteRoccellafuciformis = async (req, res, next) => {
  const id = req.params.roccellafuciformisId;
  try {
    await Roccellafuciformis.deleteOne({ _id: id });
    res.status(200).json({ message: "Roccellafuciformis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRoccellafuciformis,
  getAllRoccellafuciformiss,
  addRoccellafuciformis,
  deleteRoccellafuciformis,
  updateRoccellafuciformis,
};