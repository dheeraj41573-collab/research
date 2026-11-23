const CladoniaMacilenta = require("../../models/lichMDb/CladoniaMacilentaModel.js");
const mongoose = require("mongoose");

const addCladoniaMacilenta = async (req, res, next) => {
  const cladoniaMacilenta = new CladoniaMacilenta({
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
    await cladoniaMacilenta.save();
    res.status(201).json(cladoniaMacilenta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneCladoniaMacilenta = async (req, res, next) => {
  const id = req.params.cladoniaMacilentaId;
  try {
    const cladoniaMacilenta = await CladoniaMacilenta.findById(id);
    res.status(200).json(cladoniaMacilenta);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCladoniaMacilentas = async (req, res, next) => {
  try {
    const cladoniaMacilentas = await CladoniaMacilenta.find({});
    res.status(200).json(cladoniaMacilentas);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateCladoniaMacilenta = async (req, res, next) => {
  const id = req.params.cladoniaMacilentaId;
  mongoose.set("useFindAndModify", false);
  CladoniaMacilenta.findByIdAndUpdate(
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
    function (err, cladoniaMacilenta) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "CladoniaMacilenta updated successfully",
          cladoniaMacilenta: cladoniaMacilenta,
        });
      }
    }
  );
};

const deleteCladoniaMacilenta = async (req, res, next) => {
  const id = req.params.cladoniaMacilentaId;
  try {
    await CladoniaMacilenta.deleteOne({ _id: id });
    res.status(200).json({ message: "CladoniaMacilenta deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneCladoniaMacilenta,
  getAllCladoniaMacilentas,
  addCladoniaMacilenta,
  deleteCladoniaMacilenta,
  updateCladoniaMacilenta,
};