const mongoose = require("mongoose");
const fmdbModels = require("../../models/fmdb");
const getSpeciesData = async (req, res) => {
  const species = req.params.species;
  const Model = fmdbModels[species];
  if (!Model) {
    return res.status(404).json({ error: "Species model not found" });
  }
  try {
    const data = await Model.find({});
    const normalize = (src = {}) => {
      const pick = (...keys) => {
        for (const k of keys) {
          if (src[k] !== undefined && src[k] !== null && String(src[k]).trim() !== "") return src[k];
        }
        return "";
      };
      return {
        sn: src.sn ?? 0,
        ScientificName: pick("ScientificName", "Plant Species", "scientificName", "speciesName"),
        CommonName: pick("CommonName", "Common Name", "Comon Name", "commonName"),
        cid: pick("cid", "PubChemCID", "PubChem CID", "pubchemID", "PubChemID"),
        CompoundName: pick("CompoundName", "Compound Name"),
        IUPACName: pick("IUPACName", "IUPAC Name", "IUPAC_Name", "iupacName"),
        MolecularWeight: pick("MolecularWeight", "Molecular Weight", "molecularWeight"),
        MolecularFormula: pick("MolecularFormula", "Molecular Formula", "molecularFormula"),
        CanonicalSmiles: pick("CanonicalSmiles", "Canonical Smile", "Canonical_Smile", "canonicalSmiles", "canonicalSmile"),
        References: pick("References", "References ", "Reference", "reference"),
      };
    };
    const normalized = (Array.isArray(data) ? data : []).map((doc) => normalize(doc.toObject ? doc.toObject() : doc));
    res.status(200).json(normalized);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSpeciesNames = (req, res) => {
  res.status(200).json(Object.keys(fmdbModels));
};

const addSpeciesData = async (req, res) => {
  const species = req.params.species;
  const Model = fmdbModels[species];
  if (!Model) {
    return res.status(404).json({ error: "Species model not found" });
  }
  try {
    let payload = req.body;
    if (typeof payload === "string") {
      payload = JSON.parse(payload);
    }
    const normalize = (src = {}) => {
      const pick = (...keys) => {
        for (const k of keys) {
          if (src[k] !== undefined && src[k] !== null && String(src[k]).trim() !== "") return src[k];
        }
        return "";
      };
      return {
        _id: new mongoose.Types.ObjectId(),
        sn: src.sn ?? 0,
        ScientificName: pick("ScientificName", "Plant Species", "scientificName", "speciesName"),
        CommonName: pick("CommonName", "Common Name", "Comon Name", "commonName"),
        cid: pick("cid", "PubChemCID", "PubChem CID", "pubchemID", "PubChemID"),
        CompoundName: pick("CompoundName", "Compound Name"),
        IUPACName: pick("IUPACName", "IUPAC Name", "IUPAC_Name", "iupacName"),
        MolecularWeight: pick("MolecularWeight", "Molecular Weight", "molecularWeight"),
        MolecularFormula: pick("MolecularFormula", "Molecular Formula", "molecularFormula"),
        CanonicalSmiles: pick("CanonicalSmiles", "Canonical Smile", "Canonical_Smile", "canonicalSmiles", "canonicalSmile"),
        References: pick("References", "References ", "Reference", "reference"),
      };
    };
    if (payload && Array.isArray(payload)) {
      const docs = payload.map((item) => normalize(item));
      const result = await Model.insertMany(docs);
      return res.status(201).json({ inserted: result.length });
    } else if (payload && typeof payload === "object") {
      const doc = new Model(normalize(payload));
      await doc.save();
      return res.status(201).json(doc);
    } else {
      return res.status(400).json({ error: "Invalid payload format" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Folder-based seeding removed to keep FMDB folder-independent

module.exports = {
  getSpeciesData,
  getAllSpeciesNames,
  addSpeciesData,
};
