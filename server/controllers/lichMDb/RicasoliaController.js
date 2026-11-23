const Ricasolia = require("../../models/lichMDb/RicasoliaModel.js");
const mongoose = require("mongoose");

const addRicasolia = async (req, res, next) => {
  const ricasolia = new Ricasolia({
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
    await ricasolia.save();
    res.status(201).json(ricasolia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRicasolia = async (req, res, next) => {
  const id = req.params.ricasoliaId;
  try {
    const ricasolia = await Ricasolia.findById(id);
    res.status(200).json(ricasolia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRicasolias = async (req, res, next) => {
  try {
    const ricasolias = await Ricasolia.find({});
    res.status(200).json(ricasolias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRicasolia = async (req, res, next) => {
  const id = req.params.ricasoliaId;
  mongoose.set("useFindAndModify", false);
  Ricasolia.findByIdAndUpdate(
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
    function (err, ricasolia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Ricasolia updated successfully",
          ricasolia: ricasolia,
        });
      }
    }
  );
};

const deleteRicasolia = async (req, res, next) => {
  const id = req.params.ricasoliaId;
  try {
    await Ricasolia.deleteOne({ _id: id });
    res.status(200).json({ message: "Ricasolia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRicasolia,
  getAllRicasolias,
  addRicasolia,
  deleteRicasolia,
  updateRicasolia,
};