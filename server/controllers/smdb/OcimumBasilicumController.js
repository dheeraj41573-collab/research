const OcimumBasilicum = require("../../models/smdb/OcimumBasilicumModel")
const mongoose = require("mongoose");

const getOneOcimumBasilicum = async (req, res, next) => {
  const id = req.params.ocimumBasilicumId;
  try {
    const doc = await OcimumBasilicum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllOcimumBasilicum = async (req, res, next) => {
  try {
    const docs = await OcimumBasilicum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addOcimumBasilicum = async (req, res, next) => {
  const doc = new OcimumBasilicum({
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

const updateOcimumBasilicum = async (req, res, next) => {
  const id = req.params.ocimumBasilicumId;
  mongoose.set("useFindAndModify", false);
  OcimumBasilicum.findByIdAndUpdate(
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
          message: "OcimumBasilicum updated successfully",
          ocimumBasilicum: doc,
        });
      }
    }
  );
};

const deleteOcimumBasilicum = async (req, res, next) => {
  const id = req.params.ocimumBasilicumId;
  try {
    await OcimumBasilicum.deleteOne({ _id: id });
    res.status(200).json({ message: "OcimumBasilicum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneOcimumBasilicum,
  getAllOcimumBasilicum,
  addOcimumBasilicum,
  deleteOcimumBasilicum,
  updateOcimumBasilicum,
};


