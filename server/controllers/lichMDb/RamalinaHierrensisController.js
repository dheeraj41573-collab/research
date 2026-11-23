const RamalinaHierrensis = require("../../models/lichMDb/RamalinaHierrensisModel.js");
const mongoose = require("mongoose");

const addRamalinaHierrensis = async (req, res, next) => {
  const ramalinaHierrensis = new RamalinaHierrensis({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    lichen: req.body.lichen,
    cid: req.body.cid,
    commonName: req.body.commonName,
    IUPACName: req.body.IUPACName,
    molecularWeight: req.body.molecularWeight,
    molecularFormula: req.body.molecularFormula,
    canonicalSmiles: req.body.canonicalSmiles,
    references: req.body.references,
    superClass: req.body.superClass,
    class: req.body.class,
  });
  try {
    await ramalinaHierrensis.save();
    res.status(201).json(ramalinaHierrensis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalinaHierrensis = async (req, res, next) => {
  const id = req.params.ramalinaHierrensisId;
  try {
    const ramalinaHierrensis = await RamalinaHierrensis.findById(id);
    res.status(200).json(ramalinaHierrensis);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinaHierrensiss = async (req, res, next) => {
  try {
    const ramalinaHierrensiss = await RamalinaHierrensis.find({});
    res.status(200).json(ramalinaHierrensiss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalinaHierrensis = async (req, res, next) => {
  const id = req.params.ramalinaHierrensisId;
  mongoose.set("useFindAndModify", false);
  RamalinaHierrensis.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      lichen: req.body.lichen,
      cid: req.body.cid,
      commonName: req.body.commonName,
      IUPACName: req.body.IUPACName,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      references: req.body.references,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, ramalinaHierrensis) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "RamalinaHierrensis updated successfully",
          ramalinaHierrensis: ramalinaHierrensis,
        });
      }
    }
  );
};

const deleteRamalinaHierrensis = async (req, res, next) => {
  const id = req.params.ramalinaHierrensisId;
  try {
    await RamalinaHierrensis.deleteOne({ _id: id });
    res.status(200).json({ message: "RamalinaHierrensis deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalinaHierrensis,
  getAllRamalinaHierrensiss,
  addRamalinaHierrensis,
  deleteRamalinaHierrensis,
  updateRamalinaHierrensis,
};