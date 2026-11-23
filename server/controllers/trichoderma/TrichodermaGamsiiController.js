const TrichodermaGamsii = require("../../models/trichoderma/TrichodermaGamsiiModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaGamsii = async (req, res, next) => {
  const id = req.params.trichodermagamsiiId;
  try {
    const doc = await TrichodermaGamsii.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaGamsiis = async (req, res, next) => {
  try {
    const docs = await TrichodermaGamsii.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaGamsii = async (req, res, next) => {
  const doc = new TrichodermaGamsii({
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

const updateTrichodermaGamsii = async (req, res, next) => {
  const id = req.params.trichodermagamsiiId;
  mongoose.set("useFindAndModify", false);
  TrichodermaGamsii.findByIdAndUpdate(
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
          message: "TrichodermaGamsii updated successfully",
          trichodermagamsii: doc,
        });
      }
    }
  );
};

const deleteTrichodermaGamsii = async (req, res, next) => {
  const id = req.params.trichodermagamsiiId;
  try {
    await TrichodermaGamsii.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaGamsii deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaGamsii,
  getAllTrichodermaGamsiis,
  addTrichodermaGamsii,
  deleteTrichodermaGamsii,
  updateTrichodermaGamsii,
};
