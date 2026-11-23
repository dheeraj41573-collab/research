const UmbilicariaProboscidea = require("../../models/lichMDb/UmbilicariaProboscideaModel.js");
const mongoose = require("mongoose");

const addUmbilicariaProboscidea = async (req, res, next) => {
  const umbilicariaProboscidea = new UmbilicariaProboscidea({
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
    await umbilicariaProboscidea.save();
    res.status(201).json(umbilicariaProboscidea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneUmbilicariaProboscidea = async (req, res, next) => {
  const id = req.params.umbilicariaProboscideaId;
  try {
    const umbilicariaProboscidea = await UmbilicariaProboscidea.findById(id);
    res.status(200).json(umbilicariaProboscidea);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUmbilicariaProboscideas = async (req, res, next) => {
  try {
    const umbilicariaProboscideas = await UmbilicariaProboscidea.find({});
    res.status(200).json(umbilicariaProboscideas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateUmbilicariaProboscidea = async (req, res, next) => {
  const id = req.params.umbilicariaProboscideaId;
  mongoose.set("useFindAndModify", false);
  UmbilicariaProboscidea.findByIdAndUpdate(
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
    function (err, umbilicariaProboscidea) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "UmbilicariaProboscidea updated successfully",
          umbilicariaProboscidea: umbilicariaProboscidea,
        });
      }
    }
  );
};

const deleteUmbilicariaProboscidea = async (req, res, next) => {
  const id = req.params.umbilicariaProboscideaId;
  try {
    await UmbilicariaProboscidea.deleteOne({ _id: id });
    res.status(200).json({ message: "UmbilicariaProboscidea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneUmbilicariaProboscidea,
  getAllUmbilicariaProboscideas,
  addUmbilicariaProboscidea,
  deleteUmbilicariaProboscidea,
  updateUmbilicariaProboscidea,
};