const TrichodermaVinosum = require("../../models/trichoderma/TrichodermaVinosumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaVinosum = async (req, res, next) => {
  const id = req.params.trichodermavinosumId;
  try {
    const doc = await TrichodermaVinosum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaVinosums = async (req, res, next) => {
  try {
    const docs = await TrichodermaVinosum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaVinosum = async (req, res, next) => {
  const doc = new TrichodermaVinosum({
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

const updateTrichodermaVinosum = async (req, res, next) => {
  const id = req.params.trichodermavinosumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaVinosum.findByIdAndUpdate(
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
          message: "TrichodermaVinosum updated successfully",
          trichodermavinosum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaVinosum = async (req, res, next) => {
  const id = req.params.trichodermavinosumId;
  try {
    await TrichodermaVinosum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaVinosum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaVinosum,
  getAllTrichodermaVinosums,
  addTrichodermaVinosum,
  deleteTrichodermaVinosum,
  updateTrichodermaVinosum,
};
