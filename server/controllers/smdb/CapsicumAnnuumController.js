const CapsicumAnnuum = require("../../models/smdb/CapsicumAnnuumModel")
const mongoose = require("mongoose");

const getOneCapsicumAnnuum = async (req, res, next) => {
  const id = req.params.capsicumAnnuumId;
  try {
    const doc = await CapsicumAnnuum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCapsicumAnnuum = async (req, res, next) => {
  try {
    const docs = await CapsicumAnnuum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addCapsicumAnnuum = async (req, res, next) => {
  const doc = new CapsicumAnnuum({
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

const updateCapsicumAnnuum = async (req, res, next) => {
  const id = req.params.capsicumAnnuumId;
  mongoose.set("useFindAndModify", false);
  CapsicumAnnuum.findByIdAndUpdate(
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
          message: "CapsicumAnnuum updated successfully",
          capsicumAnnuum: doc,
        });
      }
    }
  );
};

const deleteCapsicumAnnuum = async (req, res, next) => {
  const id = req.params.capsicumAnnuumId;
  try {
    await CapsicumAnnuum.deleteOne({ _id: id });
    res.status(200).json({ message: "CapsicumAnnuum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCapsicumAnnuum,
  getAllCapsicumAnnuum,
  addCapsicumAnnuum,
  deleteCapsicumAnnuum,
  updateCapsicumAnnuum,
};


