const LecanoraFrustulosa = require("../../models/lichMDb/LecanoraFrustulosaModel.js");
const mongoose = require("mongoose");

const addLecanoraFrustulosa = async (req, res, next) => {
  const lecanoraFrustulosa = new LecanoraFrustulosa({
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
    await lecanoraFrustulosa.save();
    res.status(201).json(lecanoraFrustulosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLecanoraFrustulosa = async (req, res, next) => {
  const id = req.params.lecanoraFrustulosaId;
  try {
    const lecanoraFrustulosa = await LecanoraFrustulosa.findById(id);
    res.status(200).json(lecanoraFrustulosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLecanoraFrustulosas = async (req, res, next) => {
  try {
    const lecanoraFrustulosas = await LecanoraFrustulosa.find({});
    res.status(200).json(lecanoraFrustulosas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLecanoraFrustulosa = async (req, res, next) => {
  const id = req.params.lecanoraFrustulosaId;
  mongoose.set("useFindAndModify", false);
  LecanoraFrustulosa.findByIdAndUpdate(
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
    function (err, lecanoraFrustulosa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LecanoraFrustulosa updated successfully",
          lecanoraFrustulosa: lecanoraFrustulosa,
        });
      }
    }
  );
};

const deleteLecanoraFrustulosa = async (req, res, next) => {
  const id = req.params.lecanoraFrustulosaId;
  try {
    await LecanoraFrustulosa.deleteOne({ _id: id });
    res.status(200).json({ message: "LecanoraFrustulosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLecanoraFrustulosa,
  getAllLecanoraFrustulosas,
  addLecanoraFrustulosa,
  deleteLecanoraFrustulosa,
  updateLecanoraFrustulosa,
};