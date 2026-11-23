const StereocaulonJaponicum = require("../../models/lichMDb/StereocaulonJaponicumModel.js");
const mongoose = require("mongoose");

const addStereocaulonJaponicum = async (req, res, next) => {
  const stereocaulonJaponicum = new StereocaulonJaponicum({
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
    await stereocaulonJaponicum.save();
    res.status(201).json(stereocaulonJaponicum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulonJaponicum = async (req, res, next) => {
  const id = req.params.stereocaulonJaponicumId;
  try {
    const stereocaulonJaponicum = await StereocaulonJaponicum.findById(id);
    res.status(200).json(stereocaulonJaponicum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulonJaponicums = async (req, res, next) => {
  try {
    const stereocaulonJaponicums = await StereocaulonJaponicum.find({});
    res.status(200).json(stereocaulonJaponicums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulonJaponicum = async (req, res, next) => {
  const id = req.params.stereocaulonJaponicumId;
  mongoose.set("useFindAndModify", false);
  StereocaulonJaponicum.findByIdAndUpdate(
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
    function (err, stereocaulonJaponicum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "StereocaulonJaponicum updated successfully",
          stereocaulonJaponicum: stereocaulonJaponicum,
        });
      }
    }
  );
};

const deleteStereocaulonJaponicum = async (req, res, next) => {
  const id = req.params.stereocaulonJaponicumId;
  try {
    await StereocaulonJaponicum.deleteOne({ _id: id });
    res.status(200).json({ message: "StereocaulonJaponicum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulonJaponicum,
  getAllStereocaulonJaponicums,
  addStereocaulonJaponicum,
  deleteStereocaulonJaponicum,
  updateStereocaulonJaponicum,
};