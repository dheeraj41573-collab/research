const ADMEpassGmdb = require("../../models/gmdb/ADMEpassGMDBModel.js");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const getOneADMEpassGmdb = async (req, res, next) => {
  const id = req.params.ADMEpassId;
  try {
    const admepass = await ADMEpassGmdb.findById(id);
    res.status(200).json(admepass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllADMEpassGmdbs = async (req, res, next) => {
  try {
    const admepasss = await ADMEpassGmdb.find({});
    res.status(200).json(admepasss);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addADMEpassGmdb = async (req, res, next) => {
  const admepass = new ADMEpassGmdb({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    cid: req.body.cid,
    modecule: req.body.modecule,
    canonical: req.body.canonical,
    formula: req.body.formula,
    mW: req.body.mW,
    heavyaton: req.body.heavyaton,
    aromaticHeavyAtoms: req.body.aromaticHeavyAtoms,
    fractionCsp3: req.body.fractionCsp3,
    rotatablebonds: req.body.rotatablebonds,
    hbondacceptors: req.body.hbondacceptors,
    hbonddonors: req.body.hbonddonors,
    mR: req.body.mR,
    tPSA: req.body.tPSA,
    iLOGP: req.body.iLOGP,
    xLOGP3: req.body.xLOGP3,
    wLOGP: req.body.wLOGP,
    mLOGP: req.body.mLOGP,
    SilicosITLogP: req.body.SilicosITLogP,
    ConsensusLogP: req.body.ConsensusLogP,
    ESOLLogS: req.body.ESOLLogS,
    ESOLSolubilityMG: req.body.ESOLSolubilityMG,
    ESOLSolubilityMOL: req.body.ESOLSolubilityMOL,
    ESOLClass: req.body.ESOLClass,
    AliLogS: req.body.AliLogS,
    AliSolubilityMG: req.body.AliSolubilityMG,
    AliSolubilitydMOL: req.body.AliSolubilitydMOL,
    AliClass: req.body.AliClass,
    SilicosITLogSw: req.body.SilicosITLogSw,
    SilicosITSolubilityMG: req.body.SilicosITSolubilityMG,
    SilicosITSolubilityMOL: req.body.SilicosITSolubilityMOL,
    SilicosITClass: req.body.SilicosITClass,
    GIabsorption: req.body.GIabsorption,
    BBBpermeant: req.body.BBBpermeant,
    Pgpsubstrate: req.body.Pgpsubstrate,
    CYP1A2inhibitor: req.body.CYP1A2inhibitor,
    CYP2C19inhibitor: req.body.CYP2C19inhibitor,
    CYP2C9inhibitor: req.body.CYP2C9inhibitor,
    CYP2D6inhibitorl: req.body.CYP2D6inhibitorl,
    CYP3A4inhibitor: req.body.CYP3A4inhibitor,
    logKp: req.body.logKp,
    Lipinskiviolations: req.body.Lipinskiviolations,
    Ghoseviolations: req.body.Ghoseviolations,
    Veberviolations: req.body.Veberviolations,
    Eganviolations: req.body.Eganviolations,
    Mueggeviolations: req.body.Mueggeviolations,
    BioavailabilityScore: req.body.BioavailabilityScore,
    PAINSalerts: req.body.PAINSalerts,
    Brenkalerts: req.body.Brenkalerts,
    Leadlikenessviolations: req.body.Leadlikenessviolations,
    SyntheticAccessibility: req.body.SyntheticAccessibility,
  });

  try {
    await admepass.save();
    res.status(201).json(admepass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteADMEpassGmdb = async (req, res, next) => {
  const id = req.params.ADMEpassId;
  try {
    const admepass = await ADMEpassGmdb.findByIdAndDelete(id);
    res.status(200).json(admepass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateADMEpassGmdb = async (req, res, next) => {
  const id = req.params.ADMEpassId;
  mongoose.set("useFindAndModify", false);
  ADMEpassGmdb.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const seedADMEpassGmdb = async (req, res) => {
  try {
    const existing = await ADMEpassGmdb.findOne();
    if (existing) {
      return res.status(400).json({ message: "Data already exists" });
    }
    const jsonPath = path.join(__dirname, "../../..", "gmdb", "adme.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const mapped = data.map((row) => ({
      _id: new mongoose.Types.ObjectId(),
      sn: row.sn,
      cid: row.PubChemCID,
      modecule: row.CommonName || "",
      canonical: row.CanonicalSMILES,
      formula: row.Formula,
      mW: row.MW,
      heavyaton: row.HeavyAtoms,
      aromaticHeavyAtoms: String(row.AromaticHeavyAtoms),
      fractionCsp3: String(row.FractionCsp ?? row.FractionCsp3 ?? ""),
      rotatablebonds: String(row.RotatableBonds),
      hbondacceptors: String(row.HbondAcceptors),
      hbonddonors: String(row.HbondDonors),
      mR: String(row.MR),
      tPSA: String(row.TPSA),
      iLOGP: String(row.iLOGP),
      xLOGP3: String(row.XLOGP3),
      wLOGP: String(row.WLOGP),
      mLOGP: String(row.MLOGP),
      SilicosITLogP: String(row["SilicosITLog P"]),
      ConsensusLogP: String(row.ConsensusLogP),
      ESOLLogS: String(row.ESOLLogS),
      ESOLSolubilityMG: String(row.ESOLSolubilityMGML),
      ESOLSolubilityMOL: String(row.ESOLSolubilityMolL),
      ESOLClass: String(row.ESOLClass),
      AliLogS: String(row.AliLogS),
      AliSolubilityMG: String(row.AliSolubilityMGML),
      AliSolubilitydMOL: String(row.AliSolubilityMolL),
      AliClass: String(row.AliClass),
      SilicosITLogSw: String(row.SilicosITLogSw),
      SilicosITSolubilityMG: String(row.SilicosITSolubilityMGML),
      SilicosITSolubilityMOL: String(row.SilicosITSolubilityMolL),
      SilicosITClass: String(row.SilicosITClass),
      GIabsorption: String(row.GIAbsorption),
      BBBpermeant: String(row.BBBPermeant),
      Pgpsubstrate: String(row.PgpSubstrate),
      CYP1A2inhibitor: String(row.CYP1A2Inhibitor),
      CYP2C19inhibitor: String(row.CYP2C19Inhibitor),
      CYP2C9inhibitor: String(row.CYP2C9Inhibitor),
      CYP2D6inhibitorl: String(row.CYP2D6Inhibitor),
      CYP3A4inhibitor: String(row.CYP3A4Inhibitor),
      logKp: String(row.logKp),
      Lipinskiviolations: String(row.LipinskiViolations),
      Ghoseviolations: String(row.GhoseViolations),
      Veberviolations: String(row.VeberViolations),
      Eganviolations: String(row.EganViolations),
      Mueggeviolations: String(row.MueggeViolations),
      BioavailabilityScore: String(row.BioavailabilityScore),
      PAINSalerts: String(row.PAINSAlerts),
      Brenkalerts: String(row.BrenkAlerts),
      Leadlikenessviolations: String(row.LeadlikenessViolations),
      SyntheticAccessibility: String(row.SyntheticAccessibility),
    }));
    await ADMEpassGmdb.insertMany(mapped);
    res.json({ message: "Seeded successfully", count: mapped.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addADMEpassGmdb,
  getOneADMEpassGmdb,
  getAllADMEpassGmdbs,
  deleteADMEpassGmdb,
  updateADMEpassGmdb,
  seedADMEpassGmdb,
};
