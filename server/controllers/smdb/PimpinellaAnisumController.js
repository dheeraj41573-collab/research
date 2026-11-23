const PimpinellaAnisum = require("../../models/smdb/PimpinellaAnisumModel")
const mongoose = require("mongoose");

const getOnePimpinellaAnisum = async (req, res, next) => {
  const id = req.params.pimpinellaAnisumId;
  try {
    const doc = await PimpinellaAnisum.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPimpinellaAnisum = async (req, res, next) => {
  try {
    const docs = await PimpinellaAnisum.find({});
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addPimpinellaAnisum = async (req, res, next) => {
  const doc = new PimpinellaAnisum({
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

const updatePimpinellaAnisum = async (req, res, next) => {
  const id = req.params.pimpinellaAnisumId;
  mongoose.set("useFindAndModify", false);
  PimpinellaAnisum.findByIdAndUpdate(
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
          message: "PimpinellaAnisum updated successfully",
          pimpinellaAnisum: doc,
        });
      }
    }
  );
};

const deletePimpinellaAnisum = async (req, res, next) => {
  const id = req.params.pimpinellaAnisumId;
  try {
    await PimpinellaAnisum.deleteOne({ _id: id });
    res.status(200).json({ message: "PimpinellaAnisum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePimpinellaAnisum,
  getAllPimpinellaAnisum,
  addPimpinellaAnisum,
  deletePimpinellaAnisum,
  updatePimpinellaAnisum,
};


