const SalviaRosmarinus = require("../../models/smdb/SalviaRosmarinusModel")
const mongoose = require("mongoose");

const getOneSalviaRosmarinus = async (req, res, next) => {
  const id = req.params.salviaRosmarinusId;
  try {
    const doc = await SalviaRosmarinus.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSalviaRosmarinus = async (req, res, next) => {
  try {
    const docs = await SalviaRosmarinus.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addSalviaRosmarinus = async (req, res, next) => {
  const doc = new SalviaRosmarinus({
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

const updateSalviaRosmarinus = async (req, res, next) => {
  const id = req.params.salviaRosmarinusId;
  mongoose.set("useFindAndModify", false);
  SalviaRosmarinus.findByIdAndUpdate(
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
          message: "SalviaRosmarinus updated successfully",
          salviaRosmarinus: doc,
        });
      }
    }
  );
};

const deleteSalviaRosmarinus = async (req, res, next) => {
  const id = req.params.salviaRosmarinusId;
  try {
    await SalviaRosmarinus.deleteOne({ _id: id });
    res.status(200).json({ message: "SalviaRosmarinus deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneSalviaRosmarinus,
  getAllSalviaRosmarinus,
  addSalviaRosmarinus,
  deleteSalviaRosmarinus,
  updateSalviaRosmarinus,
};


