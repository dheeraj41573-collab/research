const PharmacologyBiologicalCountingTrichoderma = require("../../models/trichoderma/PharmacologyBiologicalCountingTrichodermaModel.js");
const mongoose = require("mongoose");

const getOnePharmacologyBiologicalCountingTrichoderma = async (req, res) => {
  const id = req.params.PharmacologyBiologicalCountingTrichodermaId;
  try {
    const doc = await PharmacologyBiologicalCountingTrichoderma.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologyBiologicalCountingTrichoderma = async (_req, res) => {
  try {
    const docs = await PharmacologyBiologicalCountingTrichoderma.find({});
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPharmacologyBiologicalCountingTrichoderma = async (req, res) => {
  const doc = new PharmacologyBiologicalCountingTrichoderma({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  try {
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacologyBiologicalCountingTrichoderma = async (req, res) => {
  const id = req.params.PharmacologyBiologicalCountingTrichodermaId;
  mongoose.set("useFindAndModify", false);
  PharmacologyBiologicalCountingTrichoderma.findByIdAndUpdate(
    id,
    req.body,
    function (err, doc) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "PharmacologyBiologicalCountingTrichoderma updated successfully",
          pharmacologyBiologicalCountingTrichoderma: doc,
        });
      }
    }
  );
};

const deletePharmacologyBiologicalCountingTrichoderma = async (req, res) => {
  const id = req.params.PharmacologyBiologicalCountingTrichodermaId;
  try {
    await PharmacologyBiologicalCountingTrichoderma.deleteOne({ _id: id });
    res.status(200).json({ message: "PharmacologyBiologicalCountingTrichoderma deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOnePharmacologyBiologicalCountingTrichoderma,
  getAllPharmacologyBiologicalCountingTrichoderma,
  addPharmacologyBiologicalCountingTrichoderma,
  deletePharmacologyBiologicalCountingTrichoderma,
  updatePharmacologyBiologicalCountingTrichoderma,
};
