const StereocaulonCorticatulum = require("../../models/lichMDb/StereocaulonCorticatulumModel.js");
const mongoose = require("mongoose");

const addStereocaulonCorticatulum = async (req, res, next) => {
  const stereocaulonCorticatulum = new StereocaulonCorticatulum({
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
    await stereocaulonCorticatulum.save();
    res.status(201).json(stereocaulonCorticatulum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulonCorticatulum = async (req, res, next) => {
  const id = req.params.stereocaulonCorticatulumId;
  try {
    const stereocaulonCorticatulum = await StereocaulonCorticatulum.findById(id);
    res.status(200).json(stereocaulonCorticatulum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulonCorticatulums = async (req, res, next) => {
  try {
    const stereocaulonCorticatulums = await StereocaulonCorticatulum.find({});
    res.status(200).json(stereocaulonCorticatulums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulonCorticatulum = async (req, res, next) => {
  const id = req.params.stereocaulonCorticatulumId;
  mongoose.set("useFindAndModify", false);
  StereocaulonCorticatulum.findByIdAndUpdate(
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
    function (err, stereocaulonCorticatulum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StereocaulonCorticatulum updated successfully",
          stereocaulonCorticatulum: stereocaulonCorticatulum,
        });
      }
    }
  );
};

const deleteStereocaulonCorticatulum = async (req, res, next) => {
  const id = req.params.stereocaulonCorticatulumId;
  try {
    await StereocaulonCorticatulum.deleteOne({ _id: id });
    res.status(200).json({ message: "StereocaulonCorticatulum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulonCorticatulum,
  getAllStereocaulonCorticatulums,
  addStereocaulonCorticatulum,
  deleteStereocaulonCorticatulum,
  updateStereocaulonCorticatulum,
};