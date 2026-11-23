const TrichodermaBrevicompactum = require("../../models/trichoderma/TrichodermaBrevicompactumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaBrevicompactum = async (req, res, next) => {
  const id = req.params.trichodermabrevicompactumId;
  try {
    const doc = await TrichodermaBrevicompactum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaBrevicompactums = async (req, res, next) => {
  try {
    const docs = await TrichodermaBrevicompactum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaBrevicompactum = async (req, res, next) => {
  const doc = new TrichodermaBrevicompactum({
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

const updateTrichodermaBrevicompactum = async (req, res, next) => {
  const id = req.params.trichodermabrevicompactumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaBrevicompactum.findByIdAndUpdate(
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
          message: "TrichodermaBrevicompactum updated successfully",
          trichodermabrevicompactum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaBrevicompactum = async (req, res, next) => {
  const id = req.params.trichodermabrevicompactumId;
  try {
    await TrichodermaBrevicompactum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaBrevicompactum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaBrevicompactum,
  getAllTrichodermaBrevicompactums,
  addTrichodermaBrevicompactum,
  deleteTrichodermaBrevicompactum,
  updateTrichodermaBrevicompactum,
};
