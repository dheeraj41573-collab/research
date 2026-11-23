const Oxneria = require("../../models/lichMDb/OxneriaModel.js");
const mongoose = require("mongoose");

const addOxneria = async (req, res, next) => {
  const oxneria = new Oxneria({
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
    await oxneria.save();
    res.status(201).json(oxneria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneOxneria = async (req, res, next) => {
  const id = req.params.oxneriaId;
  try {
    const oxneria = await Oxneria.findById(id);
    res.status(200).json(oxneria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllOxnerias = async (req, res, next) => {
  try {
    const oxnerias = await Oxneria.find({});
    res.status(200).json(oxnerias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateOxneria = async (req, res, next) => {
  const id = req.params.oxneriaId;
  mongoose.set("useFindAndModify", false);
  Oxneria.findByIdAndUpdate(
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
    function (err, oxneria) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Oxneria updated successfully",
          oxneria: oxneria,
        });
      }
    }
  );
};

const deleteOxneria = async (req, res, next) => {
  const id = req.params.oxneriaId;
  try {
    await Oxneria.deleteOne({ _id: id });
    res.status(200).json({ message: "Oxneria deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneOxneria,
  getAllOxnerias,
  addOxneria,
  deleteOxneria,
  updateOxneria,
};