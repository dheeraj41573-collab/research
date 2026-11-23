const TrichodermaPolysporum = require("../../models/trichoderma/TrichodermaPolysporumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaPolysporum = async (req, res, next) => {
  const id = req.params.trichodermaPolysporumId;
  try {
    const doc = await TrichodermaPolysporum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaPolysporums = async (req, res, next) => {
  try {
    const docs = await TrichodermaPolysporum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaPolysporum = async (req, res, next) => {
  const doc = new TrichodermaPolysporum({
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

const updateTrichodermaPolysporum = async (req, res, next) => {
  const id = req.params.trichodermaPolysporumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaPolysporum.findByIdAndUpdate(
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
          message: "TrichodermaPolysporum updated successfully",
          trichodermaPolysporum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaPolysporum = async (req, res, next) => {
  const id = req.params.trichodermaPolysporumId;
  try {
    await TrichodermaPolysporum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaPolysporum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaPolysporum,
  getAllTrichodermaPolysporums,
  addTrichodermaPolysporum,
  deleteTrichodermaPolysporum,
  updateTrichodermaPolysporum,
};
