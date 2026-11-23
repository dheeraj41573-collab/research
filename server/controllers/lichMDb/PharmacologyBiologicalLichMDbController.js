const PharmacologyBiologicalLichMDb = require("../../models/lichMDb/PharmacologyBiologicalLichMDbModel.js");
const mongoose = require("mongoose");

const getOnePharmacologyLichMDb = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiologicalLichMDb.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyLichMDbs = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyBiologicalLichMDb.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addPharmacologyLichMDb = async (req, res, next) => {
  const pharmacology = new PharmacologyBiologicalLichMDb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    compoundName: req.body.compoundName,
    cid: req.body.cid,
    pharmacologyActivity:req.body.pharmacologyActivity
  });

  try {
    await pharmacology.save();
    res.status(201).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deletePharmacologyLichMDb = async (req, res, next) => {
  const id = req.params.pharmacologyLichMDbId;
  try {
    await PharmacologyBiologicalLichMDb.deleteOne({ _id: id });
    res.status(200).json({ message: "Pharmacology Biological deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyLichMDb = async (req, res, next) => {
  const id = req.params.pharmacologyLichMDbId;
  mongoose.set('useFindAndModify', false);
  PharmacologyBiologicalLichMDb.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      compoundName: req.body.compoundName,
      cid: req.body.cid,
      pharmacologyActivity:req.body.pharmacologyActivity
    },
    function (err, pharmacology) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Pharmacology Biological updated successfully", pharmacology });
      }
    }
  );
};

module.exports = {
  getOnePharmacologyLichMDb,
  getAllPharmacologyLichMDbs,
  addPharmacologyLichMDb,
  deletePharmacologyLichMDb,
  updatePharmacologyLichMDb,
};
