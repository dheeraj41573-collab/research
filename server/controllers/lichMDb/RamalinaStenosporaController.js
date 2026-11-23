const RamalinaStenospora = require("../../models/lichMDb/RamalinaStenosporaModel.js");
const mongoose = require("mongoose");

const addRamalinaStenospora = async (req, res, next) => {
  const ramalinaStenospora = new RamalinaStenospora({
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
    await ramalinaStenospora.save();
    res.status(201).json(ramalinaStenospora);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalinaStenospora = async (req, res, next) => {
  const id = req.params.ramalinaStenosporaId;
  try {
    const ramalinaStenospora = await RamalinaStenospora.findById(id);
    res.status(200).json(ramalinaStenospora);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinaStenosporas = async (req, res, next) => {
  try {
    const ramalinaStenosporas = await RamalinaStenospora.find({});
    res.status(200).json(ramalinaStenosporas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalinaStenospora = async (req, res, next) => {
  const id = req.params.ramalinaStenosporaId;
  mongoose.set("useFindAndModify", false);
  RamalinaStenospora.findByIdAndUpdate(
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
    function (err, ramalinaStenospora) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "RamalinaStenospora updated successfully",
          ramalinaStenospora: ramalinaStenospora,
        });
      }
    }
  );
};

const deleteRamalinaStenospora = async (req, res, next) => {
  const id = req.params.ramalinaStenosporaId;
  try {
    await RamalinaStenospora.deleteOne({ _id: id });
    res.status(200).json({ message: "RamalinaStenospora deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalinaStenospora,
  getAllRamalinaStenosporas,
  addRamalinaStenospora,
  deleteRamalinaStenospora,
  updateRamalinaStenospora,
};