const CapparisSpinosa = require("../../models/smdb/CapparisSpinosaModel")
const mongoose = require("mongoose");

const getOneCapparisSpinosa = async (req, res, next) => {
  const id = req.params.capparisSpinosaId;
  try {
    const doc = await CapparisSpinosa.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCapparisSpinosa = async (req, res, next) => {
  try {
    const docs = await CapparisSpinosa.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addCapparisSpinosa = async (req, res, next) => {
  const doc = new CapparisSpinosa({
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

const updateCapparisSpinosa = async (req, res, next) => {
  const id = req.params.capparisSpinosaId;
  mongoose.set("useFindAndModify", false);
  CapparisSpinosa.findByIdAndUpdate(
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
          message: "CapparisSpinosa updated successfully",
          capparisSpinosa: doc,
        });
      }
    }
  );
};

const deleteCapparisSpinosa = async (req, res, next) => {
  const id = req.params.capparisSpinosaId;
  try {
    await CapparisSpinosa.deleteOne({ _id: id });
    res.status(200).json({ message: "CapparisSpinosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCapparisSpinosa,
  getAllCapparisSpinosa,
  addCapparisSpinosa,
  deleteCapparisSpinosa,
  updateCapparisSpinosa,
};


