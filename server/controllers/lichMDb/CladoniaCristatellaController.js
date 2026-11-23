const CladoniaCristatella = require("../../models/lichMDb/CladoniaCristatellaModel.js");
const mongoose = require("mongoose");

const addCladoniaCristatella = async (req, res, next) => {
  const cladoniaCristatella = new CladoniaCristatella({
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
    await cladoniaCristatella.save();
    res.status(201).json(cladoniaCristatella);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaCristatella = async (req, res, next) => {
  const id = req.params.cladoniaCristatellaId;
  try {
    const cladoniaCristatella = await CladoniaCristatella.findById(id);
    res.status(200).json(cladoniaCristatella);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaCristatellas = async (req, res, next) => {
  try {
    const cladoniaCristatellas = await CladoniaCristatella.find({});
    res.status(200).json(cladoniaCristatellas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaCristatella = async (req, res, next) => {
  const id = req.params.cladoniaCristatellaId;
  mongoose.set("useFindAndModify", false);
  CladoniaCristatella.findByIdAndUpdate(
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
    function (err, cladoniaCristatella) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaCristatella updated successfully",
          cladoniaCristatella: cladoniaCristatella,
        });
      }
    }
  );
};

const deleteCladoniaCristatella = async (req, res, next) => {
  const id = req.params.cladoniaCristatellaId;
  try {
    await CladoniaCristatella.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaCristatella deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaCristatella,
  getAllCladoniaCristatellas,
  addCladoniaCristatella,
  deleteCladoniaCristatella,
  updateCladoniaCristatella,
};