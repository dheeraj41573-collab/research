const FlavoparmeliaHaysomii = require("../../models/lichMDb/FlavoparmeliaHaysomiiModel.js");
const mongoose = require("mongoose");

const addFlavoparmeliaHaysomii = async (req, res, next) => {
  const flavoparmeliaHaysomii = new FlavoparmeliaHaysomii({
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
    await flavoparmeliaHaysomii.save();
    res.status(201).json(flavoparmeliaHaysomii);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneFlavoparmeliaHaysomii = async (req, res, next) => {
  const id = req.params.flavoparmeliaHaysomii;
  try {
    const flavoparmeliaHaysomii = await FlavoparmeliaHaysomii.findById(id);
    res.status(200).json(flavoparmeliaHaysomii);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllFlavoparmeliaHaysomii = async (req, res, next) => {
  try {
    const FlavoparmeliaHaysomiis = await FlavoparmeliaHaysomii.find({});
    res.status(200).json(FlavoparmeliaHaysomiis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateFlavoparmeliaHaysomii = async (req, res, next) => {
  const id = req.params.flavoparmeliaHaysomii;
  mongoose.set("useFindAndModify", false);
  FlavoparmeliaHaysomii.findByIdAndUpdate(
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
    function (err, flavoparmeliaHaysomii) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "FlavoparmeliaHaysomii updated successfully",
          flavoparmeliaHaysomii: flavoparmeliaHaysomii,
        });
      }
    }
  );
};

const deleteFlavoparmeliaHaysomii = async (req, res, next) => {
  const id = req.params.flavoparmeliaHaysomii;
  try {
    await FlavoparmeliaHaysomii.deleteOne({ _id: id });
    res.status(200).json({ message: "FlavoparmeliaHaysomii deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneFlavoparmeliaHaysomii,
  getAllFlavoparmeliaHaysomii,
  addFlavoparmeliaHaysomii,
  deleteFlavoparmeliaHaysomii,
  updateFlavoparmeliaHaysomii,
};