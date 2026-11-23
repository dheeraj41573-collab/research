const ADMEpassFmdb = require("../../models/fmdb/ADMEpassFMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOneADMEpassFmdb = async (req, res) => {
  const id = req.params.ADMEpassId;
  try {
    const admepass = await ADMEpassFmdb.findById(id);
    res.status(200).json(admepass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllADMEpassFmdbs = async (req, res) => {
  try {
    const admepasss = await ADMEpassFmdb.find({});
    res.status(200).json(admepasss);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const normalizeBody = (b) => ({
  sn: b.sn,
  cid: b.cid ?? b.CID ?? b.PubChemCID,
  CompoundName: b.CompoundName ?? b.modecule ?? "",
  canonical: b.canonical ?? b.CanonicalSmiles ?? b.CanonicalSMILES,
  formula: b.formula ?? b.Formula,
  mW: b.mW ?? b.MW,
  heavyaton: b.heavyaton ?? b.HeavyAtoms,
  aromaticHeavyAtoms: String(b.aromaticHeavyAtoms ?? b.AromaticHeavyAtoms ?? ""),
  fractionCsp3: String(b.fractionCsp3 ?? b.FractionCsp ?? b.FractionCsp3 ?? ""),
  rotatablebonds: String(b.rotatablebonds ?? b.RotatableBonds ?? ""),
  hbondacceptors: String(b.hbondacceptors ?? b.HbondAcceptors ?? ""),
  hbonddonors: String(b.hbonddonors ?? b.HbondDonors ?? ""),
  mR: String(b.mR ?? b.MR ?? ""),
  tPSA: String(b.tPSA ?? b.TPSA ?? ""),
  iLOGP: String(b.iLOGP ?? b.iLOGP ?? ""),
  xLOGP3: String(b.xLOGP3 ?? b.XLOGP3 ?? ""),
  wLOGP: String(b.wLOGP ?? b.WLOGP ?? ""),
  mLOGP: String(b.mLOGP ?? b.MLOGP ?? ""),
  SilicosITLogP: String(b.SilicosITLogP ?? b["SilicosITLog P"] ?? ""),
  ConsensusLogP: String(b.ConsensusLogP ?? ""),
  ESOLLogS: String(b.ESOLLogS ?? ""),
  ESOLSolubilityMG: String(b.ESOLSolubilityMG ?? b.ESOLSolubilityMg ?? b.ESOLSolubilityMGML ?? ""),
  ESOLSolubilityMOL: String(b.ESOLSolubilityMOL ?? b.ESOLSolubilityMol ?? b.ESOLSolubilityMolL ?? ""),
  ESOLClass: String(b.ESOLClass ?? ""),
  AliLogS: String(b.AliLogS ?? ""),
  AliSolubilityMG: String(b.AliSolubilityMG ?? b.AliSolubilityMg ?? b.AliSolubilityMGML ?? ""),
  AliSolubilitydMOL: String(b.AliSolubilitydMOL ?? b.AliSolubilityMol ?? b.AliSolubilityMolL ?? ""),
  AliClass: String(b.AliClass ?? ""),
  SilicosITLogSw: String(b.SilicosITLogSw ?? ""),
  SilicosITSolubilityMG: String(b.SilicosITSolubilityMG ?? b.SilicosITSolubilityMg ?? b.SilicosITSolubilityMGML ?? ""),
  SilicosITSolubilityMOL: String(b.SilicosITSolubilityMOL ?? b.SilicosITSolubilityMol ?? b.SilicosITSolubilityMolL ?? ""),
  SilicosITClass: String(b.SilicosITClass ?? b.SilicosITclass ?? ""),
  GIabsorption: String(b.GIabsorption ?? b.GIAbsorption ?? ""),
  BBBpermeant: String(b.BBBpermeant ?? ""),
  Pgpsubstrate: String(b.Pgpsubstrate ?? b.PgpSubstrate ?? ""),
  CYP1A2inhibitor: String(b.CYP1A2inhibitor ?? b.CYP1A2Inhibitor ?? ""),
  CYP2C19inhibitor: String(b.CYP2C19inhibitor ?? b.CYP2C19Inhibitor ?? ""),
  CYP2C9inhibitor: String(b.CYP2C9inhibitor ?? b.CYP2C9Inhibitor ?? ""),
  CYP2D6inhibitorl: String(b.CYP2D6inhibitorl ?? b.CYP2D6Inhibitor ?? ""),
  CYP3A4inhibitor: String(b.CYP3A4inhibitor ?? b.CYP3A4Inhibitor ?? ""),
  logKp: String(b.logKp ?? b.logKpCm ?? ""),
  Lipinskiviolations: String(b.Lipinskiviolations ?? b.LipinskiViolations ?? ""),
  Ghoseviolations: String(b.Ghoseviolations ?? b.GhoseViolations ?? ""),
  Veberviolations: String(b.Veberviolations ?? b.VeberViolations ?? ""),
  Eganviolations: String(b.Eganviolations ?? b.EganViolations ?? ""),
  Mueggeviolations: String(b.Mueggeviolations ?? b.MueggeViolations ?? ""),
  BioavailabilityScore: String(b.BioavailabilityScore ?? ""),
  PAINSalerts: String(b.PAINSalerts ?? b.PAINSAlerts ?? ""),
  Brenkalerts: String(b.Brenkalerts ?? b.BrenkAlerts ?? ""),
  Leadlikenessviolations: String(b.Leadlikenessviolations ?? b.LeadlikenessViolations ?? ""),
  SyntheticAccessibility: String(b.SyntheticAccessibility ?? ""),
});

const addADMEpassFmdb = async (req, res) => {
  const admepass = new ADMEpassFmdb({
    _id: new mongoose.Types.ObjectId(),
    ...normalizeBody(req.body),
  });
  try {
    await admepass.save();
    res.status(201).json(admepass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteADMEpassFmdb = async (req, res) => {
  const id = req.params.ADMEpassId;
  try {
    const admepass = await ADMEpassFmdb.findByIdAndDelete(id);
    res.status(200).json(admepass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateADMEpassFmdb = async (req, res) => {
  const id = req.params.ADMEpassId;
  mongoose.set("useFindAndModify", false);
  ADMEpassFmdb.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ error: err }));
};

const seedADMEpassFmdb = async (req, res) => {
  try {
    const existing = await ADMEpassFmdb.findOne();
    if (existing) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../..", "FMDB", "ADME pass.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = data.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      ...normalizeBody(row),
    }));
    await ADMEpassFmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addADMEpassFmdb,
  getOneADMEpassFmdb,
  getAllADMEpassFmdbs,
  deleteADMEpassFmdb,
  updateADMEpassFmdb,
  seedADMEpassFmdb,
};
