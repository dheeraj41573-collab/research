const ParmotremaSanctiAngelii = require("../../models/lichMDb/ParmotremaSanctiAngeliiModel.js");
const mongoose = require("mongoose");

const addParmotremaSanctiAngelii = async (req, res, next) => {
  const parmotremaSanctiAngelii = new ParmotremaSanctiAngelii({
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
    await parmotremaSanctiAngelii.save();
    res.status(201).json(parmotremaSanctiAngelii);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneParmotremaSanctiAngelii = async (req, res, next) => {
  const id = req.params.parmotremaSanctiAngeliiId;
  try {
    const parmotremaSanctiAngelii = await ParmotremaSanctiAngelii.findById(id);
    res.status(200).json(parmotremaSanctiAngelii);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllParmotremaSanctiAngeliis = async (req, res, next) => {
  try {
    const parmotremaSanctiAngeliis = await ParmotremaSanctiAngelii.find({});
    res.status(200).json(parmotremaSanctiAngeliis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateParmotremaSanctiAngelii = async (req, res, next) => {
  const id = req.params.parmotremaSanctiAngeliiId;
  mongoose.set("useFindAndModify", false);
  ParmotremaSanctiAngelii.findByIdAndUpdate(
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
    function (err, parmotremaSanctiAngelii) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ParmotremaSanctiAngelii updated successfully",
          parmotremaSanctiAngelii: parmotremaSanctiAngelii,
        });
      }
    }
  );
};

const deleteParmotremaSanctiAngelii = async (req, res, next) => {
  const id = req.params.parmotremaSanctiAngeliiId;
  try {
    await ParmotremaSanctiAngelii.deleteOne({ _id: id });
    res.status(200).json({ message: "ParmotremaSanctiAngelii deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneParmotremaSanctiAngelii,
  getAllParmotremaSanctiAngeliis,
  addParmotremaSanctiAngelii,
  deleteParmotremaSanctiAngelii,
  updateParmotremaSanctiAngelii,
};