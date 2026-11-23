const TrichodermaCrassum = require("../../models/trichoderma/TrichodermaCrassumModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaCrassum = async (req, res, next) => {
  const id = req.params.trichodermaCrassumId;
  try {
    const doc = await TrichodermaCrassum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaCrassums = async (req, res, next) => {
  try {
    const docs = await TrichodermaCrassum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaCrassum = async (req, res, next) => {
  const doc = new TrichodermaCrassum({
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

const updateTrichodermaCrassum = async (req, res, next) => {
  const id = req.params.trichodermaCrassumId;
  mongoose.set("useFindAndModify", false);
  TrichodermaCrassum.findByIdAndUpdate(
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
          message: "TrichodermaCrassum updated successfully",
          trichodermaCrassum: doc,
        });
      }
    }
  );
};

const deleteTrichodermaCrassum = async (req, res, next) => {
  const id = req.params.trichodermaCrassumId;
  try {
    await TrichodermaCrassum.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaCrassum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaCrassum,
  getAllTrichodermaCrassums,
  addTrichodermaCrassum,
  deleteTrichodermaCrassum,
  updateTrichodermaCrassum,
};
