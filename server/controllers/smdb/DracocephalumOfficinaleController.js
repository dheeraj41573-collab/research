const DracocephalumOfficinale = require("../../models/smdb/DracocephalumOfficinaleModel")
const mongoose = require("mongoose");

const getOneDracocephalumOfficinale = async (req, res, next) => {
  const id = req.params.dracocephalumOfficinaleId;
  try {
    const doc = await DracocephalumOfficinale.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllDracocephalumOfficinale = async (req, res, next) => {
  try {
    const docs = await DracocephalumOfficinale.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addDracocephalumOfficinale = async (req, res, next) => {
  const doc = new DracocephalumOfficinale({
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

const updateDracocephalumOfficinale = async (req, res, next) => {
  const id = req.params.dracocephalumOfficinaleId;
  mongoose.set("useFindAndModify", false);
  DracocephalumOfficinale.findByIdAndUpdate(
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
          message: "DracocephalumOfficinale updated successfully",
          dracocephalumOfficinale: doc,
        });
      }
    }
  );
};

const deleteDracocephalumOfficinale = async (req, res, next) => {
  const id = req.params.dracocephalumOfficinaleId;
  try {
    await DracocephalumOfficinale.deleteOne({ _id: id });
    res.status(200).json({ message: "DracocephalumOfficinale deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneDracocephalumOfficinale,
  getAllDracocephalumOfficinale,
  addDracocephalumOfficinale,
  deleteDracocephalumOfficinale,
  updateDracocephalumOfficinale,
};


