const TrichodermaCornuDamae = require("../../models/trichoderma/TrichodermaCornuDamaeModel.js");
const mongoose = require("mongoose");

const getOneTrichodermaCornuDamae = async (req, res, next) => {
  const id = req.params.trichodermacornudamaeId;
  try {
    const doc = await TrichodermaCornuDamae.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTrichodermaCornuDamaes = async (req, res, next) => {
  try {
    const docs = await TrichodermaCornuDamae.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addTrichodermaCornuDamae = async (req, res, next) => {
  const doc = new TrichodermaCornuDamae({
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

const updateTrichodermaCornuDamae = async (req, res, next) => {
  const id = req.params.trichodermacornudamaeId;
  mongoose.set("useFindAndModify", false);
  TrichodermaCornuDamae.findByIdAndUpdate(
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
          message: "TrichodermaCornuDamae updated successfully",
          trichodermacornudamae: doc,
        });
      }
    }
  );
};

const deleteTrichodermaCornuDamae = async (req, res, next) => {
  const id = req.params.trichodermacornudamaeId;
  try {
    await TrichodermaCornuDamae.deleteOne({ _id: id });
    res.status(200).json({ message: "TrichodermaCornuDamae deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTrichodermaCornuDamae,
  getAllTrichodermaCornuDamaes,
  addTrichodermaCornuDamae,
  deleteTrichodermaCornuDamae,
  updateTrichodermaCornuDamae,
};
