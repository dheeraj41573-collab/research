const TrichodermaSaturnisporum = require("../../models/trichoderma/TrichodermaSaturnisporumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaSaturnisporum = async (req, res, next) => {
  const id = req.params.trichodermasaturnisporumId;
  try {
    const doc = await TrichodermaSaturnisporum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaSaturnisporums = async (req, res, next) => {
  try {
    const docs = await TrichodermaSaturnisporum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaSaturnisporum = async (req, res, next) => {
  const doc = new TrichodermaSaturnisporum({
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

const updateTrichodermaSaturnisporum = async (req, res, next) => {
  const id = req.params.trichodermasaturnisporumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaSaturnisporum.findByIdAndUpdate(
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
          message: "TrichodermaSaturnisporum updated successfully",
          trichodermasaturnisporum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaSaturnisporum = async (req, res, next) => {
  const id = req.params.trichodermasaturnisporumId;
  try {
    await TrichodermaSaturnisporum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaSaturnisporum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaSaturnisporum,
  getAllTrichodermaSaturnisporums,
  addTrichodermaSaturnisporum,
  deleteTrichodermaSaturnisporum,
  updateTrichodermaSaturnisporum,
};
