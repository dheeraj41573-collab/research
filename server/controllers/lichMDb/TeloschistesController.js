const Teloschistes = require("../../models/lichMDb/TeloschistesModel.js");
const mongoose = require("mongoose");

const addTeloschistes = async (req, res, next) => {
  const teloschistes = new Teloschistes({
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
    await teloschistes.save();
    res.status(201).json(teloschistes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneTeloschistes = async (req, res, next) => {
  const id = req.params.teloschistesId;
  try {
    const teloschistes = await Teloschistes.findById(id);
    res.status(200).json(teloschistes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllTeloschistess = async (req, res, next) => {
  try {
    const teloschistess = await Teloschistes.find({});
    res.status(200).json(teloschistess);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateTeloschistes = async (req, res, next) => {
  const id = req.params.teloschistesId;
  mongoose.set("useFindAndModify", false);
  Teloschistes.findByIdAndUpdate(
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
    function (err, teloschistes) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Teloschistes updated successfully",
          teloschistes: teloschistes,
        });
      }
    }
  );
};

const deleteTeloschistes = async (req, res, next) => {
  const id = req.params.teloschistesId;
  try {
    await Teloschistes.deleteOne({ _id: id });
    res.status(200).json({ message: "Teloschistes deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneTeloschistes,
  getAllTeloschistess,
  addTeloschistes,
  deleteTeloschistes,
  updateTeloschistes,
};