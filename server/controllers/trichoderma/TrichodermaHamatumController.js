const TrichodermaHamatum = require("../../models/trichoderma/TrichodermaHamatumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaHamatum = async (req, res, next) => {
  const id = req.params.trichodermahamatumId;
  try {
    const doc = await TrichodermaHamatum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaHamatums = async (req, res, next) => {
  try {
    const docs = await TrichodermaHamatum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaHamatum = async (req, res, next) => {
  const doc = new TrichodermaHamatum({
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

const updateTrichodermaHamatum = async (req, res, next) => {
  const id = req.params.trichodermahamatumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaHamatum.findByIdAndUpdate(
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
          message: "TrichodermaHamatum updated successfully",
          trichodermahamatum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaHamatum = async (req, res, next) => {
  const id = req.params.trichodermahamatumId;
  try {
    await TrichodermaHamatum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaHamatum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaHamatum,
  getAllTrichodermaHamatums,
  addTrichodermaHamatum,
  deleteTrichodermaHamatum,
  updateTrichodermaHamatum,
};
