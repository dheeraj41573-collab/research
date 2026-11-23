const TrichodermaHypocreaMuroiana = require("../../models/trichoderma/TrichodermaHypocreaMuroianaModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaHypocreaMuroiana = async (req, res, next) => {
  const id = req.params.trichodermaHypocreaMuroianaId;
  try {
    const doc = await TrichodermaHypocreaMuroiana.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaHypocreaMuroianas = async (req, res, next) => {
  try {
    const docs = await TrichodermaHypocreaMuroiana.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaHypocreaMuroiana = async (req, res, next) => {
  const doc = new TrichodermaHypocreaMuroiana({
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

const updateTrichodermaHypocreaMuroiana = async (req, res, next) => {
  const id = req.params.trichodermaHypocreaMuroianaId;
  mongoose.set("useFindAndModify", false);
  TrichodermaHypocreaMuroiana.findByIdAndUpdate(
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
          message: "TrichodermaHypocreaMuroiana updated successfully",
          trichodermaHypocreaMuroiana: doc,
        });
      }
    }
  );
};

const deleteTrichodermaHypocreaMuroiana = async (req, res, next) => {
  const id = req.params.trichodermaHypocreaMuroianaId;
  try {
    await TrichodermaHypocreaMuroiana.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaHypocreaMuroiana deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaHypocreaMuroiana,
  getAllTrichodermaHypocreaMuroianas,
  addTrichodermaHypocreaMuroiana,
  deleteTrichodermaHypocreaMuroiana,
  updateTrichodermaHypocreaMuroiana,
};
