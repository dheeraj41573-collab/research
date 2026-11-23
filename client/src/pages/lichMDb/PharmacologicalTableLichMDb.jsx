import { useState, useEffect } from "react";
import useDownloadWithEmail from "../../hooks/useDownloadWithEmail";
import EmailDownloadModal, { DownloadButton, RowRangeInputs } from "../../components/DownloadWithEmail";

const LMDB_PHARMA_TABLE_COLUMNS = [
  { header: "S.No", field: "sn" },
  { header: "Lichen Species", field: "lichenSpecies" },
  { header: "Total Molecules", field: "totalMolecules" },
  { header: "Number of Superclasses", field: "numberSuperclasses" },
  { header: "Number of Classes", field: "Column5" },
];

const LMDB_PHARMA_TABLE_COL_WIDTHS = [8, 30, 18, 22, 22];

export default function PharmacologicalTableLichMDb() {
  const [pharmacology, setPharmacology] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = pharmacology.slice(firstIndex, lastIndex);
  const npage = Math.ceil(pharmacology.length / recordsPerPage);
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, pharmacology.length);
  
  const dl = useDownloadWithEmail({
    items: pharmacology,
    slug: "lmdb-pharma-table",
    localStorageKey: "lmdb_pharma_table_email",
    slugFieldName: "lmdbPharmaTableSlug",
    columns: LMDB_PHARMA_TABLE_COLUMNS,
    colWidths: LMDB_PHARMA_TABLE_COL_WIDTHS,
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
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/lichmdb/pharmacologicalTableLichMDb/`).then((result) => {
      result.json().then((resp) => {
        const sortedData = resp.sort((a, b) => a.s_no - b.s_no);
        setPharmacology(sortedData);
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
              maxRow={pharmacology.length}
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
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-black-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lichen Species</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Total Molecules</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Number of Superclasses</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Classes</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 font-medium bg-gray-50">{numCol + index}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 italic font-medium">{item.lichenSpecies}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.totalMolecules}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{item.numberSuperclasses}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.Column5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-700">
              Showing {numCol} to {numColPage} of {pharmacology.length} entries
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
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <RowRangeInputs
                startRow={dl.startRow}
                setStartRow={dl.setStartRow}
                endRow={dl.endRow}
                setEndRow={dl.setEndRow}
                maxRows={dl.maxRows}
                maxRow={pharmacology.length}
              />
              <DownloadButton onClick={dl.handleDownloadClick} />
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
          <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Lichen Species</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Total Molecules</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Number of Superclasses</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Classes</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300 font-medium bg-gray-50">{numCol + index}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300 italic font-medium">{item.lichenSpecies}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.totalMolecules}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{item.numberSuperclasses}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.Column5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-700">
              Showing {numCol} to {numColPage} of {pharmacology.length} entries
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
