const ThymusVulgaris = require("../../models/smdb/ThymusVulgarisModel")
const mongoose = require("mongoose");



const getOneThymusVulgaris = async (req, res, next) => {
  const id = req.params.thymusVulgarisId;
  try {
    const doc = await ThymusVulgaris.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllThymusVulgaris = async (req, res, next) => {
  try {
    const docs = await ThymusVulgaris.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



const addThymusVulgaris = async (req, res, next) => {
  const doc = new ThymusVulgaris({
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

const updateThymusVulgaris = async (req, res, next) => {
  const id = req.params.thymusVulgarisId;
  mongoose.set("useFindAndModify", false);
  ThymusVulgaris.findByIdAndUpdate(
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
          message: "ThymusVulgaris updated successfully",
          thymusVulgaris: doc,
        });
      }
    }
  );
};

const deleteThymusVulgaris = async (req, res, next) => {
  const id = req.params.thymusVulgarisId;
  try {
    await ThymusVulgaris.deleteOne({ _id: id });
    res.status(200).json({ message: "ThymusVulgaris deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneThymusVulgaris,
  getAllThymusVulgaris,
  addThymusVulgaris,
  deleteThymusVulgaris,
  updateThymusVulgaris,
};


