const ParmeliaOmphalodes = require("../../models/lichMDb/ParmeliaOmphalodesModel.js");
const mongoose = require("mongoose");

const addParmeliaOmphalodes = async (req, res, next) => {
  const parmeliaOmphalodes = new ParmeliaOmphalodes({
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
    await parmeliaOmphalodes.save();
    res.status(201).json(parmeliaOmphalodes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneParmeliaOmphalodes = async (req, res, next) => {
  const id = req.params.parmeliaOmphalodesId;
  try {
    const parmeliaOmphalodes = await ParmeliaOmphalodes.findById(id);
    res.status(200).json(parmeliaOmphalodes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllParmeliaOmphalodess = async (req, res, next) => {
  try {
    const parmeliaOmphalodess = await ParmeliaOmphalodes.find({});
    res.status(200).json(parmeliaOmphalodess);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateParmeliaOmphalodes = async (req, res, next) => {
  const id = req.params.parmeliaOmphalodesId;
  mongoose.set("useFindAndModify", false);
  ParmeliaOmphalodes.findByIdAndUpdate(
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
    function (err, parmeliaOmphalodes) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ParmeliaOmphalodes updated successfully",
          parmeliaOmphalodes: parmeliaOmphalodes,
        });
      }
    }
  );
};

const deleteParmeliaOmphalodes = async (req, res, next) => {
  const id = req.params.parmeliaOmphalodesId;
  try {
    await ParmeliaOmphalodes.deleteOne({ _id: id });
    res.status(200).json({ message: "ParmeliaOmphalodes deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneParmeliaOmphalodes,
  getAllParmeliaOmphalodess,
  addParmeliaOmphalodes,
  deleteParmeliaOmphalodes,
  updateParmeliaOmphalodes,
};