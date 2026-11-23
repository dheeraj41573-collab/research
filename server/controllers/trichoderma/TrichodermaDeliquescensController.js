const TrichodermaDeliquescens = require("../../models/trichoderma/TrichodermaDeliquescensModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaDeliquescens = async (req, res, next) => {
  const id = req.params.trichodermaDeliquescensId;
  try {
    const doc = await TrichodermaDeliquescens.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaDeliquescens = async (req, res, next) => {
  try {
    const docs = await TrichodermaDeliquescens.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaDeliquescens = async (req, res, next) => {
  const doc = new TrichodermaDeliquescens({
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

const updateTrichodermaDeliquescens = async (req, res, next) => {
  const id = req.params.trichodermaDeliquescensId;
  mongoose.set("useFindAndModify", false);
  TrichodermaDeliquescens.findByIdAndUpdate(
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
          message: "TrichodermaDeliquescens updated successfully",
          trichodermaDeliquescens: doc,
        });
      }
    }
  );
};

const deleteTrichodermaDeliquescens = async (req, res, next) => {
  const id = req.params.trichodermaDeliquescensId;
  try {
    await TrichodermaDeliquescens.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaDeliquescens deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaDeliquescens,
  getAllTrichodermaDeliquescens,
  addTrichodermaDeliquescens,
  deleteTrichodermaDeliquescens,
  updateTrichodermaDeliquescens,
};
