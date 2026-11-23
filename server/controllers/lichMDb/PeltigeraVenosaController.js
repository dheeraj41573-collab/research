const PeltigeraVenosa = require("../../models/lichMDb/PeltigeraVenosaModel.js");
const mongoose = require("mongoose");

const addPeltigeraVenosa = async (req, res, next) => {
  const peltigeraVenosa = new PeltigeraVenosa({
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
    await peltigeraVenosa.save();
    res.status(201).json(peltigeraVenosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOnePeltigeraVenosa = async (req, res, next) => {
  const id = req.params.peltigeraVenosaId;
  try {
    const peltigeraVenosa = await PeltigeraVenosa.findById(id);
    res.status(200).json(peltigeraVenosa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPeltigeraVenosas = async (req, res, next) => {
  try {
    const peltigeraVenosas = await PeltigeraVenosa.find({});
    res.status(200).json(peltigeraVenosas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updatePeltigeraVenosa = async (req, res, next) => {
  const id = req.params.peltigeraVenosaId;
  mongoose.set("useFindAndModify", false);
  PeltigeraVenosa.findByIdAndUpdate(
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
    function (err, peltigeraVenosa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PeltigeraVenosa updated successfully",
          peltigeraVenosa: peltigeraVenosa,
        });
      }
    }
  );
};

const deletePeltigeraVenosa = async (req, res, next) => {
  const id = req.params.peltigeraVenosaId;
  try {
    await PeltigeraVenosa.deleteOne({ _id: id });
    res.status(200).json({ message: "PeltigeraVenosa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePeltigeraVenosa,
  getAllPeltigeraVenosas,
  addPeltigeraVenosa,
  deletePeltigeraVenosa,
  updatePeltigeraVenosa,
};