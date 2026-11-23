const LaurusNobilis = require("../../models/smdb/LaurusNobilisModel")
const mongoose = require("mongoose");

const getOneLaurusNobilis = async (req, res, next) => {
  const id = req.params.laurusNobilisId;
  try {
    const doc = await LaurusNobilis.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLaurusNobilis = async (req, res, next) => {
  try {
    const docs = await LaurusNobilis.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addLaurusNobilis = async (req, res, next) => {
  const doc = new LaurusNobilis({
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

const updateLaurusNobilis = async (req, res, next) => {
  const id = req.params.laurusNobilisId;
  mongoose.set("useFindAndModify", false);
  LaurusNobilis.findByIdAndUpdate(
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
          message: "LaurusNobilis updated successfully",
          laurusNobilis: doc,
        });
      }
    }
  );
};

const deleteLaurusNobilis = async (req, res, next) => {
  const id = req.params.laurusNobilisId;
  try {
    await LaurusNobilis.deleteOne({ _id: id });
    res.status(200).json({ message: "LaurusNobilis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLaurusNobilis,
  getAllLaurusNobilis,
  addLaurusNobilis,
  deleteLaurusNobilis,
  updateLaurusNobilis,
};


