const ArmoraciaRusticana = require("../../models/smdb/ArmoraciaRusticanaModel")
const mongoose = require("mongoose");

const getOneArmoraciaRusticana = async (req, res, next) => {
  const id = req.params.armoraciaRusticanaId;
  try {
    const doc = await ArmoraciaRusticana.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllArmoraciaRusticana = async (req, res, next) => {
  try {
    const docs = await ArmoraciaRusticana.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addArmoraciaRusticana = async (req, res, next) => {
  const doc = new ArmoraciaRusticana({
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

const updateArmoraciaRusticana = async (req, res, next) => {
  const id = req.params.armoraciaRusticanaId;
  mongoose.set("useFindAndModify", false);
  ArmoraciaRusticana.findByIdAndUpdate(
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
          message: "ArmoraciaRusticana updated successfully",
          armoraciaRusticana: doc,
        });
      }
    }
  );
};

const deleteArmoraciaRusticana = async (req, res, next) => {
  const id = req.params.armoraciaRusticanaId;
  try {
    await ArmoraciaRusticana.deleteOne({ _id: id });
    res.status(200).json({ message: "ArmoraciaRusticana deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneArmoraciaRusticana,
  getAllArmoraciaRusticana,
  addArmoraciaRusticana,
  deleteArmoraciaRusticana,
  updateArmoraciaRusticana,
};


