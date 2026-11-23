const UmbilicariaPolyphylla = require("../../models/lichMDb/UmbilicariaPolyphyllaModel.js");
const mongoose = require("mongoose");

const addUmbilicariaPolyphylla = async (req, res, next) => {
  const umbilicariaPolyphylla = new UmbilicariaPolyphylla({
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
    await umbilicariaPolyphylla.save();
    res.status(201).json(umbilicariaPolyphylla);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaPolyphylla = async (req, res, next) => {
  const id = req.params.umbilicariaPolyphyllaId;
  try {
    const umbilicariaPolyphylla = await UmbilicariaPolyphylla.findById(id);
    res.status(200).json(umbilicariaPolyphylla);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaPolyphyllas = async (req, res, next) => {
  try {
    const umbilicariaPolyphyllas = await UmbilicariaPolyphylla.find({});
    res.status(200).json(umbilicariaPolyphyllas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaPolyphylla = async (req, res, next) => {
  const id = req.params.umbilicariaPolyphyllaId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaPolyphylla.findByIdAndUpdate(
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
    function (err, umbilicariaPolyphylla) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaPolyphylla updated successfully",
          umbilicariaPolyphylla: umbilicariaPolyphylla,
        });
      }
    }
  );
};

const deleteUmbilicariaPolyphylla = async (req, res, next) => {
  const id = req.params.umbilicariaPolyphyllaId;
  try {
    await UmbilicariaPolyphylla.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaPolyphylla deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaPolyphylla,
  getAllUmbilicariaPolyphyllas,
  addUmbilicariaPolyphylla,
  deleteUmbilicariaPolyphylla,
  updateUmbilicariaPolyphylla,
};