const XanthoparmeliaCompetita = require("../../models/lichMDb/XanthoparmeliaCompetitaModel");
const mongoose = require("mongoose");

const addXanthoparmeliaCompetita = async (req, res, next) => {
  const XanthoparmeliaCompetita = new XanthoparmeliaCompetita({
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
    await XanthoparmeliaCompetita.save();
    res.status(201).json(XanthoparmeliaCompetita);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneXanthoparmeliaCompetita = async (req, res, next) => {
  const id = req.params.xanthoparmeliaCompetitaId;
  try {
    const XanthoparmeliaCompetita = await XanthoparmeliaCompetita.findById(id);
    res.status(200).json(XanthoparmeliaCompetita);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllXanthoparmeliaCompetita = async (req, res, next) => {
  try {
    const xanthoparmeliaCamtschadaliss = await XanthoparmeliaCompetita.find({});
    res.status(200).json(xanthoparmeliaCamtschadaliss);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateXanthoparmeliaCompetita = async (req, res, next) => {
  const id = req.params.xanthoparmeliaCompetitaId;
  mongoose.set("useFindAndModify", false);
  XanthoparmeliaCompetita.findByIdAndUpdate(
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
    function (err, XanthoparmeliaCompetita) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "XanthoparmeliaCompetita updated successfully",
          XanthoparmeliaCompetita: XanthoparmeliaCompetita,
        });
      }
    }
  );
};

const deleteXanthoparmeliaCompetita = async (req, res, next) => {
  const id = req.params.xanthoparmeliaCompetitaId;
  try {
    await XanthoparmeliaCompetita.deleteOne({ _id: id });
    res.status(200).json({ message: "XanthoparmeliaCompetita deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneXanthoparmeliaCompetita,
  getAllXanthoparmeliaCompetita,
  addXanthoparmeliaCompetita,
  deleteXanthoparmeliaCompetita,
  updateXanthoparmeliaCompetita,
};