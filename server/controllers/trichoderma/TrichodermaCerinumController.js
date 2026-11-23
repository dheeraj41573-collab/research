const TrichodermaCerinum = require("../../models/trichoderma/TrichodermaCerinumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaCerinum = async (req, res, next) => {
  const id = req.params.trichodermacerinumId;
  try {
    const doc = await TrichodermaCerinum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaCerinums = async (req, res, next) => {
  try {
    const docs = await TrichodermaCerinum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaCerinum = async (req, res, next) => {
  const doc = new TrichodermaCerinum({
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

const updateTrichodermaCerinum = async (req, res, next) => {
  const id = req.params.trichodermacerinumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaCerinum.findByIdAndUpdate(
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
          message: "TrichodermaCerinum updated successfully",
          trichodermacerinum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaCerinum = async (req, res, next) => {
  const id = req.params.trichodermacerinumId;
  try {
    await TrichodermaCerinum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaCerinum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaCerinum,
  getAllTrichodermaCerinums,
  addTrichodermaCerinum,
  deleteTrichodermaCerinum,
  updateTrichodermaCerinum,
};
