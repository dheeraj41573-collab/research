import { useState, useEffect } from "react";
import { exportToCSV, CSVDownloadButton } from "../../components/DownloadWithEmail";

export default function PharmacologicalPlantTrichoderma() {
  const [pharmacology, setPharmacology] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = pharmacology.slice(firstIndex, lastIndex);
  const npage = Math.ceil(pharmacology.length / recordsPerPage);
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, pharmacology.length);

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
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/trichoderma/pharmacologyPlant/`).then((result) => {
      result.json().then((resp) => {
        const sortedData = resp.sort((a, b) => a.sn - b.sn);
        setPharmacology(sortedData);
      });
    });
  }, []);

  // Define all the fields from the model in order
  const fields = [
    "Antifungal ",
    "AntiCancer",
    "Antioxidant",
    "Antiinflammatory",
    "Antiviral",
    "Radical-Scavenging",
    "Gastroprotective",
    "ImmuneModulatory",
    "Cytotoxic",
    "Antimicrobial",
    "StressProtective",
    "Cardioprotective",
    "Neuroprotective",
    "AntiApoptotic",
    "Pharmacokinetics",
    "Antigenotoxic",
    "AntiPlatelet",
    "AntiLarvalSettlement",
    "Diuretic",
    "Antiulcer",
    "Antinociceptive",
    "Anticonvulsant",
    "Antipsychotic",
    "Antidiabetic",
    "Antihistaminic",
    "Antiallergic",
    "Antihypertensive",
    "Antiprotozoal",
    "Hypolipidemic",
    "Hepatoprotective",
    "AntiObesity",
    "Antiatherosclerotic",
    "Antiproliferative",
    "AntiCarcinogenic",
    "AntiAsthmatic",
    "AcneReduction",
    "Moisture-Retentive",
    "AntiMigratory",
    "AntiInvasive",
    "AntiMelanogenesis",
    "Antileishmanial",
    "Phytotoxic",
    "AntiInfluenza",
    "Antifouling",
    "Immunomodulator",
    "Antifeedant",
    "Insecticidal",
    "Antifibrotic",
    "AntiReverseTranscriptase",
    "Antibiosis",
    "ButyrylcholinesteraseInhibition",
    "Antispasmodic",
    "AntiGlycating",
    "Antineoplastic",
    "AntiLipoxygenase",
    "EffluxPumpInhibitory",
    "AlphaGlucosidaseInhibitory"
  ];

  const visibleFields = fields.filter(field => 
    pharmacology.some(item => item[field] && item[field] !== "" && item[field] !== "-")
  );

  const renderItalicized = (text) => {
    if (!text || typeof text !== 'string') return text || '-';
    const parts = text.split(/(\([^)]+\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('(') && part.endsWith(')')) {
        return <span key={index}>(<i>{part.slice(1, -1)}</i>)</span>;
      }
      return part;
    });
  };

  const plantColumns = [{ label: "S.No", key: "sNo" }, ...visibleFields.map((f) => ({ label: f, key: f }))];
  const handleDownloadCSV = () => exportToCSV(plantColumns, pharmacology, "Trichoderma_Pharmacological_Plant.csv");

  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-24 px-4">
       
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
            <h3 className="text-xl font-bold">Data Table</h3>
            <div className="flex flex-wrap items-center gap-3">
              <CSVDownloadButton onClick={handleDownloadCSV} disabled={pharmacology.length === 0} />
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
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  {visibleFields.map((field) => (
                    <th key={field} className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{numCol + index}</td>
                    {visibleFields.map((field) => (
                      <td key={field} className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{renderItalicized(item[field])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-700">
                Showing {numCol} to {numColPage} of {pharmacology.length} records
              </div>
              <div className="flex space-x-2">
                <button onClick={prev} disabled={active === 1} className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">&lt;</button>
                <span className="px-3 py-1 text-sm text-gray-700">Page {active} of {npage}</span>
                <button onClick={next} disabled={active === npage} className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">&gt;</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block pt-24 px-8">
        
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex flex-wrap items-center gap-4">
              <CSVDownloadButton onClick={handleDownloadCSV} disabled={pharmacology.length === 0} />
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
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  {visibleFields.map((field) => (
                    <th key={field} className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{numCol + index}</td>
                    {visibleFields.map((field) => (
                      <td key={field} className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{renderItalicized(item[field])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex justify-between items-center mt-6 mb-20">
              <div className="text-sm text-gray-700">
                Showing {numCol} to {numColPage} of {pharmacology.length} records
              </div>
              <div className="flex space-x-2">
                <button onClick={prev} disabled={active === 1} className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">&lt;</button>
                <span className="px-4 py-2 text-sm text-gray-700">Page {active} of {npage}</span>
                <button onClick={next} disabled={active === npage} className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">&gt;</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
