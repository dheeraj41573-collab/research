const TrichodermaCitrinum = require("../../models/trichoderma/TrichodermaCitrinumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaCitrinum = async (req, res, next) => {
  const id = req.params.trichodermacitrinumId;
  try {
    const doc = await TrichodermaCitrinum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaCitrinums = async (req, res, next) => {
  try {
    const docs = await TrichodermaCitrinum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaCitrinum = async (req, res, next) => {
  const doc = new TrichodermaCitrinum({
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

const updateTrichodermaCitrinum = async (req, res, next) => {
  const id = req.params.trichodermacitrinumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaCitrinum.findByIdAndUpdate(
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
          message: "TrichodermaCitrinum updated successfully",
          trichodermacitrinum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaCitrinum = async (req, res, next) => {
  const id = req.params.trichodermacitrinumId;
  try {
    await TrichodermaCitrinum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaCitrinum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaCitrinum,
  getAllTrichodermaCitrinums,
  addTrichodermaCitrinum,
  deleteTrichodermaCitrinum,
  updateTrichodermaCitrinum,
};
