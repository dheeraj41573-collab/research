const ApiumGraveolens = require("../../models/smdb/ApiumGraveolensModel")
const mongoose = require("mongoose");

const getOneApiumGraveolens = async (req, res, next) => {
  const id = req.params.apiumGraveolensId;
  try {
    const doc = await ApiumGraveolens.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllApiumGraveolens = async (req, res, next) => {
  try {
    const docs = await ApiumGraveolens.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addApiumGraveolens = async (req, res, next) => {
  const doc = new ApiumGraveolens({
    _id: new mongoose.Types.ObjectId(),
    scientificName: req.body.scientificName,
    commonName: req.body.commonName,
    cid: req.body.cid,
    compoundName: req.body.compoundName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateApiumGraveolens = async (req, res, next) => {
  const id = req.params.apiumGraveolensId;
  mongoose.set("useFindAndModify", false);
  ApiumGraveolens.findByIdAndUpdate(
    id,
    {
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      cid: req.body.cid,
      compoundName: req.body.compoundName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, doc) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ApiumGraveolens updated successfully",
          apiumGraveolens: doc,
        });
      }
    }
  );
};

const deleteApiumGraveolens = async (req, res, next) => {
  const id = req.params.apiumGraveolensId;
  try {
    await ApiumGraveolens.deleteOne({ _id: id });
    res.status(200).json({ message: "ApiumGraveolens deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneApiumGraveolens,
  getAllApiumGraveolens,
  addApiumGraveolens,
  deleteApiumGraveolens,
  updateApiumGraveolens,
};


