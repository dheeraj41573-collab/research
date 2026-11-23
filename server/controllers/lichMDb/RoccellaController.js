const Roccella = require("../../models/lichMDb/RoccellaModel.js");
const mongoose = require("mongoose");

const addRoccella = async (req, res, next) => {
  const roccella = new Roccella({
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
    await roccella.save();
    res.status(201).json(roccella);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRoccella = async (req, res, next) => {
  const id = req.params.roccellaId;
  try {
    const roccella = await Roccella.findById(id);
    res.status(200).json(roccella);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRoccellas = async (req, res, next) => {
  try {
    const roccellas = await Roccella.find({});
    res.status(200).json(roccellas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRoccella = async (req, res, next) => {
  const id = req.params.roccellaId;
  mongoose.set("useFindAndModify", false);
  Roccella.findByIdAndUpdate(
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
    function (err, roccella) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Roccella updated successfully",
          roccella: roccella,
        });
      }
    }
  );
};

const deleteRoccella = async (req, res, next) => {
  const id = req.params.roccellaId;
  try {
    await Roccella.deleteOne({ _id: id });
    res.status(200).json({ message: "Roccella deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRoccella,
  getAllRoccellas,
  addRoccella,
  deleteRoccella,
  updateRoccella,
};