const RamalinaDila = require("../../models/lichMDb/RamalinaDilaModel.js");
const mongoose = require("mongoose");

const addRamalinaDila = async (req, res, next) => {
  const ramalinaDila = new RamalinaDila({
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
    await ramalinaDila.save();
    res.status(201).json(ramalinaDila);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalinaDila = async (req, res, next) => {
  const id = req.params.ramalinaDilaId;
  try {
    const ramalinaDila = await RamalinaDila.findById(id);
    res.status(200).json(ramalinaDila);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinaDilas = async (req, res, next) => {
  try {
    const ramalinaDilas = await RamalinaDila.find({});
    res.status(200).json(ramalinaDilas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalinaDila = async (req, res, next) => {
  const id = req.params.ramalinaDilaId;
  mongoose.set("useFindAndModify", false);
  RamalinaDila.findByIdAndUpdate(
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
    function (err, ramalinaDila) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "RamalinaDila updated successfully",
          ramalinaDila: ramalinaDila,
        });
      }
    }
  );
};

const deleteRamalinaDila = async (req, res, next) => {
  const id = req.params.ramalinaDilaId;
  try {
    await RamalinaDila.deleteOne({ _id: id });
    res.status(200).json({ message: "RamalinaDila deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalinaDila,
  getAllRamalinaDilas,
  addRamalinaDila,
  deleteRamalinaDila,
  updateRamalinaDila,
};