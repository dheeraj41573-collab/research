const Cetraria = require("../../models/lichMDb/CetrariaModel.js");
const mongoose = require("mongoose");

const addCetraria = async (req, res, next) => {
  const cetraria = new Cetraria({
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
    await cetraria.save();
    res.status(201).json(cetraria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCetraria = async (req, res, next) => {
  const id = req.params.cetrariaId;
  try {
    const cetraria = await Cetraria.findById(id);
    res.status(200).json(cetraria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCetrarias = async (req, res, next) => {
  try {
    const cetrarias = await Cetraria.find({});
    res.status(200).json(cetrarias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCetraria = async (req, res, next) => {
  const id = req.params.cetrariaId;
  mongoose.set("useFindAndModify", false);
  Cetraria.findByIdAndUpdate(
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
    function (err, cetraria) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Cetraria updated successfully",
          cetraria: cetraria,
        });
      }
    }
  );
};

const deleteCetraria = async (req, res, next) => {
  const id = req.params.cetrariaId;
  try {
    await Cetraria.deleteOne({ _id: id });
    res.status(200).json({ message: "Cetraria deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCetraria,
  getAllCetrarias,
  addCetraria,
  deleteCetraria,
  updateCetraria,
};