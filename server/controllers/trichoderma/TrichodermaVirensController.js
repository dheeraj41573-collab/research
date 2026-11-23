const TrichodermaVirens = require("../../models/trichoderma/TrichodermaVirensModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaVirens = async (req, res, next) => {
  const id = req.params.trichodermaVirensId;
  try {
    const doc = await TrichodermaVirens.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaVirenses = async (req, res, next) => {
  try {
    const docs = await TrichodermaVirens.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaVirens = async (req, res, next) => {
  const doc = new TrichodermaVirens({
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

const updateTrichodermaVirens = async (req, res, next) => {
  const id = req.params.trichodermaVirensId;
  mongoose.set("useFindAndModify", false);
  TrichodermaVirens.findByIdAndUpdate(
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
          message: "TrichodermaVirens updated successfully",
          trichodermaVirens: doc,
        });
      }
    }
  );
};

const deleteTrichodermaVirens = async (req, res, next) => {
  const id = req.params.trichodermaVirensId;
  try {
    await TrichodermaVirens.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaVirens deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaVirens,
  getAllTrichodermaVirenses,
  addTrichodermaVirens,
  deleteTrichodermaVirens,
  updateTrichodermaVirens,
};


