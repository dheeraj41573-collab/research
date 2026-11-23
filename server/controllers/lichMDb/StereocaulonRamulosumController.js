const StereocaulonRamulosum = require("../../models/lichMDb/StereocaulonRamulosumModel.js");
const mongoose = require("mongoose");

const addStereocaulonRamulosum = async (req, res, next) => {
  const stereocaulonRamulosum = new StereocaulonRamulosum({
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
    await stereocaulonRamulosum.save();
    res.status(201).json(stereocaulonRamulosum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulonRamulosum = async (req, res, next) => {
  const id = req.params.stereocaulonRamulosumId;
  try {
    const stereocaulonRamulosum = await StereocaulonRamulosum.findById(id);
    res.status(200).json(stereocaulonRamulosum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulonRamulosums = async (req, res, next) => {
  try {
    const stereocaulonRamulosums = await StereocaulonRamulosum.find({});
    res.status(200).json(stereocaulonRamulosums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulonRamulosum = async (req, res, next) => {
  const id = req.params.stereocaulonRamulosumId;
  mongoose.set("useFindAndModify", false);
  StereocaulonRamulosum.findByIdAndUpdate(
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
    function (err, stereocaulonRamulosum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StereocaulonRamulosum updated successfully",
          stereocaulonRamulosum: stereocaulonRamulosum,
        });
      }
    }
  );
};

const deleteStereocaulonRamulosum = async (req, res, next) => {
  const id = req.params.stereocaulonRamulosumId;
  try {
    await StereocaulonRamulosum.deleteOne({ _id: id });
    res.status(200).json({ message: "StereocaulonRamulosum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulonRamulosum,
  getAllStereocaulonRamulosums,
  addStereocaulonRamulosum,
  deleteStereocaulonRamulosum,
  updateStereocaulonRamulosum,
};