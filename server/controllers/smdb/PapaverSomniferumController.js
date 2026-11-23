const PapaverSomniferum = require("../../models/smdb/PapaverSomniferumModel")
const mongoose = require("mongoose");

const getOnePapaverSomniferum = async (req, res, next) => {
  const id = req.params.papaverSomniferumId;
  try {
    const doc = await PapaverSomniferum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPapaverSomniferum = async (req, res, next) => {
  try {
    const docs = await PapaverSomniferum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addPapaverSomniferum = async (req, res, next) => {
  const doc = new PapaverSomniferum({
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

const updatePapaverSomniferum = async (req, res, next) => {
  const id = req.params.papaverSomniferumId;
  mongoose.set("useFindAndModify", false);
  PapaverSomniferum.findByIdAndUpdate(
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
          message: "PapaverSomniferum updated successfully",
          papaverSomniferum: doc,
        });
      }
    }
  );
};

const deletePapaverSomniferum = async (req, res, next) => {
  const id = req.params.papaverSomniferumId;
  try {
    await PapaverSomniferum.deleteOne({ _id: id });
    res.status(200).json({ message: "PapaverSomniferum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePapaverSomniferum,
  getAllPapaverSomniferum,
  addPapaverSomniferum,
  deletePapaverSomniferum,
  updatePapaverSomniferum,
};


