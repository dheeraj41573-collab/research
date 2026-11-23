import { useState, useEffect } from "react";
import { exportToCSV, CSVDownloadButton } from "../../components/DownloadWithEmail";

export default function StatisticsPostTrichoderma() {
  const [statistics, setStatistics] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = statistics.slice(firstIndex, lastIndex);
  const npage = Math.ceil(statistics.length / recordsPerPage)
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, statistics.length);
  
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
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/trichoderma/statistics/`).then((result) => {
      result.json().then((resp) => {
        const sortedData = resp.sort((a, b) => a.sn - b.sn);
        setStatistics(sortedData);
      });
    });
  }, []);

  const statsColumns = [
    { label: "S.No.", key: "sNo" },
    { label: "Species Name", key: "speciesName" },
    { label: "Number of Metabolites", key: "NoMetabolite" },
  ];
  const handleDownloadCSV = () => exportToCSV(statsColumns, statistics, "Trichoderma_Statistics.csv");

  return (
    <>
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden pt-24 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Quantifying the pharmacological diversity of <i>Trichoderma</i> Metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
            <h3 className="text-xl font-bold">Data Table</h3>
            <div className="flex flex-wrap items-center gap-3">
              <CSVDownloadButton onClick={handleDownloadCSV} disabled={statistics.length === 0} />
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
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No.</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Species Name</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Metabolites</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndex + index + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 italic">{item.speciesName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.NoMetabolite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
              <div className="text-center">
                <span className="text-sm text-gray-700 font-medium">Showing {numCol} to {numColPage} of {statistics.length} records</span>
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
          <h1 className="text-4xl font-bold">Quantifying the pharmacological diversity of <i>Trichoderma</i> Metabolites</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex flex-wrap items-center gap-4">
              <CSVDownloadButton onClick={handleDownloadCSV} disabled={statistics.length === 0} />
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
          </div>
          <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Species Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Metabolites</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={item._id} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndex + index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 italic">{item.speciesName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.NoMetabolite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
              <div className="text-center">
                <span className="text-base text-gray-700 font-medium">Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{numColPage}</span> of <span className="text-black-600 font-bold">{statistics.length}</span> records</span>
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
