const PeltigeraMalacea = require("../../models/lichMDb/PeltigeraMalaceaModel.js");
const mongoose = require("mongoose");

const addPeltigeraMalacea = async (req, res, next) => {
  const peltigeraMalacea = new PeltigeraMalacea({
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
    await peltigeraMalacea.save();
    res.status(201).json(peltigeraMalacea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePeltigeraMalacea = async (req, res, next) => {
  const id = req.params.peltigeraMalaceaId;
  try {
    const peltigeraMalacea = await PeltigeraMalacea.findById(id);
    res.status(200).json(peltigeraMalacea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPeltigeraMalaceas = async (req, res, next) => {
  try {
    const peltigeraMalaceas = await PeltigeraMalacea.find({});
    res.status(200).json(peltigeraMalaceas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePeltigeraMalacea = async (req, res, next) => {
  const id = req.params.peltigeraMalaceaId;
  mongoose.set("useFindAndModify", false);
  PeltigeraMalacea.findByIdAndUpdate(
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
    function (err, peltigeraMalacea) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PeltigeraMalacea updated successfully",
          peltigeraMalacea: peltigeraMalacea,
        });
      }
    }
  );
};

const deletePeltigeraMalacea = async (req, res, next) => {
  const id = req.params.peltigeraMalaceaId;
  try {
    await PeltigeraMalacea.deleteOne({ _id: id });
    res.status(200).json({ message: "PeltigeraMalacea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePeltigeraMalacea,
  getAllPeltigeraMalaceas,
  addPeltigeraMalacea,
  deletePeltigeraMalacea,
  updatePeltigeraMalacea,
};