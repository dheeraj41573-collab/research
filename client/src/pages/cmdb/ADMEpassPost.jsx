import { useState, useEffect } from "react";
import useDownloadWithEmail from "../../hooks/useDownloadWithEmail";
import EmailDownloadModal, { DownloadButton, RowRangeInputs } from "../../components/DownloadWithEmail";

const ADME_COLUMNS = [
  { header: "S.No", field: "sn" },
  { header: "CID", field: "cid" },
  { header: "Compound Name", field: "compoundName" },
  { header: "Formula", field: "formula" },
  { header: "MW", field: "mW" },
  { header: "#Heavy atoms", field: "heavyaton" },
  { header: "#Aromatic heavy atoms", field: "aromaticHeavyAtoms" },
  { header: "Fraction Csp3", field: "fractionCsp3" },
  { header: "Rotatable bonds", field: "rotatablebonds" },
  { header: "#H-bond acceptors", field: "hbondacceptors" },
  { header: "#H-bond donors", field: "hbonddonors" },
  { header: "MR", field: "mR" },
  { header: "TPSA", field: "tPSA" },
  { header: "iLOGP", field: "iLOGP" },
  { header: "xLOGP3", field: "xLOGP3" },
  { header: "WLOGP", field: "wLOGP" },
  { header: "MLOGP", field: "mLOGP" },
  { header: "Silicos-IT Log P", field: "SilicosITLogP" },
  { header: "Consensus Log P", field: "ConsensusLogP" },
  { header: "ESOL Log S", field: "ESOLLogS" },
  { header: "ESOL Solubility (mg/ml)", field: "ESOLSolubilityMG" },
  { header: "ESOL Solubility (mol/l)", field: "ESOLSolubilityMOL" },
  { header: "ESOL Class", field: "ESOLClass" },
  { header: "Ali Log S", field: "AliLogS" },
  { header: "Ali Solubility (mg/ml)", field: "AliSolubilityMG" },
  { header: "Ali Solubility (mol/l)", field: "AliSolubilitydMOL" },
  { header: "Ali Class", field: "AliClass" },
  { header: "Silicos-IT LogSw", field: "SilicosITLogSw" },
  { header: "Silicos-IT Solubility (mg/ml)", field: "SilicosITSolubilityMG" },
  { header: "Silicos-IT Solubility (mol/l)", field: "SilicosITSolubilityMOL" },
  { header: "Silicos-IT Class", field: "SilicosITclass" },
  { header: "GI absorption", field: "GIabsorption" },
  { header: "BBB permeant", field: "BBBpermeant" },
  { header: "Pgp substrate", field: "Pgpsubstrate" },
  { header: "CYP1A2 inhibitor", field: "CYP1A2inhibitor" },
  { header: "CYP2C19 inhibitor", field: "CYP2C19inhibitor" },
  { header: "CYP2C9 inhibitor", field: "CYP2C9inhibitor" },
  { header: "CYP2D6 inhibitor", field: "CYP2D6inhibitorl" },
  { header: "CYP3A4 inhibitor", field: "CYP3A4inhibitor" },
  { header: "log Kp", field: "logKp" },
  { header: "Lipinski #violations", field: "Lipinskiviolations" },
  { header: "Veber #violations", field: "Veberviolations" },
  { header: "Egan #violations", field: "Eganviolations" },
  { header: "Bioavailability Score", field: "BioavailabilityScore" },
  { header: "PAINS #alerts", field: "PAINSalerts" },
  { header: "Brenk #alerts", field: "Brenkalerts" },
  { header: "Leadlikeness #violations", field: "Leadlikenessviolations" },
  { header: "Synthetic Accessibility", field: "SyntheticAccessibility" },
];

const ADME_COL_WIDTHS = [8,10,30, 14, 10, 14, 14, 14, 14, 14, 14, 10, 10, 10, 10, 10, 10, 16, 16, 14, 22, 22, 14, 14, 22, 22, 14, 16, 22, 22, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 14, 14, 14];

const slug = "cmdb-adme";

export default function ADMEpassPost() {
  const [adme, setADME] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = adme.slice(firstIndex, lastIndex);
  const npage = Math.ceil(adme.length / recordsPerPage)
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, adme.length);

  const dl = useDownloadWithEmail({
    items: adme,
    slug,
    localStorageKey: "cmdb_adme_email",
    slugFieldName: "admeSlug",
    columns: ADME_COLUMNS,
    colWidths: ADME_COL_WIDTHS,
    maxRows: 5,
  });

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
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/ADMEpass/`).then((result) => {
      result.json().then((resp) => {
         const sortedData = resp.sort((a, b) => a.sn - b.sn);
                 setADME(sortedData);
      });
    });
  }, []);

  return (
    <>
      <EmailDownloadModal
        show={dl.showModal}
        onClose={() => dl.setShowModal(false)}
        name={dl.name}
        setName={dl.setName}
        email={dl.email}
        setEmail={dl.setEmail}
        address={dl.address}
        setAddress={dl.setAddress}
        onSubmit={dl.handleSubmit}
      />
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-24 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">ADME - favorable drug leads from cereal metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Data Table</h3>
          </div>
          <div className="flex items-center space-x-2 flex-wrap gap-2 mb-4">
            <RowRangeInputs
              startRow={dl.startRow}
              setStartRow={dl.setStartRow}
              endRow={dl.endRow}
              setEndRow={dl.setEndRow}
              maxRows={dl.maxRows}
              maxRow={adme.length}
            />
            <DownloadButton onClick={dl.handleDownloadClick} />
            <div className="flex items-center space-x-2 ml-auto">
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
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg  " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">S.No</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CID</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Compound Name</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Formula</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">MW</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#Heavy atoms</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#Aromatic heavy atoms</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Fraction Csp3</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Rotatable bonds</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#H-bond acceptors</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#H-bond donors</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">MR</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">TPSA</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">iLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">xLOGP3</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">WLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">MLOGP</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Log P</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Consensus Log P</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Log S</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Log S</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT LogSw</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Solubility (mg/ml)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Solubility (mol/l)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Class</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">GI absorption</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">BBB permeant</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Pgp substrate</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP1A2 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP2C19 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP2C9 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP2D6 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP3A4 inhibitor</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">log Kp</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Lipinski #violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Veber #violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Egan #violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Bioavailability Score</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">PAINS #alerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Brenk #alerts</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Leadlikeness #violations</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600  ">Synthetic Accessibility</th>
                </tr>
              </thead>
              <tbody>
                {records.map((admePass, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.cid}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.compoundName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.formula}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.mW}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.heavyaton}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.aromaticHeavyAtoms}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.fractionCsp3}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.rotatablebonds}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.hbondacceptors}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.hbonddonors}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.mR}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.tPSA}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.iLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.xLOGP3}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.wLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.mLOGP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITLogP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.ConsensusLogP}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLLogS}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLSolubilityMG}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLSolubilityMOL}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliLogS}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliSolubilityMG}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliSolubilitydMOL}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliClass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITLogSw}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITSolubilityMG}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITSolubilityMOL}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITclass}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.GIabsorption}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.BBBpermeant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.Pgpsubstrate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP1A2inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP2C19inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP2C9inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP2D6inhibitorl}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP3A4inhibitor}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.logKp}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.Lipinskiviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.Veberviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.Eganviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.BioavailabilityScore}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.PAINSalerts}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.Brenkalerts}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{admePass.Leadlikenessviolations}</td>
                    <td className="px-4 py-3 text-sm text-gray-900  ">{admePass.SyntheticAccessibility}</td>
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
        <div className="min-h-[20px]"></div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block pt-32 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">ADME - favorable drug leads from cereal metabolites</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <RowRangeInputs
                startRow={dl.startRow}
                setStartRow={dl.setStartRow}
                endRow={dl.endRow}
                setEndRow={dl.setEndRow}
                maxRows={dl.maxRows}
                maxRow={adme.length}
              />
              <DownloadButton onClick={dl.handleDownloadClick} />
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
          <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg  " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">S.No</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CID</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Compound Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Formula</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">MW</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#Heavy atoms</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#Aromatic heavy atoms</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Fraction Csp3</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Rotatable bonds</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#H-bond acceptors</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">#H-bond donors</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">MR</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">TPSA</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">iLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">xLOGP3</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">WLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">MLOGP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Log P</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Consensus Log P</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Log S</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">ESOL Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Log S</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Ali Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT LogSw</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Solubility (mg/ml)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Solubility (mol/l)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Silicos-IT Class</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">GI absorption</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">BBB permeant</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Pgp substrate</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP1A2 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP2C19 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP2C9 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP2D6 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">CYP3A4 inhibitor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">log Kp</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Lipinski #violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Veber #violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Egan #violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Bioavailability Score</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">PAINS #alerts</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Brenk #alerts</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Leadlikeness #violations</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600  ">Synthetic Accessibility</th>
                </tr>
              </thead>
              <tbody>
                {records.map((admePass, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.cid}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.compoundName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.formula}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.mW}</td>
                    <td className="px-6 py-4 text-sm text-sm text-gray-900 border-r border-black-300  ">{admePass.heavyaton}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.aromaticHeavyAtoms}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.fractionCsp3}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.rotatablebonds}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.hbondacceptors}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.hbonddonors}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.mR}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.tPSA}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.iLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.xLOGP3}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.wLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.mLOGP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITLogP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.ConsensusLogP}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLLogS}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLSolubilityMG}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLSolubilityMOL}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.ESOLClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliLogS}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliSolubilityMG}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliSolubilitydMOL}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.AliClass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITLogSw}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITSolubilityMG}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITSolubilityMOL}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.SilicosITclass}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.GIabsorption}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.BBBpermeant}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.Pgpsubstrate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP1A2inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP2C19inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP2C9inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP2D6inhibitorl}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.CYP3A4inhibitor}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.logKp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.Lipinskiviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.Veberviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.Eganviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.BioavailabilityScore}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.PAINSalerts}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.Brenkalerts}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{admePass.Leadlikenessviolations}</td>
                    <td className="px-6 py-4 text-sm text-gray-900  ">{admePass.SyntheticAccessibility}</td>
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
        <div className="min-h-[20px]"></div>
      </div>
    </>
  );
}
