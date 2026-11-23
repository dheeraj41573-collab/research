const Ramalina = require("../../models/lichMDb/RamalinaModel.js");
const mongoose = require("mongoose");

const addRamalina = async (req, res, next) => {
  const ramalina = new Ramalina({
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
    await ramalina.save();
    res.status(201).json(ramalina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalina = async (req, res, next) => {
  const id = req.params.ramalinaId;
  try {
    const ramalina = await Ramalina.findById(id);
    res.status(200).json(ramalina);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinas = async (req, res, next) => {
  try {
    const ramalinas = await Ramalina.find({});
    res.status(200).json(ramalinas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalina = async (req, res, next) => {
  const id = req.params.ramalinaId;
  mongoose.set("useFindAndModify", false);
  Ramalina.findByIdAndUpdate(
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
    function (err, ramalina) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Ramalina updated successfully",
          ramalina: ramalina,
        });
      }
    }
  );
};

const deleteRamalina = async (req, res, next) => {
  const id = req.params.ramalinaId;
  try {
    await Ramalina.deleteOne({ _id: id });
    res.status(200).json({ message: "Ramalina deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalina,
  getAllRamalinas,
  addRamalina,
  deleteRamalina,
  updateRamalina,
};