const TrichodermaCremeum = require("../../models/trichoderma/TrichodermaCremeumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaCremeum = async (req, res, next) => {
  const id = req.params.trichodermacremeumId;
  try {
    const doc = await TrichodermaCremeum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaCremeums = async (req, res, next) => {
  try {
    const docs = await TrichodermaCremeum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaCremeum = async (req, res, next) => {
  const doc = new TrichodermaCremeum({
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

const updateTrichodermaCremeum = async (req, res, next) => {
  const id = req.params.trichodermacremeumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaCremeum.findByIdAndUpdate(
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
          message: "TrichodermaCremeum updated successfully",
          trichodermacremeum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaCremeum = async (req, res, next) => {
  const id = req.params.trichodermacremeumId;
  try {
    await TrichodermaCremeum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaCremeum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaCremeum,
  getAllTrichodermaCremeums,
  addTrichodermaCremeum,
  deleteTrichodermaCremeum,
  updateTrichodermaCremeum,
};
