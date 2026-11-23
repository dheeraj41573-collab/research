const IlliciumVerum = require("../../models/smdb/IlliciumVerumModel")
const mongoose = require("mongoose");

const getOneIlliciumVerum = async (req, res, next) => {
  const id = req.params.illiciumVerumId;
  try {
    const doc = await IlliciumVerum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllIlliciumVerum = async (req, res, next) => {
  try {
    const docs = await IlliciumVerum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addIlliciumVerum = async (req, res, next) => {
  const doc = new IlliciumVerum({
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

const updateIlliciumVerum = async (req, res, next) => {
  const id = req.params.illiciumVerumId;
  mongoose.set("useFindAndModify", false);
  IlliciumVerum.findByIdAndUpdate(
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
          message: "IlliciumVerum updated successfully",
          illiciumVerum: doc,
        });
      }
    }
  );
};

const deleteIlliciumVerum = async (req, res, next) => {
  const id = req.params.illiciumVerumId;
  try {
    await IlliciumVerum.deleteOne({ _id: id });
    res.status(200).json({ message: "IlliciumVerum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneIlliciumVerum,
  getAllIlliciumVerum,
  addIlliciumVerum,
  deleteIlliciumVerum,
  updateIlliciumVerum,
};


