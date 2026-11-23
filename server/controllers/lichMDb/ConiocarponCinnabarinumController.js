const ConiocarponCinnabarinum = require("../../models/lichMDb/ConiocarponCinnabarinumModel.js");
const mongoose = require("mongoose");

const addConiocarponCinnabarinum = async (req, res, next) => {
  const coniocarponCinnabarinum = new ConiocarponCinnabarinum({
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
    await coniocarponCinnabarinum.save();
    res.status(201).json(coniocarponCinnabarinum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneConiocarponCinnabarinum = async (req, res, next) => {
  const id = req.params.coniocarponCinnabarinumId;
  try {
    const coniocarponCinnabarinum = await ConiocarponCinnabarinum.findById(id);
    res.status(200).json(coniocarponCinnabarinum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllConiocarponCinnabarinums = async (req, res, next) => {
  try {
    const coniocarponCinnabarinums = await ConiocarponCinnabarinum.find({});
    res.status(200).json(coniocarponCinnabarinums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateConiocarponCinnabarinum = async (req, res, next) => {
  const id = req.params.coniocarponCinnabarinumId;
  mongoose.set("useFindAndModify", false);
  ConiocarponCinnabarinum.findByIdAndUpdate(
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
    function (err, coniocarponCinnabarinum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "ConiocarponCinnabarinum updated successfully",
          coniocarponCinnabarinum: coniocarponCinnabarinum,
        });
      }
    }
  );
};

const deleteConiocarponCinnabarinum = async (req, res, next) => {
  const id = req.params.coniocarponCinnabarinumId;
  try {
    await ConiocarponCinnabarinum.deleteOne({ _id: id });
    res.status(200).json({ message: "ConiocarponCinnabarinum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneConiocarponCinnabarinum,
  getAllConiocarponCinnabarinums,
  addConiocarponCinnabarinum,
  deleteConiocarponCinnabarinum,
  updateConiocarponCinnabarinum,
};