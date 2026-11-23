const TrichodermaViride = require("../../models/trichoderma/TrichodermaVirideModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaViride = async (req, res, next) => {
  const id = req.params.trichodermaVirideId;
  try {
    const doc = await TrichodermaViride.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaVirides = async (req, res, next) => {
  try {
    const docs = await TrichodermaViride.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaViride = async (req, res, next) => {
  const doc = new TrichodermaViride({
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

const updateTrichodermaViride = async (req, res, next) => {
  const id = req.params.trichodermaVirideId;
  mongoose.set("useFindAndModify", false);
  TrichodermaViride.findByIdAndUpdate(
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
          message: "TrichodermaViride updated successfully",
          trichodermaViride: doc,
        });
      }
    }
  );
};

const deleteTrichodermaViride = async (req, res, next) => {
  const id = req.params.trichodermaVirideId;
  try {
    await TrichodermaViride.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaViride deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaViride,
  getAllTrichodermaVirides,
  addTrichodermaViride,
  deleteTrichodermaViride,
  updateTrichodermaViride,
};


