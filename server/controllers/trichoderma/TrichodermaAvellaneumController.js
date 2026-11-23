const TrichodermaAvellaneum = require("../../models/trichoderma/TrichodermaAvellaneumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaAvellaneum = async (req, res, next) => {
  const id = req.params.trichodermaAvellaneumId;
  try {
    const doc = await TrichodermaAvellaneum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaAvellaneums = async (req, res, next) => {
  try {
    const docs = await TrichodermaAvellaneum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaAvellaneum = async (req, res, next) => {
  const doc = new TrichodermaAvellaneum({
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

const updateTrichodermaAvellaneum = async (req, res, next) => {
  const id = req.params.trichodermaAvellaneumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaAvellaneum.findByIdAndUpdate(
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
          message: "TrichodermaAvellaneum updated successfully",
          trichodermaAvellaneum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaAvellaneum = async (req, res, next) => {
  const id = req.params.trichodermaAvellaneumId;
  try {
    await TrichodermaAvellaneum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaAvellaneum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaAvellaneum,
  getAllTrichodermaAvellaneums,
  addTrichodermaAvellaneum,
  deleteTrichodermaAvellaneum,
  updateTrichodermaAvellaneum,
};
