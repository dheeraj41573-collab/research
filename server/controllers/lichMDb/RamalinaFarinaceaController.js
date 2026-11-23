const RamalinaFarinacea = require("../../models/lichMDb/RamalinaFarinaceaModel.js");
const mongoose = require("mongoose");

const addRamalinaFarinacea = async (req, res, next) => {
  const ramalinaFarinacea = new RamalinaFarinacea({
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
    await ramalinaFarinacea.save();
    res.status(201).json(ramalinaFarinacea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneRamalinaFarinacea = async (req, res, next) => {
  const id = req.params.ramalinaFarinaceaId;
  try {
    const ramalinaFarinacea = await RamalinaFarinacea.findById(id);
    res.status(200).json(ramalinaFarinacea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRamalinaFarinaceas = async (req, res, next) => {
  try {
    const ramalinaFarinaceas = await RamalinaFarinacea.find({});
    res.status(200).json(ramalinaFarinaceas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateRamalinaFarinacea = async (req, res, next) => {
  const id = req.params.ramalinaFarinaceaId;
  mongoose.set("useFindAndModify", false);
  RamalinaFarinacea.findByIdAndUpdate(
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
    function (err, ramalinaFarinacea) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "RamalinaFarinacea updated successfully",
          ramalinaFarinacea: ramalinaFarinacea,
        });
      }
    }
  );
};

const deleteRamalinaFarinacea = async (req, res, next) => {
  const id = req.params.ramalinaFarinaceaId;
  try {
    await RamalinaFarinacea.deleteOne({ _id: id });
    res.status(200).json({ message: "RamalinaFarinacea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRamalinaFarinacea,
  getAllRamalinaFarinaceas,
  addRamalinaFarinacea,
  deleteRamalinaFarinacea,
  updateRamalinaFarinacea,
};