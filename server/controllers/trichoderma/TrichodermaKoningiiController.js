const TrichodermaKoningii = require("../../models/trichoderma/TrichodermaKoningiiModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaKoningii = async (req, res, next) => {
  const id = req.params.trichodermakoningiiId;
  try {
    const doc = await TrichodermaKoningii.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaKoningiis = async (req, res, next) => {
  try {
    const docs = await TrichodermaKoningii.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaKoningii = async (req, res, next) => {
  const doc = new TrichodermaKoningii({
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

const updateTrichodermaKoningii = async (req, res, next) => {
  const id = req.params.trichodermakoningiiId;
  mongoose.set("useFindAndModify", false);
  TrichodermaKoningii.findByIdAndUpdate(
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
          message: "TrichodermaKoningii updated successfully",
          trichodermakoningii: doc,
        });
      }
    }
  );
};

const deleteTrichodermaKoningii = async (req, res, next) => {
  const id = req.params.trichodermakoningiiId;
  try {
    await TrichodermaKoningii.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaKoningii deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaKoningii,
  getAllTrichodermaKoningiis,
  addTrichodermaKoningii,
  deleteTrichodermaKoningii,
  updateTrichodermaKoningii,
};
