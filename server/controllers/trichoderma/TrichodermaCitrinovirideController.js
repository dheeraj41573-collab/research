const TrichodermaCitrinoviride = require("../../models/trichoderma/TrichodermaCitrinovirideModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaCitrinoviride = async (req, res, next) => {
  const id = req.params.trichodermacitrinovirideId;
  try {
    const doc = await TrichodermaCitrinoviride.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaCitrinovirides = async (req, res, next) => {
  try {
    const docs = await TrichodermaCitrinoviride.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaCitrinoviride = async (req, res, next) => {
  const doc = new TrichodermaCitrinoviride({
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

const updateTrichodermaCitrinoviride = async (req, res, next) => {
  const id = req.params.trichodermacitrinovirideId;
  mongoose.set("useFindAndModify", false);
  TrichodermaCitrinoviride.findByIdAndUpdate(
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
          message: "TrichodermaCitrinoviride updated successfully",
          trichodermacitrinoviride: doc,
        });
      }
    }
  );
};

const deleteTrichodermaCitrinoviride = async (req, res, next) => {
  const id = req.params.trichodermacitrinovirideId;
  try {
    await TrichodermaCitrinoviride.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaCitrinoviride deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaCitrinoviride,
  getAllTrichodermaCitrinovirides,
  addTrichodermaCitrinoviride,
  deleteTrichodermaCitrinoviride,
  updateTrichodermaCitrinoviride,
};
