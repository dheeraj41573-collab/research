const StereocaulonSasakii = require("../../models/lichMDb/StereocaulonSasakiiModel.js");
const mongoose = require("mongoose");

const addStereocaulonSasakii = async (req, res, next) => {
  const stereocaulonSasakii = new StereocaulonSasakii({
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
    await stereocaulonSasakii.save();
    res.status(201).json(stereocaulonSasakii);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulonSasakii = async (req, res, next) => {
  const id = req.params.stereocaulonSasakiiId;
  try {
    const stereocaulonSasakii = await StereocaulonSasakii.findById(id);
    res.status(200).json(stereocaulonSasakii);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulonSasakiis = async (req, res, next) => {
  try {
    const stereocaulonSasakiis = await StereocaulonSasakii.find({});
    res.status(200).json(stereocaulonSasakiis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulonSasakii = async (req, res, next) => {
  const id = req.params.stereocaulonSasakiiId;
  mongoose.set("useFindAndModify", false);
  StereocaulonSasakii.findByIdAndUpdate(
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
    function (err, stereocaulonSasakii) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StereocaulonSasakii updated successfully",
          stereocaulonSasakii: stereocaulonSasakii,
        });
      }
    }
  );
};

const deleteStereocaulonSasakii = async (req, res, next) => {
  const id = req.params.stereocaulonSasakiiId;
  try {
    await StereocaulonSasakii.deleteOne({ _id: id });
    res.status(200).json({ message: "StereocaulonSasakii deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulonSasakii,
  getAllStereocaulonSasakiis,
  addStereocaulonSasakii,
  deleteStereocaulonSasakii,
  updateStereocaulonSasakii,
};