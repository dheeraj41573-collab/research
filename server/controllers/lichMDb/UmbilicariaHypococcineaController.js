const UmbilicariaHypococcinea = require("../../models/lichMDb/UmbilicariaHypococcineaModel.js");
const mongoose = require("mongoose");

const addUmbilicariaHypococcinea = async (req, res, next) => {
  const umbilicariaHypococcinea = new UmbilicariaHypococcinea({
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
    await umbilicariaHypococcinea.save();
    res.status(201).json(umbilicariaHypococcinea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaHypococcinea = async (req, res, next) => {
  const id = req.params.umbilicariaHypococcineaId;
  try {
    const umbilicariaHypococcinea = await UmbilicariaHypococcinea.findById(id);
    res.status(200).json(umbilicariaHypococcinea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaHypococcineas = async (req, res, next) => {
  try {
    const umbilicariaHypococcineas = await UmbilicariaHypococcinea.find({});
    res.status(200).json(umbilicariaHypococcineas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaHypococcinea = async (req, res, next) => {
  const id = req.params.umbilicariaHypococcineaId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaHypococcinea.findByIdAndUpdate(
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
    function (err, umbilicariaHypococcinea) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaHypococcinea updated successfully",
          umbilicariaHypococcinea: umbilicariaHypococcinea,
        });
      }
    }
  );
};

const deleteUmbilicariaHypococcinea = async (req, res, next) => {
  const id = req.params.umbilicariaHypococcineaId;
  try {
    await UmbilicariaHypococcinea.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaHypococcinea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaHypococcinea,
  getAllUmbilicariaHypococcineas,
  addUmbilicariaHypococcinea,
  deleteUmbilicariaHypococcinea,
  updateUmbilicariaHypococcinea,
};