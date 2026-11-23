import { useState, useEffect } from "react";
import useDownloadWithEmail from "../../hooks/useDownloadWithEmail";
import EmailDownloadModal, { DownloadButton, RowRangeInputs } from "../../components/DownloadWithEmail";

const LMDB_PHARMA_CEREAL_COLUMNS = [
  { header: "S.No", field: "sn" },
  { header: "Plant", field: "Plant" },
  { header: "Antimicrobial", field: "Antimicrobial" },
  { header: "Antiprotozoal", field: "Antiprotozoal" },
  { header: "Antiviral", field: "Antiviral" },
  { header: "Antiinflammatory", field: "Antiinflammatory" },
  { header: "Antioxidant", field: "Antioxidant" },
  { header: "Antidiabetic", field: "Antidiabetic" },
  { header: "Antiapoptotic", field: "Antiapoptotic" },
  { header: "Anticancer", field: "Anticancer" },
  { header: "Antibacterial", field: "Antibacterial" },
  { header: "Antifungal", field: "Antifungal" },
  { header: "Antiallergy", field: "Antiallergy" },
  { header: "Antiestrogenic", field: "Antiestrogenic" },
  { header: "Anticonvulsant", field: "Anticonvulsant" },
  { header: "Antiobesity", field: "Antiobesity" },
  { header: "Antinociceptive", field: "Antinociceptive" },
  { header: "Antiatherosclerotic", field: "Antiatherosclerotic" },
  { header: "Antirheumatic", field: "Antirheumatic" },
  { header: "Antihypertensive", field: "Antihypertensive" },
];

const LMDB_PHARMA_CEREAL_COL_WIDTHS = LMDB_PHARMA_CEREAL_COLUMNS.map(() => 15);

export default function PharmacologyCerealPostLichMDb() {
  const [pharmacologyCereals, setPharmacologyCereals] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = pharmacologyCereals.slice(firstIndex, lastIndex);
  const npage = Math.ceil(pharmacologyCereals.length / recordsPerPage)
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, pharmacologyCereals.length);

  const dl = useDownloadWithEmail({
    items: pharmacologyCereals,
    slug: "lmdb-pharma-cereal",
    localStorageKey: "lmdb_pharma_cereal_email",
    slugFieldName: "lmdbPharmaCerealSlug",
    columns: LMDB_PHARMA_CEREAL_COLUMNS,
    colWidths: LMDB_PHARMA_CEREAL_COL_WIDTHS,
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
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/lichmdb/pharmacologyCerealLichMDb/`).then((result) => {
      result.json().then((resp) => {
         const sortedData = resp.sort((a, b) => a.sn - b.sn);
                 setPharmacologyCereals(sortedData);
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
      <div className="lg:hidden pt-16 px-4">
        {/* <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Pharmacological Activities of Cereal Metabolites</h1>
        </div> */}
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
              maxRow={pharmacologyCereals.length}
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
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Plant</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antimicrobial</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiprotozoal</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiviral</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiinflammatory</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antioxidant</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antidiabetic</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiapoptotic</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anticancer</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antibacterial</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antifungal</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiallergy</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiestrogenic</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anticonvulsant</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiobesity</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antinociceptive</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiatherosclerotic</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antirheumatic</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600  ">Antihypertensive</th>
                </tr>
              </thead>
              <tbody>
                {records.map((pharmacologyCereal, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  italic">{pharmacologyCereal.Plant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antimicrobial}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiprotozoal}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiviral}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiinflammatory}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antioxidant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antidiabetic}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiapoptotic}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Anticancer}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antibacterial}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antifungal}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiallergy}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiestrogenic}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Anticonvulsant}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiobesity}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antinociceptive}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiatherosclerotic}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antirheumatic}</td>
                    <td className="px-4 py-3 text-sm text-gray-900  ">{pharmacologyCereal.Antihypertensive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
              <div className="text-center">
                <span className="text-sm text-gray-700 font-medium">Showing {numCol} to {numColPage} of {pharmacologyCereals.length} records</span>
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
      <div className="hidden lg:block pt-16 px-4">
        {/* <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Pharmacological Activities of Cereal Metabolites</h1>
        </div> */}
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
                maxRow={pharmacologyCereals.length}
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
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Plant</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antimicrobial</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiprotozoal</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiviral</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiinflammatory</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antioxidant</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antidiabetic</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiapoptotic</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anticancer</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antibacterial</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antifungal</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiallergy</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiestrogenic</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Anticonvulsant</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiobesity</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antinociceptive</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antiatherosclerotic</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400  ">Antirheumatic</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600  ">Antihypertensive</th>
                </tr>
              </thead>
              <tbody>
                {records.map((pharmacologyCereal, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200  ">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50  ">{firstIndex + i + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  italic">{pharmacologyCereal.Plant}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antimicrobial}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiprotozoal}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiviral}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiinflammatory}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antioxidant}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antidiabetic}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiapoptotic}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Anticancer}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antibacterial}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antifungal}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiallergy}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiestrogenic}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Anticonvulsant}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiobesity}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antinociceptive}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antiatherosclerotic}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300  ">{pharmacologyCereal.Antirheumatic}</td>
                    <td className="px-6 py-4 text-sm text-gray-900  ">{pharmacologyCereal.Antihypertensive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
              <div className="text-center">
                <span className="text-base text-gray-700 font-medium">Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{numColPage}</span> of <span className="text-black-600 font-bold">{pharmacologyCereals.length}</span> records</span>
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
