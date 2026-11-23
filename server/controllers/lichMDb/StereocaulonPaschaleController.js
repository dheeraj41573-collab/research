const StereocaulonPaschale = require("../../models/lichMDb/StereocaulonPaschaleModel.js");
const mongoose = require("mongoose");

const addStereocaulonPaschale = async (req, res, next) => {
  const stereocaulonPaschale = new StereocaulonPaschale({
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
    await stereocaulonPaschale.save();
    res.status(201).json(stereocaulonPaschale);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulonPaschale = async (req, res, next) => {
  const id = req.params.stereocaulonPaschaleId;
  try {
    const stereocaulonPaschale = await StereocaulonPaschale.findById(id);
    res.status(200).json(stereocaulonPaschale);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulonPaschales = async (req, res, next) => {
  try {
    const stereocaulonPaschales = await StereocaulonPaschale.find({});
    res.status(200).json(stereocaulonPaschales);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulonPaschale = async (req, res, next) => {
  const id = req.params.stereocaulonPaschaleId;
  mongoose.set("useFindAndModify", false);
  StereocaulonPaschale.findByIdAndUpdate(
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
    function (err, stereocaulonPaschale) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StereocaulonPaschale updated successfully",
          stereocaulonPaschale: stereocaulonPaschale,
        });
      }
    }
  );
};

const deleteStereocaulonPaschale = async (req, res, next) => {
  const id = req.params.stereocaulonPaschaleId;
  try {
    await StereocaulonPaschale.deleteOne({ _id: id });
    res.status(200).json({ message: "StereocaulonPaschale deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulonPaschale,
  getAllStereocaulonPaschales,
  addStereocaulonPaschale,
  deleteStereocaulonPaschale,
  updateStereocaulonPaschale,
};