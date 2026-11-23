import { useState, useEffect } from "react";
import { exportToCSV, CSVDownloadButton } from "../../components/DownloadWithEmail";

export default function ADMEpassPostTrichoderma() {
  const [adme, setADME] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = adme.slice(firstIndex, lastIndex);
  const npage = Math.ceil(adme.length / recordsPerPage)
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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/trichoderma/ADMEpass/`).then((result) => {
      result.json().then((resp) => {
        const sortedData = resp.sort((a, b) => a.sn - b.sn);
        setADME(sortedData);
      });
    });
  }, []);

  const admeColumns = [
    { label: "S.No", key: "sNo" },
    { label: "PubChem ID", key: "pubchemID" },
    { label: "Common Name", key: "commonName" },
    { label: "Canonical SMILES", key: "canonical" },
    { label: "Formula", key: "formula" },
    { label: "MW", key: "mW" },
    { label: "#Heavy atoms", key: "heavyaton" },
    { label: "#Aromatic heavy atoms", key: "aromaticHeavyAtoms" },
    { label: "Fraction Csp3", key: "fractionCsp3" },
    { label: "Rotatable bonds", key: "rotatablebonds" },
    { label: "#H-bond acceptors", key: "hbondacceptors" },
    { label: "#H-bond donors", key: "hbonddonors" },
    { label: "MR", key: "mR" },
    { label: "TPSA", key: "tPSA" },
    { label: "iLOGP", key: "iLOGP" },
    { label: "xLOGP3", key: "xLOGP3" },
    { label: "WLOGP", key: "wLOGP" },
    { label: "MLOGP", key: "mLOGP" },
    { label: "Silicos-IT Log P", key: "SilicosITLogP" },
    { label: "Consensus Log P", key: "ConsensusLogP" },
    { label: "ESOL Log S", key: "ESOLLogS" },
    { label: "ESOL Solubility (mg/ml)", key: "ESOLSolubilityMG" },
    { label: "ESOL Solubility (mol/l)", key: "ESOLSolubilityMOL" },
    { label: "ESOL Class", key: "ESOLClass" },
    { label: "Ali Log S", key: "AliLogS" },
    { label: "Ali Solubility (mg/ml)", key: "AliSolubilityMG" },
    { label: "Ali Solubility (mol/l)", key: "AliSolubilitydMOL" },
    { label: "Ali Class", key: "AliClass" },
    { label: "Silicos-IT LogSw", key: "SilicosITLogSw" },
    { label: "Silicos-IT Solubility (mg/ml)", key: "SilicosITSolubilityMG" },
    { label: "Silicos-IT Solubility (mol/l)", key: "SilicosITSolubilityMOL" },
    { label: "Silicos-IT Class", key: "SilicosITClass" },
    { label: "GI absorption", key: "GIabsorption" },
    { label: "BBB permeant", key: "BBBpermeant" },
    { label: "Pgp substrate", key: "Pgpsubstrate" },
    { label: "CYP1A2 inhibitor", key: "CYP1A2inhibitor" },
    { label: "CYP2C19 inhibitor", key: "CYP2C19inhibitor" },
    { label: "CYP2C9 inhibitor", key: "CYP2C9inhibitor" },
    { label: "CYP2D6 inhibitor", key: "CYP2D6inhibitorl" },
    { label: "CYP3A4 inhibitor", key: "CYP3A4inhibitor" },
    { label: "Log Kp", key: "logKp" },
    { label: "Lipinski violations", key: "Lipinskiviolations" },
    { label: "Ghose violations", key: "Ghoseviolations" },
    { label: "Veber violations", key: "Veberviolations" },
    { label: "Egan violations", key: "Eganviolations" },
    { label: "Muegge violations", key: "Mueggeviolations" },
    { label: "Bioavailability Score", key: "BioavailabilityScore" },
    { label: "PAINS alerts", key: "PAINSalerts" },
    { label: "Brenk alerts", key: "Brenkalerts" },
    { label: "Lead-likeness violations", key: "Leadlikenessviolations" },
    { label: "Synthetic Accessibility", key: "SyntheticAccessibility" },
  ];
  const handleDownloadCSV = () => exportToCSV(admeColumns, adme, "Trichoderma_ADMEpass.csv");

  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-24 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">ADME - favorable drug leads from <i>Trichoderma</i> Metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
            <h3 className="text-xl font-bold">Data Table</h3>
            <div className="flex flex-wrap items-center gap-3">
              <CSVDownloadButton onClick={handleDownloadCSV} disabled={adme.length === 0} />
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
          </div>
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-black-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">PubChem ID</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Common Name</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Canonical SMILES</th>
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
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">WLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">MLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Log P</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Consensus Log P</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Log S</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Log S</th>
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
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Log Kp</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lipinski violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ghose violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Veber violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Egan violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Muegge violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Bioavailability Score</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">PAINS alerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Brenk alerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lead-likeness violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Synthetic Accessibility</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{numCol + index}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.pubchemID}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.commonName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.canonical}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.formula}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.mW}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.heavyaton}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.aromaticHeavyAtoms}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.fractionCsp3}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.rotatablebonds}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.hbondacceptors}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.hbonddonors}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.mR}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.tPSA}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.iLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.xLOGP3}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.wLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.mLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITLogP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.ConsensusLogP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.ESOLLogS}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.ESOLSolubilityMG}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.ESOLSolubilityMOL}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.ESOLClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.AliLogS}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.AliSolubilityMG}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.AliSolubilitydMOL}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.AliClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITLogSw}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITSolubilityMG}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITSolubilityMOL}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.GIabsorption}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.BBBpermeant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Pgpsubstrate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.CYP1A2inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.CYP2C19inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.CYP2C9inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.CYP2D6inhibitorl}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.CYP3A4inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.logKp}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Lipinskiviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Ghoseviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Veberviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Eganviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Mueggeviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.BioavailabilityScore}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.PAINSalerts}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Brenkalerts}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.Leadlikenessviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.SyntheticAccessibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-700">
              Showing {numCol} to {numColPage} of {adme.length} entries
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prev}
                disabled={active === 1}
                className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-sm text-gray-700">
                Page {active} of {npage}
              </span>
              <button
                onClick={next}
                disabled={active === npage}
                className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block pt-24 px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">ADME - favorable drug leads from <i>Trichoderma</i> Metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex flex-wrap items-center gap-4">
              <CSVDownloadButton onClick={handleDownloadCSV} disabled={adme.length === 0} />
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Show:</label>
                <select value={recordsPerPage} onChange={(e)=>handlePageSizeChange(e.target.value)} className="border border-gray-300 rounded px-3 py-2">
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">PubChem ID</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Common Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Canonical SMILES</th>
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
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">WLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">MLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Silicos-IT Log P</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Consensus Log P</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Log S</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">ESOL Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ali Log S</th>
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
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Log Kp</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lipinski violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Ghose violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Veber violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Egan violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Muegge violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Bioavailability Score</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">PAINS alerts</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Brenk alerts</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lead-likeness violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Synthetic Accessibility</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{numCol + index}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.pubchemID}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.commonName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.canonical}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.formula}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.mW}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.heavyaton}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.aromaticHeavyAtoms}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.fractionCsp3}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.rotatablebonds}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.hbondacceptors}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.hbonddonors}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.mR}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.tPSA}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.iLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.xLOGP3}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.wLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.mLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITLogP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.ConsensusLogP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.ESOLLogS}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.ESOLSolubilityMG}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.ESOLSolubilityMOL}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.ESOLClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.AliLogS}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.AliSolubilityMG}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.AliSolubilitydMOL}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.AliClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITLogSw}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITSolubilityMG}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITSolubilityMOL}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.SilicosITClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.GIabsorption}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.BBBpermeant}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Pgpsubstrate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.CYP1A2inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.CYP2C19inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.CYP2C9inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.CYP2D6inhibitorl}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.CYP3A4inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.logKp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Lipinskiviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Ghoseviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Veberviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Eganviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Mueggeviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.BioavailabilityScore}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.PAINSalerts}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Brenkalerts}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.Leadlikenessviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.SyntheticAccessibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-700">
              Showing {numCol} to {numColPage} of {adme.length} entries
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prev}
                disabled={active === 1}
                className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-sm text-gray-700">
                Page {active} of {npage}
              </span>
              <button
                onClick={next}
                disabled={active === npage}
                className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
