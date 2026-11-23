const UmbilicariaSpodochroa = require("../../models/lichMDb/UmbilicariaSpodochroaModel.js");
const mongoose = require("mongoose");

const addUmbilicariaSpodochroa = async (req, res, next) => {
  const umbilicariaSpodochroa = new UmbilicariaSpodochroa({
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
    await umbilicariaSpodochroa.save();
    res.status(201).json(umbilicariaSpodochroa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaSpodochroa = async (req, res, next) => {
  const id = req.params.umbilicariaSpodochroaId;
  try {
    const umbilicariaSpodochroa = await UmbilicariaSpodochroa.findById(id);
    res.status(200).json(umbilicariaSpodochroa);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaSpodochroas = async (req, res, next) => {
  try {
    const umbilicariaSpodochroas = await UmbilicariaSpodochroa.find({});
    res.status(200).json(umbilicariaSpodochroas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaSpodochroa = async (req, res, next) => {
  const id = req.params.umbilicariaSpodochroaId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaSpodochroa.findByIdAndUpdate(
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
    function (err, umbilicariaSpodochroa) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaSpodochroa updated successfully",
          umbilicariaSpodochroa: umbilicariaSpodochroa,
        });
      }
    }
  );
};

const deleteUmbilicariaSpodochroa = async (req, res, next) => {
  const id = req.params.umbilicariaSpodochroaId;
  try {
    await UmbilicariaSpodochroa.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaSpodochroa deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaSpodochroa,
  getAllUmbilicariaSpodochroas,
  addUmbilicariaSpodochroa,
  deleteUmbilicariaSpodochroa,
  updateUmbilicariaSpodochroa,
};