const TrichodermaAureoviride = require("../../models/trichoderma/TrichodermaAureovirideModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaAureoviride = async (req, res, next) => {
  const id = req.params.trichodermaAureovirideId;
  try {
    const doc = await TrichodermaAureoviride.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaAureovirides = async (req, res, next) => {
  try {
    const docs = await TrichodermaAureoviride.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaAureoviride = async (req, res, next) => {
  const doc = new TrichodermaAureoviride({
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

const updateTrichodermaAureoviride = async (req, res, next) => {
  const id = req.params.trichodermaAureovirideId;
  mongoose.set("useFindAndModify", false);
  TrichodermaAureoviride.findByIdAndUpdate(
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
          message: "TrichodermaAureoviride updated successfully",
          trichodermaAureoviride: doc,
        });
      }
    }
  );
};

const deleteTrichodermaAureoviride = async (req, res, next) => {
  const id = req.params.trichodermaAureovirideId;
  try {
    await TrichodermaAureoviride.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaAureoviride deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaAureoviride,
  getAllTrichodermaAureovirides,
  addTrichodermaAureoviride,
  deleteTrichodermaAureoviride,
  updateTrichodermaAureoviride,
};
