const LethariellaCladonioides = require("../../models/lichMDb/LethariellaCladonioidesModel.js");
const mongoose = require("mongoose");

const addLethariellaCladonioides = async (req, res, next) => {
  const lethariellaCladonioides = new LethariellaCladonioides({
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
    await lethariellaCladonioides.save();
    res.status(201).json(lethariellaCladonioides);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLethariellaCladonioides = async (req, res, next) => {
  const id = req.params.lethariellaCladonioidesId;
  try {
    const lethariellaCladonioides = await LethariellaCladonioides.findById(id);
    res.status(200).json(lethariellaCladonioides);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLethariellaCladonioidess = async (req, res, next) => {
  try {
    const lethariellaCladonioidess = await LethariellaCladonioides.find({});
    res.status(200).json(lethariellaCladonioidess);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLethariellaCladonioides = async (req, res, next) => {
  const id = req.params.lethariellaCladonioidesId;
  mongoose.set("useFindAndModify", false);
  LethariellaCladonioides.findByIdAndUpdate(
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
    function (err, lethariellaCladonioides) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LethariellaCladonioides updated successfully",
          lethariellaCladonioides: lethariellaCladonioides,
        });
      }
    }
  );
};

const deleteLethariellaCladonioides = async (req, res, next) => {
  const id = req.params.lethariellaCladonioidesId;
  try {
    await LethariellaCladonioides.deleteOne({ _id: id });
    res.status(200).json({ message: "LethariellaCladonioides deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLethariellaCladonioides,
  getAllLethariellaCladonioidess,
  addLethariellaCladonioides,
  deleteLethariellaCladonioides,
  updateLethariellaCladonioides,
};