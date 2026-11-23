const RamalinaPollinaria = require("../../models/lichMDb/RamalinaPollinariaModel.js");
const mongoose = require("mongoose");

const addRamalinaPollinaria = async (req, res, next) => {
  const ramalinaPollinaria = new RamalinaPollinaria({
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
    await ramalinaPollinaria.save();
    res.status(201).json(ramalinaPollinaria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalinaPollinaria = async (req, res, next) => {
  const id = req.params.ramalinaPollinariaId;
  try {
    const ramalinaPollinaria = await RamalinaPollinaria.findById(id);
    res.status(200).json(ramalinaPollinaria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinaPollinarias = async (req, res, next) => {
  try {
    const ramalinaPollinarias = await RamalinaPollinaria.find({});
    res.status(200).json(ramalinaPollinarias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalinaPollinaria = async (req, res, next) => {
  const id = req.params.ramalinaPollinariaId;
  mongoose.set("useFindAndModify", false);
  RamalinaPollinaria.findByIdAndUpdate(
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
    function (err, ramalinaPollinaria) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "RamalinaPollinaria updated successfully",
          ramalinaPollinaria: ramalinaPollinaria,
        });
      }
    }
  );
};

const deleteRamalinaPollinaria = async (req, res, next) => {
  const id = req.params.ramalinaPollinariaId;
  try {
    await RamalinaPollinaria.deleteOne({ _id: id });
    res.status(200).json({ message: "RamalinaPollinaria deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalinaPollinaria,
  getAllRamalinaPollinarias,
  addRamalinaPollinaria,
  deleteRamalinaPollinaria,
  updateRamalinaPollinaria,
};