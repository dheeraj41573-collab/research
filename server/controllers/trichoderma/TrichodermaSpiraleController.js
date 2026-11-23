const TrichodermaSpirale = require("../../models/trichoderma/TrichodermaSpiraleModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaSpirale = async (req, res, next) => {
  const id = req.params.trichodermaspiraleId;
  try {
    const doc = await TrichodermaSpirale.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaSpirales = async (req, res, next) => {
  try {
    const docs = await TrichodermaSpirale.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaSpirale = async (req, res, next) => {
  const doc = new TrichodermaSpirale({
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

const updateTrichodermaSpirale = async (req, res, next) => {
  const id = req.params.trichodermaspiraleId;
  mongoose.set("useFindAndModify", false);
  TrichodermaSpirale.findByIdAndUpdate(
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
          message: "TrichodermaSpirale updated successfully",
          trichodermaspirale: doc,
        });
      }
    }
  );
};

const deleteTrichodermaSpirale = async (req, res, next) => {
  const id = req.params.trichodermaspiraleId;
  try {
    await TrichodermaSpirale.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaSpirale deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaSpirale,
  getAllTrichodermaSpirales,
  addTrichodermaSpirale,
  deleteTrichodermaSpirale,
  updateTrichodermaSpirale,
};
