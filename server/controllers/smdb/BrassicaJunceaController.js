const BrassicaJuncea = require("../../models/smdb/BrassicaJunceaModel")
const mongoose = require("mongoose");

const getOneBrassicaJuncea = async (req, res, next) => {
  const id = req.params.brassicaJunceaId;
  try {
    const doc = await BrassicaJuncea.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllBrassicaJuncea = async (req, res, next) => {
  try {
    const docs = await BrassicaJuncea.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addBrassicaJuncea = async (req, res, next) => {
  const doc = new BrassicaJuncea({
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

const updateBrassicaJuncea = async (req, res, next) => {
  const id = req.params.brassicaJunceaId;
  mongoose.set("useFindAndModify", false);
  BrassicaJuncea.findByIdAndUpdate(
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
          message: "BrassicaJuncea updated successfully",
          brassicaJuncea: doc,
        });
      }
    }
  );
};

const deleteBrassicaJuncea = async (req, res, next) => {
  const id = req.params.brassicaJunceaId;
  try {
    await BrassicaJuncea.deleteOne({ _id: id });
    res.status(200).json({ message: "BrassicaJuncea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneBrassicaJuncea,
  getAllBrassicaJuncea,
  addBrassicaJuncea,
  deleteBrassicaJuncea,
  updateBrassicaJuncea,
};


