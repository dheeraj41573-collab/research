const Dimelaena = require("../../models/lichMDb/DimelaenaModel.js");
const mongoose = require("mongoose");

const addDimelaena = async (req, res, next) => {
  const dimelaena = new Dimelaena({
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
    await dimelaena.save();
    res.status(201).json(dimelaena);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneDimelaena = async (req, res, next) => {
  const id = req.params.dimelaenaId;
  try {
    const dimelaena = await Dimelaena.findById(id);
    res.status(200).json(dimelaena);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllDimelaenas = async (req, res, next) => {
  try {
    const dimelaenas = await Dimelaena.find({});
    res.status(200).json(dimelaenas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateDimelaena = async (req, res, next) => {
  const id = req.params.dimelaenaId;
  mongoose.set("useFindAndModify", false);
  Dimelaena.findByIdAndUpdate(
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
    function (err, dimelaena) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Dimelaena updated successfully",
          dimelaena: dimelaena,
        });
      }
    }
  );
};

const deleteDimelaena = async (req, res, next) => {
  const id = req.params.dimelaenaId;
  try {
    await Dimelaena.deleteOne({ _id: id });
    res.status(200).json({ message: "Dimelaena deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneDimelaena,
  getAllDimelaenas,
  addDimelaena,
  deleteDimelaena,
  updateDimelaena,
};