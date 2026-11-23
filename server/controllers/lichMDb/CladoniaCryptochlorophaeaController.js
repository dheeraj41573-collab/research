const CladoniaCryptochlorophaea = require("../../models/lichMDb/CladoniaCryptochlorophaeaModel.js");
const mongoose = require("mongoose");

const addCladoniaCryptochlorophaea = async (req, res, next) => {
  const cladoniaCryptochlorophaea = new CladoniaCryptochlorophaea({
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
    await cladoniaCryptochlorophaea.save();
    res.status(201).json(cladoniaCryptochlorophaea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaCryptochlorophaea = async (req, res, next) => {
  const id = req.params.cladoniaCryptochlorophaeaId;
  try {
    const cladoniaCryptochlorophaea = await CladoniaCryptochlorophaea.findById(id);
    res.status(200).json(cladoniaCryptochlorophaea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaCryptochlorophaeas = async (req, res, next) => {
  try {
    const cladoniaCryptochlorophaeas = await CladoniaCryptochlorophaea.find({});
    res.status(200).json(cladoniaCryptochlorophaeas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaCryptochlorophaea = async (req, res, next) => {
  const id = req.params.cladoniaCryptochlorophaeaId;
  mongoose.set("useFindAndModify", false);
  CladoniaCryptochlorophaea.findByIdAndUpdate(
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
    function (err, cladoniaCryptochlorophaea) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaCryptochlorophaea updated successfully",
          cladoniaCryptochlorophaea: cladoniaCryptochlorophaea,
        });
      }
    }
  );
};

const deleteCladoniaCryptochlorophaea = async (req, res, next) => {
  const id = req.params.cladoniaCryptochlorophaeaId;
  try {
    await CladoniaCryptochlorophaea.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaCryptochlorophaea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaCryptochlorophaea,
  getAllCladoniaCryptochlorophaeas,
  addCladoniaCryptochlorophaea,
  deleteCladoniaCryptochlorophaea,
  updateCladoniaCryptochlorophaea,
};