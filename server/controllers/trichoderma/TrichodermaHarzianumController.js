const TrichodermaHarzianum = require("../../models/trichoderma/TrichodermaHarzianumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaHarzianum = async (req, res, next) => {
  const id = req.params.trichodermaHarzianumId;
  try {
    const doc = await TrichodermaHarzianum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaHarzianums = async (req, res, next) => {
  try {
    const docs = await TrichodermaHarzianum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaHarzianum = async (req, res, next) => {
  const doc = new TrichodermaHarzianum({
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

const updateTrichodermaHarzianum = async (req, res, next) => {
  const id = req.params.trichodermaHarzianumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaHarzianum.findByIdAndUpdate(
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
          message: "TrichodermaHarzianum updated successfully",
          trichodermaHarzianum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaHarzianum = async (req, res, next) => {
  const id = req.params.trichodermaHarzianumId;
  try {
    await TrichodermaHarzianum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaHarzianum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaHarzianum,
  getAllTrichodermaHarzianums,
  addTrichodermaHarzianum,
  deleteTrichodermaHarzianum,
  updateTrichodermaHarzianum,
};


