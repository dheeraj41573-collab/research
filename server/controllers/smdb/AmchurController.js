const Amchur = require("../../models/smdb/AmchurModel")
const mongoose = require("mongoose");



const getOneAmchur = async (req, res, next) => {
  const id = req.params.amchurId;
  try {
    const doc = await Amchur.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllAmchur = async (req, res, next) => {
  try {
    const docs = await Amchur.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



const addAmchur = async (req, res, next) => {
  const doc = new Amchur({
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

const updateAmchur = async (req, res, next) => {
  const id = req.params.amchurId;
  mongoose.set("useFindAndModify", false);
  Amchur.findByIdAndUpdate(
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
          message: "Amchur updated successfully",
          amchur: doc,
        });
      }
    }
  );
};

const deleteAmchur = async (req, res, next) => {
  const id = req.params.amchurId;
  try {
    await Amchur.deleteOne({ _id: id });
    res.status(200).json({ message: "Amchur deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneAmchur,
  getAllAmchur,
  addAmchur,
  deleteAmchur,
  updateAmchur,
};


