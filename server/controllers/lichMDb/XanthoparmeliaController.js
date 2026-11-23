const Xanthoparmelia = require("../../models/lichMDb/XanthoparmeliaModel.js");
const mongoose = require("mongoose");

const addXanthoparmelia = async (req, res, next) => {
  const xanthoparmelia = new Xanthoparmelia({
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
    await xanthoparmelia.save();
    res.status(201).json(xanthoparmelia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneXanthoparmelia = async (req, res, next) => {
  const id = req.params.xanthoparmeliaId;
  try {
    const xanthoparmelia = await Xanthoparmelia.findById(id);
    res.status(200).json(xanthoparmelia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllXanthoparmelias = async (req, res, next) => {
  try {
    const xanthoparmelias = await Xanthoparmelia.find({});
    res.status(200).json(xanthoparmelias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateXanthoparmelia = async (req, res, next) => {
  const id = req.params.xanthoparmeliaId;
  mongoose.set("useFindAndModify", false);
  Xanthoparmelia.findByIdAndUpdate(
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
    function (err, xanthoparmelia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Xanthoparmelia updated successfully",
          xanthoparmelia: xanthoparmelia,
        });
      }
    }
  );
};

const deleteXanthoparmelia = async (req, res, next) => {
  const id = req.params.xanthoparmeliaId;
  try {
    await Xanthoparmelia.deleteOne({ _id: id });
    res.status(200).json({ message: "Xanthoparmelia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneXanthoparmelia,
  getAllXanthoparmelias,
  addXanthoparmelia,
  deleteXanthoparmelia,
  updateXanthoparmelia,
};