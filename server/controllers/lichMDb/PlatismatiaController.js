const Platismatia = require("../../models/lichMDb/PlatismatiaModel.js");
const mongoose = require("mongoose");

const addPlatismatia = async (req, res, next) => {
  const platismatia = new Platismatia({
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
    await platismatia.save();
    res.status(201).json(platismatia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePlatismatia = async (req, res, next) => {
  const id = req.params.platismatiaId;
  try {
    const platismatia = await Platismatia.findById(id);
    res.status(200).json(platismatia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPlatismatias = async (req, res, next) => {
  try {
    const platismatias = await Platismatia.find({});
    res.status(200).json(platismatias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePlatismatia = async (req, res, next) => {
  const id = req.params.platismatiaId;
  mongoose.set("useFindAndModify", false);
  Platismatia.findByIdAndUpdate(
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
    function (err, platismatia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Platismatia updated successfully",
          platismatia: platismatia,
        });
      }
    }
  );
};

const deletePlatismatia = async (req, res, next) => {
  const id = req.params.platismatiaId;
  try {
    await Platismatia.deleteOne({ _id: id });
    res.status(200).json({ message: "Platismatia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePlatismatia,
  getAllPlatismatias,
  addPlatismatia,
  deletePlatismatia,
  updatePlatismatia,
};