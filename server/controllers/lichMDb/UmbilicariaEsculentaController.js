const UmbilicariaEsculenta = require("../../models/lichMDb/UmbilicariaEsculentaModel.js");
const mongoose = require("mongoose");

const addUmbilicariaEsculenta = async (req, res, next) => {
  const umbilicariaEsculenta = new UmbilicariaEsculenta({
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
    await umbilicariaEsculenta.save();
    res.status(201).json(umbilicariaEsculenta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaEsculenta = async (req, res, next) => {
  const id = req.params.umbilicariaEsculentaId;
  try {
    const umbilicariaEsculenta = await UmbilicariaEsculenta.findById(id);
    res.status(200).json(umbilicariaEsculenta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaEsculentas = async (req, res, next) => {
  try {
    const umbilicariaEsculentas = await UmbilicariaEsculenta.find({});
    res.status(200).json(umbilicariaEsculentas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaEsculenta = async (req, res, next) => {
  const id = req.params.umbilicariaEsculentaId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaEsculenta.findByIdAndUpdate(
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
    function (err, umbilicariaEsculenta) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaEsculenta updated successfully",
          umbilicariaEsculenta: umbilicariaEsculenta,
        });
      }
    }
  );
};

const deleteUmbilicariaEsculenta = async (req, res, next) => {
  const id = req.params.umbilicariaEsculentaId;
  try {
    await UmbilicariaEsculenta.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaEsculenta deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaEsculenta,
  getAllUmbilicariaEsculentas,
  addUmbilicariaEsculenta,
  deleteUmbilicariaEsculenta,
  updateUmbilicariaEsculenta,
};