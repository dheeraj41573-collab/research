const TrichodermaAtroviride = require("../../models/trichoderma/TrichodermaAtrovirideModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaAtroviride = async (req, res, next) => {
  const id = req.params.trichodermaAtrovirideId;
  try {
    const doc = await TrichodermaAtroviride.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaAtrovirides = async (req, res, next) => {
  try {
    const docs = await TrichodermaAtroviride.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaAtroviride = async (req, res, next) => {
  const doc = new TrichodermaAtroviride({
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

const updateTrichodermaAtroviride = async (req, res, next) => {
  const id = req.params.trichodermaAtrovirideId;
  mongoose.set("useFindAndModify", false);
  TrichodermaAtroviride.findByIdAndUpdate(
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
          message: "TrichodermaAtroviride updated successfully",
          trichodermaAtroviride: doc,
        });
      }
    }
  );
};

const deleteTrichodermaAtroviride = async (req, res, next) => {
  const id = req.params.trichodermaAtrovirideId;
  try {
    await TrichodermaAtroviride.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaAtroviride deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaAtroviride,
  getAllTrichodermaAtrovirides,
  addTrichodermaAtroviride,
  deleteTrichodermaAtroviride,
  updateTrichodermaAtroviride,
};
