const TrichodermaAsperellum = require("../../models/trichoderma/TrichodermaAsperellumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaAsperellum = async (req, res, next) => {
  const id = req.params.trichodermaAsperellumId;
  try {
    const doc = await TrichodermaAsperellum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaAsperellums = async (req, res, next) => {
  try {
    const docs = await TrichodermaAsperellum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaAsperellum = async (req, res, next) => {
  const doc = new TrichodermaAsperellum({
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

const updateTrichodermaAsperellum = async (req, res, next) => {
  const id = req.params.trichodermaAsperellumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaAsperellum.findByIdAndUpdate(
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
          message: "TrichodermaAsperellum updated successfully",
          trichodermaAsperellum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaAsperellum = async (req, res, next) => {
  const id = req.params.trichodermaAsperellumId;
  try {
    await TrichodermaAsperellum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaAsperellum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaAsperellum,
  getAllTrichodermaAsperellums,
  addTrichodermaAsperellum,
  deleteTrichodermaAsperellum,
  updateTrichodermaAsperellum,
};
