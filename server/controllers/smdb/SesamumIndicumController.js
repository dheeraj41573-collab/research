const SesamumIndicum = require("../../models/smdb/SesamumIndicumModel")
const mongoose = require("mongoose");

const getOneSesamumIndicum = async (req, res, next) => {
  const id = req.params.sesamumIndicumId;
  try {
    const doc = await SesamumIndicum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSesamumIndicum = async (req, res, next) => {
  try {
    const docs = await SesamumIndicum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addSesamumIndicum = async (req, res, next) => {
  const doc = new SesamumIndicum({
    _id: new mongoose.Types.ObjectId(),
    scientificName: req.body.scientificName,
    commonName: req.body.commonName,
    cid: req.body.cid,
    compoundName: req.body.compoundName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateSesamumIndicum = async (req, res, next) => {
  const id = req.params.sesamumIndicumId;
  mongoose.set("useFindAndModify", false);
  SesamumIndicum.findByIdAndUpdate(
    id,
    {
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      cid: req.body.cid,
      compoundName: req.body.compoundName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, doc) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "SesamumIndicum updated successfully",
          sesamumIndicum: doc,
        });
      }
    }
  );
};

const deleteSesamumIndicum = async (req, res, next) => {
  const id = req.params.sesamumIndicumId;
  try {
    await SesamumIndicum.deleteOne({ _id: id });
    res.status(200).json({ message: "SesamumIndicum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneSesamumIndicum,
  getAllSesamumIndicum,
  addSesamumIndicum,
  deleteSesamumIndicum,
  updateSesamumIndicum,
};


