const LevisticumOfficinale = require("../../models/smdb/LevisticumOfficinaleModel")
const mongoose = require("mongoose");

const getOneLevisticumOfficinale = async (req, res, next) => {
  const id = req.params.levisticumOfficinaleId;
  try {
    const doc = await LevisticumOfficinale.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLevisticumOfficinale = async (req, res, next) => {
  try {
    const docs = await LevisticumOfficinale.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addLevisticumOfficinale = async (req, res, next) => {
  const doc = new LevisticumOfficinale({
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

const updateLevisticumOfficinale = async (req, res, next) => {
  const id = req.params.levisticumOfficinaleId;
  mongoose.set("useFindAndModify", false);
  LevisticumOfficinale.findByIdAndUpdate(
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
          message: "LevisticumOfficinale updated successfully",
          levisticumOfficinale: doc,
        });
      }
    }
  );
};

const deleteLevisticumOfficinale = async (req, res, next) => {
  const id = req.params.levisticumOfficinaleId;
  try {
    await LevisticumOfficinale.deleteOne({ _id: id });
    res.status(200).json({ message: "LevisticumOfficinale deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLevisticumOfficinale,
  getAllLevisticumOfficinale,
  addLevisticumOfficinale,
  deleteLevisticumOfficinale,
  updateLevisticumOfficinale,
};


