const PeltigeraCanina = require("../../models/lichMDb/PeltigeraCaninaModel.js");
const mongoose = require("mongoose");

const addPeltigeraCanina = async (req, res, next) => {
  const peltigeraCanina = new PeltigeraCanina({
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
    await peltigeraCanina.save();
    res.status(201).json(peltigeraCanina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePeltigeraCanina = async (req, res, next) => {
  const id = req.params.peltigeraCaninaId;
  try {
    const peltigeraCanina = await PeltigeraCanina.findById(id);
    res.status(200).json(peltigeraCanina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPeltigeraCaninas = async (req, res, next) => {
  try {
    const peltigeraCaninas = await PeltigeraCanina.find({});
    res.status(200).json(peltigeraCaninas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePeltigeraCanina = async (req, res, next) => {
  const id = req.params.peltigeraCaninaId;
  mongoose.set("useFindAndModify", false);
  PeltigeraCanina.findByIdAndUpdate(
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
    function (err, peltigeraCanina) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PeltigeraCanina updated successfully",
          peltigeraCanina: peltigeraCanina,
        });
      }
    }
  );
};

const deletePeltigeraCanina = async (req, res, next) => {
  const id = req.params.peltigeraCaninaId;
  try {
    await PeltigeraCanina.deleteOne({ _id: id });
    res.status(200).json({ message: "PeltigeraCanina deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePeltigeraCanina,
  getAllPeltigeraCaninas,
  addPeltigeraCanina,
  deletePeltigeraCanina,
  updatePeltigeraCanina,
};