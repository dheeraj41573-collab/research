const RamalinaSiliquosa = require("../../models/lichMDb/RamalinaSiliquosaModel.js");
const mongoose = require("mongoose");

const addRamalinaSiliquosa = async (req, res, next) => {
  const ramalinaSiliquosa = new RamalinaSiliquosa({
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
    await ramalinaSiliquosa.save();
    res.status(201).json(ramalinaSiliquosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalinaSiliquosa = async (req, res, next) => {
  const id = req.params.ramalinaSiliquosaId;
  try {
    const ramalinaSiliquosa = await RamalinaSiliquosa.findById(id);
    res.status(200).json(ramalinaSiliquosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinaSiliquosas = async (req, res, next) => {
  try {
    const ramalinaSiliquosas = await RamalinaSiliquosa.find({});
    res.status(200).json(ramalinaSiliquosas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalinaSiliquosa = async (req, res, next) => {
  const id = req.params.ramalinaSiliquosaId;
  mongoose.set("useFindAndModify", false);
  RamalinaSiliquosa.findByIdAndUpdate(
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
    function (err, ramalinaSiliquosa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "RamalinaSiliquosa updated successfully",
          ramalinaSiliquosa: ramalinaSiliquosa,
        });
      }
    }
  );
};

const deleteRamalinaSiliquosa = async (req, res, next) => {
  const id = req.params.ramalinaSiliquosaId;
  try {
    await RamalinaSiliquosa.deleteOne({ _id: id });
    res.status(200).json({ message: "RamalinaSiliquosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalinaSiliquosa,
  getAllRamalinaSiliquosas,
  addRamalinaSiliquosa,
  deleteRamalinaSiliquosa,
  updateRamalinaSiliquosa,
};