const Stereocaulon = require("../../models/lichMDb/StereocaulonModel.js");
const mongoose = require("mongoose");

const addStereocaulon = async (req, res, next) => {
  const stereocaulon = new Stereocaulon({
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
    await stereocaulon.save();
    res.status(201).json(stereocaulon);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneStereocaulon = async (req, res, next) => {
  const id = req.params.stereocaulonId;
  try {
    const stereocaulon = await Stereocaulon.findById(id);
    res.status(200).json(stereocaulon);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStereocaulons = async (req, res, next) => {
  try {
    const stereocaulons = await Stereocaulon.find({});
    res.status(200).json(stereocaulons);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateStereocaulon = async (req, res, next) => {
  const id = req.params.stereocaulonId;
  mongoose.set("useFindAndModify", false);
  Stereocaulon.findByIdAndUpdate(
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
    function (err, stereocaulon) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Stereocaulon updated successfully",
          stereocaulon: stereocaulon,
        });
      }
    }
  );
};

const deleteStereocaulon = async (req, res, next) => {
  const id = req.params.stereocaulonId;
  try {
    await Stereocaulon.deleteOne({ _id: id });
    res.status(200).json({ message: "Stereocaulon deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneStereocaulon,
  getAllStereocaulons,
  addStereocaulon,
  deleteStereocaulon,
  updateStereocaulon,
};