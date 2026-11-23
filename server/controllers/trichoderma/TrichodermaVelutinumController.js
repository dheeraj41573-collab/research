const TrichodermaVelutinum = require("../../models/trichoderma/TrichodermaVelutinumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaVelutinum = async (req, res, next) => {
  const id = req.params.trichodermavelutinumId;
  try {
    const doc = await TrichodermaVelutinum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaVelutinums = async (req, res, next) => {
  try {
    const docs = await TrichodermaVelutinum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaVelutinum = async (req, res, next) => {
  const doc = new TrichodermaVelutinum({
    _id: new mongoose.Types.ObjectId(),
    speciesName: req.body.speciesName,
    commonName: req.body.commonName,
    pubchemID: req.body.pubchemID,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    superclass: req.body.superclass,
    class: req.body.class,
    reference: req.body.reference,
  });
  try {
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTrichodermaVelutinum = async (req, res, next) => {
  const id = req.params.trichodermavelutinumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaVelutinum.findByIdAndUpdate(
    id,
    {
      speciesName: req.body.speciesName,
      commonName: req.body.commonName,
      pubchemID: req.body.pubchemID,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      superclass: req.body.superclass,
      class: req.body.class,
      reference: req.body.reference,
    },
    function (err, doc) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "TrichodermaVelutinum updated successfully",
          trichodermavelutinum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaVelutinum = async (req, res, next) => {
  const id = req.params.trichodermavelutinumId;
  try {
    await TrichodermaVelutinum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaVelutinum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaVelutinum,
  getAllTrichodermaVelutinums,
  addTrichodermaVelutinum,
  deleteTrichodermaVelutinum,
  updateTrichodermaVelutinum,
};
