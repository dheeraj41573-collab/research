import { useState, useEffect } from "react";

export default function ADMEpassPostFMDB() {
  const [adme, setADME] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = adme.slice(firstIndex, lastIndex);
  const npage = Math.ceil(adme.length / recordsPerPage);
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, adme.length);

  const next = () => {
    if (active === npage) return;
    setActive(active + 1);
  };
  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const handlePageSizeChange = (newSize) => {
    setRecordsPerPage(Number(newSize));
    setActive(1);
  };

  const sanitize = (v) => {
    if (v === undefined || v === null) return "";
    let s = typeof v === "string" ? v : String(v);
    s = s.replace(/\u0000/g, "");
    s = s.replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
    s = s.replace(/[\r\n]+/g, " ");
    return s.trim();
  };

  useEffect(() => {
    const base = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");
    const url = `${base}/api/fmdb/ADMEpass`;
    fetch(url)
      .then((result) => result.json())
      .then((resp) => {
        const rows = Array.isArray(resp) ? resp : (Array.isArray(resp?.data) ? resp.data : []);
        const normalized = rows.map((row) => ({
          sn: row.sn ?? row.sn,
          CID: sanitize(row.CID ?? row.cid ?? row.PubChemCID),
          CompoundName: sanitize(row.CompoundName ?? row.CompoundName),
          CanonicalSmiles: sanitize(row.CanonicalSmiles ?? row.CanonicalSmiles),
          formula: sanitize(row.formula ?? row.Formula),
          mW: sanitize(row.mW ?? row.MW),
          heavyaton: sanitize(row.heavyaton ?? row.HeavyAtoms),
          aromaticHeavyAtoms: sanitize(row.aromaticHeavyAtoms ?? row.AromaticHeavyAtoms),
          fractionCsp3: sanitize(row.fractionCsp3 ?? row.FractionCsp ?? row.FractionCsp3),
          rotatablebonds: sanitize(row.rotatablebonds ?? row.RotatableBonds),
          hbondacceptors: sanitize(row.hbondacceptors ?? row.HbondAcceptors),
          hbonddonors: sanitize(row.hbonddonors ?? row.HbondDonors),
          mR: sanitize(row.mR ?? row.MR),
          tPSA: sanitize(row.tPSA ?? row.TPSA),
          iLOGP: sanitize(row.iLOGP ?? row.iLOGP),
          xLOGP3: sanitize(row.xLOGP3 ?? row.XLOGP3),
          wLOGP: sanitize(row.wLOGP ?? row.WLOGP),
          mLOGP: sanitize(row.mLOGP ?? row.MLOGP),
          SilicosITLogP: sanitize(row.SilicosITLogP ?? row["SilicosITLog P"]),
          ConsensusLogP: sanitize(row.ConsensusLogP ?? row.ConsensusLogP),
          ESOLLogS: sanitize(row.ESOLLogS ?? row.ESOLLogS),
          ESOLSolubilityMg: sanitize(row.ESOLSolubilityMg ?? row.ESOLSolubilityMGML),
          ESOLSolubilityMol: sanitize(row.ESOLSolubilityMol ?? row.ESOLSolubilityMolL),
          ESOLClass: sanitize(row.ESOLClass ?? row.ESOLClass),
          AliLogS: sanitize(row.AliLogS ?? row.AliLogS),
          AliSolubilityMg: sanitize(row.AliSolubilityMg ?? row.AliSolubilityMGML),
          AliSolubilityMol: sanitize(row.AliSolubilityMol ?? row.AliSolubilityMolL),
          AliClass: sanitize(row.AliClass ?? row.AliClass),
          SilicosITLogSw: sanitize(row.SilicosITLogSw ?? row.SilicosITLogSw),
          SilicosITSolubilityMg: sanitize(row.SilicosITSolubilityMg ?? row.SilicosITSolubilityMGML),
          SilicosITSolubilityMol: sanitize(row.SilicosITSolubilityMol ?? row.SilicosITSolubilityMolL),
          SilicosITclass: sanitize(row.SilicosITclass ?? row.SilicosITclass),
          GIabsorption: sanitize(row.GIabsorption ?? row.GIAbsorption),
          BBBpermeant: sanitize(row.BBBpermeant ?? row.BBBPermeant),
          Pgpsubstrate: sanitize(row.Pgpsubstrate ?? row.PgpSubstrate),
          CYP1A2inhibitor: sanitize(row.CYP1A2inhibitor ?? row.CYP1A2Inhibitor),
          CYP2C19inhibitor: sanitize(row.CYP2C19inhibitor ?? row.CYP2C19Inhibitor),
          CYP2C9inhibitor: sanitize(row.CYP2C9inhibitor ?? row.CYP2C9Inhibitor),
          CYP2D6inhibitor: sanitize(row.CYP2D6inhibitorl ?? row.CYP2D6Inhibitor),
          CYP3A4inhibitor: sanitize(row.CYP3A4inhibitor ?? row.CYP3A4Inhibitor),
          logKpCm: sanitize(row.logKpCm ?? row.logKpCm),
          LipinskiViolations: sanitize(row.LipinskiViolations ?? row.LipinskiViolations),
          GhoseViolations: sanitize(row.GhoseViolations ?? row.GhoseViolations),
          VeberViolations: sanitize(row.VeberViolations ?? row.VeberViolations),
          EganViolations: sanitize(row.EganViolations ?? row.EganViolations),
          MueggeViolations: sanitize(row.MueggeViolations ?? row.MueggeViolations),
          BioavailabilityScore: sanitize(row.BioavailabilityScore ?? row.BioavailabilityScore),
          PAINSalerts: sanitize(row.PAINSalerts ?? row.PAINSAlerts),
          Brenkalerts: sanitize(row.Brenkalerts ?? row.BrenkAlerts),
          Leadlikenessviolations: sanitize(row.Leadlikenessviolations ?? row.LeadlikenessViolations),
          SyntheticAccessibility: sanitize(row.SyntheticAccessibility ?? row.SyntheticAccessibility),
        }));
        const sortedData = normalized.sort((a, b) => (Number(a.sn) || 0) - (Number(b.sn) || 0));
        setADME(sortedData);
      })
      .catch(() => {
        setADME([]);
      });
  }, []);

  return (
    <>
      <div className="lg:hidden pt-24 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">ADME - favorable drug leads from fruits metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Data Table</h3>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select value={recordsPerPage} onChange={(e)=>handlePageSizeChange(e.target.value)} className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
          </div>
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }} onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }} onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CID</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Compound Name</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Canonical Smiles</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Formula</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">MW</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#Heavy atoms</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#Aromatic heavy atoms</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Fraction Csp3</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Rotatable bonds</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#H-bond acceptors</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#H-bond donors</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">MR</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">TPSA</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">iLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">xLOGP3</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">wLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">mLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT LogP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Consensus LogP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL LogS</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali LogS</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT LogSw</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">GI absorption</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">BBB permeant</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Pgp substrate</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP1A2 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP2C19 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP2C9 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP2D6 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP3A4 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">logKpCm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lipinski Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ghose Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Veber Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Egan Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Muegge Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Bioavailability Score</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">PAIN Salerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Brenkalerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Leadlikeness #violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Synthetic Accessibility</th>
                </tr>
              </thead>
              <tbody>
                {records.map((admePass, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndex + i + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CID}</td>
                    <th className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CompoundName}</th>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CanonicalSmiles}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.formula}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.mW}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.heavyaton}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.aromaticHeavyAtoms}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.fractionCsp3}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.rotatablebonds}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.hbondacceptors}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.hbonddonors}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.mR}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.tPSA}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.iLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.xLOGP3}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.wLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.mLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITLogP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.ConsensusLogP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLLogS}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLSolubilityMg}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLSolubilityMol}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.AliLogS}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.AliSolubilityMg}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.AliSolubilityMol}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.AliClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITLogSw}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITSolubilityMg}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITSolubilityMol}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITclass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.GIabsorption}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.BBBpermeant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.Pgpsubstrate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CYP1A2inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CYP2C19inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CYP2C9inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CYP2D6inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.CYP3A4inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.logKpCm}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.LipinskiViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.GhoseViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.VeberViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.EganViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.MueggeViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.BioavailabilityScore}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.PAINSalerts}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.Brenkalerts}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.Leadlikenessviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{admePass.SyntheticAccessibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
              <div className="text-center">
                <span className="text-sm text-gray-700 font-medium">Showing {numCol} to {numColPage} of {adme.length} records</span>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={prev} disabled={active === 1} className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-black-600 rounded hover:bg-black-700 disabled:opacity-50 disabled:cursor-not-allowed">&lt;</button>
                <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded">Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span></span>
                <button onClick={next} disabled={active === npage} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&gt;</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:block pt-32 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">ADME - favorable drug leads from fruits metabolites</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select value={recordsPerPage} onChange={(e)=>handlePageSizeChange(e.target.value)} className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
          </div>
          <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }} onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }} onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CID</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Compound Name</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Canonical Smiles</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Formula</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">MW</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#Heavy atoms</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#Aromatic heavy atoms</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Fraction Csp3</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Rotatable bonds</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#H-bond acceptors</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">#H-bond donors</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">MR</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">TPSA</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">iLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">xLOGP3</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">wLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">mLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT LogP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Consensus LogP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL LogS</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali LogS</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT LogSw</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">GI absorption</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">BBB permeant</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Pgp substrate</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP1A2 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP2C19 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP2C9 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP2D6 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">CYP3A4 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">logKpCm</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lipinski Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ghose Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Veber Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Egan Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Muegge Violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Bioavailability Score</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">PAIN Salerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Brenkalerts</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Leadlikeness #violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Synthetic Accessibility</th>
                </tr>
              </thead>
              <tbody>
                {records.map((admePass, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndex + i + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CID}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CompoundName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CanonicalSmiles}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.formula}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.mW}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.heavyaton}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.aromaticHeavyAtoms}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.fractionCsp3}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.rotatablebonds}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.hbondacceptors}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.hbonddonors}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.mR}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.tPSA}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.iLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.xLOGP3}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.wLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.mLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITLogP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.ConsensusLogP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLLogS}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLSolubilityMg}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLSolubilityMol}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.ESOLClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.AliLogS}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.AliSolubilityMg}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.AliSolubilityMol}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.AliClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITLogSw}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITSolubilityMg}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITSolubilityMol}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.SilicosITclass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.GIabsorption}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.BBBpermeant}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.Pgpsubstrate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CYP1A2inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CYP2C19inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CYP2C9inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CYP2D6inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.CYP3A4inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{admePass.logKpCm}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.LipinskiViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.GhoseViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.VeberViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.EganViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.MueggeViolations}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.BioavailabilityScore}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.PAINSalerts}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.Brenkalerts}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">{admePass.Leadlikenessviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{admePass.SyntheticAccessibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
              <div className="text-center">
                <span className="text-base text-gray-700 font-medium">Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{numColPage}</span> of <span className="text-black-600 font-bold">{adme.length}</span> records</span>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={prev} disabled={active === 1} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&lt;</button>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg">Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span></span>
                <button onClick={next} disabled={active === npage} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&gt;</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
