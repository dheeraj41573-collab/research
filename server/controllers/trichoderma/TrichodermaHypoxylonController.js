const TrichodermaHypoxylon = require("../../models/trichoderma/TrichodermaHypoxylonModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaHypoxylon = async (req, res, next) => {
  const id = req.params.trichodermaHypoxylonId;
  try {
    const doc = await TrichodermaHypoxylon.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaHypoxylons = async (req, res, next) => {
  try {
    const docs = await TrichodermaHypoxylon.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaHypoxylon = async (req, res, next) => {
  const doc = new TrichodermaHypoxylon({
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

const updateTrichodermaHypoxylon = async (req, res, next) => {
  const id = req.params.trichodermaHypoxylonId;
  mongoose.set("useFindAndModify", false);
  TrichodermaHypoxylon.findByIdAndUpdate(
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
          message: "TrichodermaHypoxylon updated successfully",
          trichodermaHypoxylon: doc,
        });
      }
    }
  );
};

const deleteTrichodermaHypoxylon = async (req, res, next) => {
  const id = req.params.trichodermaHypoxylonId;
  try {
    await TrichodermaHypoxylon.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaHypoxylon deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaHypoxylon,
  getAllTrichodermaHypoxylons,
  addTrichodermaHypoxylon,
  deleteTrichodermaHypoxylon,
  updateTrichodermaHypoxylon,
};
