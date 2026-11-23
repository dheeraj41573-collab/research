const Ochrolechia = require("../../models/lichMDb/OchrolechiaModel.js");
const mongoose = require("mongoose");

const addOchrolechia = async (req, res, next) => {
  const ochrolechia = new Ochrolechia({
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
    await ochrolechia.save();
    res.status(201).json(ochrolechia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneOchrolechia = async (req, res, next) => {
  const id = req.params.ochrolechiaId;
  try {
    const ochrolechia = await Ochrolechia.findById(id);
    res.status(200).json(ochrolechia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllOchrolechias = async (req, res, next) => {
  try {
    const ochrolechias = await Ochrolechia.find({});
    res.status(200).json(ochrolechias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateOchrolechia = async (req, res, next) => {
  const id = req.params.ochrolechiaId;
  mongoose.set("useFindAndModify", false);
  Ochrolechia.findByIdAndUpdate(
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
    function (err, ochrolechia) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Ochrolechia updated successfully",
          ochrolechia: ochrolechia,
        });
      }
    }
  );
};

const deleteOchrolechia = async (req, res, next) => {
  const id = req.params.ochrolechiaId;
  try {
    await Ochrolechia.deleteOne({ _id: id });
    res.status(200).json({ message: "Ochrolechia deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneOchrolechia,
  getAllOchrolechias,
  addOchrolechia,
  deleteOchrolechia,
  updateOchrolechia,
};