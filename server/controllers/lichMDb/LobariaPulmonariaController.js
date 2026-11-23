const LobariaPulmonaria = require("../../models/lichMDb/LobariaPulmonariaModel.js");
const mongoose = require("mongoose");

const addLobariaPulmonaria = async (req, res, next) => {
  const lobariaPulmonaria = new LobariaPulmonaria({
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
    await lobariaPulmonaria.save();
    res.status(201).json(lobariaPulmonaria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneLobariaPulmonaria = async (req, res, next) => {
  const id = req.params.lobariaPulmonariaId;
  try {
    const lobariaPulmonaria = await LobariaPulmonaria.findById(id);
    res.status(200).json(lobariaPulmonaria);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLobariaPulmonarias = async (req, res, next) => {
  try {
    const lobariaPulmonarias = await LobariaPulmonaria.find({});
    res.status(200).json(lobariaPulmonarias);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateLobariaPulmonaria = async (req, res, next) => {
  const id = req.params.lobariaPulmonariaId;
  mongoose.set("useFindAndModify", false);
  LobariaPulmonaria.findByIdAndUpdate(
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
    function (err, lobariaPulmonaria) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "LobariaPulmonaria updated successfully",
          lobariaPulmonaria: lobariaPulmonaria,
        });
      }
    }
  );
};

const deleteLobariaPulmonaria = async (req, res, next) => {
  const id = req.params.lobariaPulmonariaId;
  try {
    await LobariaPulmonaria.deleteOne({ _id: id });
    res.status(200).json({ message: "LobariaPulmonaria deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneLobariaPulmonaria,
  getAllLobariaPulmonarias,
  addLobariaPulmonaria,
  deleteLobariaPulmonaria,
  updateLobariaPulmonaria,
};