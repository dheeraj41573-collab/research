
const OphioparmaVentosa = require("../../models/lichMDb/OphioparmaVentosaModel.js");
const mongoose = require("mongoose");

const addOphioparmaVentosa = async (req, res, next) => {
  const OphioparmaVentosa = new OphioparmaVentosa({
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
    await OphioparmaVentosa.save();
    res.status(201).json(OphioparmaVentosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneOphioparmaVentosa = async (req, res, next) => {
  const id = req.params.OphioparmaVentosaId;
  try {
    const OphioparmaVentosa = await OphioparmaVentosa.findById(id);
    res.status(200).json(OphioparmaVentosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllOphioparmaVentosas = async (req, res, next) => {
  try {
    const OphioparmaVentosas = await OphioparmaVentosa.find({});
    res.status(200).json(OphioparmaVentosas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateOphioparmaVentosa = async (req, res, next) => {
  const id = req.params.OphioparmaVentosaId;
  mongoose.set("useFindAndModify", false);
  OphioparmaVentosa.findByIdAndUpdate(
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
    function (err, OphioparmaVentosa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "OphioparmaVentosa updated successfully",
          OphioparmaVentosa: OphioparmaVentosa,
        });
      }
    }
  );
};

const deleteOphioparmaVentosa = async (req, res, next) => {
  const id = req.params.OphioparmaVentosaId;
  try {
    await OphioparmaVentosa.deleteOne({ _id: id });
    res.status(200).json({ message: "OphioparmaVentosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneOphioparmaVentosa,
  getAllOphioparmaVentosas,
  addOphioparmaVentosa,
  deleteOphioparmaVentosa,
  updateOphioparmaVentosa,
};