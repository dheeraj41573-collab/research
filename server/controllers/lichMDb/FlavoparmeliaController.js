const Flavoparmelia = require("../../models/lichMDb/FlavoparmeliaModel.js");
const mongoose = require("mongoose");

const addFlavoparmelia = async (req, res, next) => {
  const flavoparmelia = new Flavoparmelia({
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
    await flavoparmelia.save();
    res.status(201).json(flavoparmelia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneFlavoparmelia = async (req, res, next) => {
  const id = req.params.flavoparmeliaId;
  try {
    const flavoparmelia = await Flavoparmelia.findById(id);
    res.status(200).json(flavoparmelia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllFlavoparmelias = async (req, res, next) => {
  try {
    const flavoparmelias = await Flavoparmelia.find({});
    res.status(200).json(flavoparmelias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateFlavoparmelia = async (req, res, next) => {
  const id = req.params.flavoparmeliaId;
  mongoose.set("useFindAndModify", false);
  Flavoparmelia.findByIdAndUpdate(
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
    function (err, flavoparmelia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Flavoparmelia updated successfully",
          flavoparmelia: flavoparmelia,
        });
      }
    }
  );
};

const deleteFlavoparmelia = async (req, res, next) => {
  const id = req.params.flavoparmeliaId;
  try {
    await Flavoparmelia.deleteOne({ _id: id });
    res.status(200).json({ message: "Flavoparmelia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneFlavoparmelia,
  getAllFlavoparmelias,
  addFlavoparmelia,
  deleteFlavoparmelia,
  updateFlavoparmelia,
};