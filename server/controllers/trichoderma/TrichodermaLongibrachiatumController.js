const TrichodermaLongibrachiatum = require("../../models/trichoderma/TrichodermaLongibrachiatumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaLongibrachiatum = async (req, res, next) => {
  const id = req.params.trichodermalongibrachiatumId;
  try {
    const doc = await TrichodermaLongibrachiatum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaLongibrachiatums = async (req, res, next) => {
  try {
    const docs = await TrichodermaLongibrachiatum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaLongibrachiatum = async (req, res, next) => {
  const doc = new TrichodermaLongibrachiatum({
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

const updateTrichodermaLongibrachiatum = async (req, res, next) => {
  const id = req.params.trichodermalongibrachiatumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaLongibrachiatum.findByIdAndUpdate(
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
          message: "TrichodermaLongibrachiatum updated successfully",
          trichodermalongibrachiatum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaLongibrachiatum = async (req, res, next) => {
  const id = req.params.trichodermalongibrachiatumId;
  try {
    await TrichodermaLongibrachiatum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaLongibrachiatum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaLongibrachiatum,
  getAllTrichodermaLongibrachiatums,
  addTrichodermaLongibrachiatum,
  deleteTrichodermaLongibrachiatum,
  updateTrichodermaLongibrachiatum,
};
