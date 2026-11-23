import { useState, useEffect } from "react";

export default function StatisticsPostGMDB() {
  const [statisticsOne, setStatisticsOne] = useState([]);
  const [activeOne, setActiveOne] = useState(1);
  const [recordsPerPageOne, setRecordsPerPageOne] = useState(10);
  const lastIndexOne = activeOne * recordsPerPageOne;
  const firstIndexOne = lastIndexOne - recordsPerPageOne;
  const recordsOne = statisticsOne.slice(firstIndexOne, lastIndexOne);
  const npageOne = Math.ceil(statisticsOne.length / recordsPerPageOne);
  const numColOne = firstIndexOne + 1;
  const numColPageOne = Math.min(lastIndexOne, statisticsOne.length);
  const getAttributes = (row) => row?.Attributes ?? row?.KindsOfMetabolites ?? "-";
  const getNumber = (row) => row?.NumberGymnospermMetabolites ?? row?.NumberOfMetabolites ?? "-";

  const nextOne = () => {
    if (activeOne === npageOne) return;
    setActiveOne(activeOne + 1);
  };
  const prevOne = () => {
    if (activeOne === 1) return;
    setActiveOne(activeOne - 1);
  };
  

  const handlePageSizeChangeOne = (newSize) => {
    setRecordsPerPageOne(Number(newSize));
    setActiveOne(1);
  };
  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/gmdb/statistics/`).then((result) => {
      result.json().then((resp) => {
        const sortedData = resp.sort((a, b) => (a.sn || 0) - (b.sn || 0));
        setStatisticsOne(sortedData);
      });
    });
    
  }, []);

  return (
    <>
      <div className="lg:hidden pt-24 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Quantifying the Pharmacological Diversity of Gymnosperm Metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Statistics Sheet One</h3>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select value={recordsPerPageOne} onChange={(e)=>handlePageSizeChangeOne(e.target.value)} className="border border-gray-300 rounded px-2 py-1 text-sm">
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
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No.</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Attributes</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Gymnosperm Metabolites</th>
                </tr>
              </thead>
              <tbody>
                {recordsOne.map((statistic, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndexOne + i + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 italic">{getAttributes(statistic)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{getNumber(statistic)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npageOne > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
              <div className="text-center">
                <span className="text-sm text-gray-700 font-medium">Showing {numColOne} to {numColPageOne} of {statisticsOne.length} records</span>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={prevOne} disabled={activeOne === 1} className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-black-600 rounded hover:bg-black-700 disabled:opacity-50 disabled:cursor-not-allowed">&lt;</button>
                <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded">Page <span className="text-black-600 font-bold">{activeOne}</span> of <span className="text-black-600 font-bold">{npageOne}</span></span>
                <button onClick={nextOne} disabled={activeOne === npageOne} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&gt;</button>
              </div>
            </div>
          )}
        </div>
        
      </div>

      <div className="hidden lg:block pt-32 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Quantifying the Pharmacological Diversity of Gymnosperm Metabolites</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select value={recordsPerPageOne} onChange={(e)=>handlePageSizeChangeOne(e.target.value)} className="border border-gray-300 rounded px-3 py-1 text-sm">
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
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Attributes</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Gymnosperm Metabolites</th>
                </tr>
              </thead>
              <tbody>
                {recordsOne.map((statistic, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndexOne + i + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{getAttributes(statistic)}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{getNumber(statistic)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {npageOne > 1 && (
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
              <div className="text-center">
                <span className="text-base text-gray-700 font-medium">Showing <span className="text-black-600 font-bold">{numColOne}</span> to <span className="text-black-600 font-bold">{numColPageOne}</span> of <span className="text-black-600 font-bold">{statisticsOne.length}</span> records</span>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={prevOne} disabled={activeOne === 1} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&lt;</button>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg">Page <span className="text-black-600 font-bold">{activeOne}</span> of <span className="text-black-600 font-bold">{npageOne}</span></span>
                <button onClick={nextOne} disabled={activeOne === npageOne} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&gt;</button>
              </div>
            </div>
          )}
          
          {/* <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">Attributes</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">Number of Gymnosperm Metabolites</th>
                </tr>
              </thead>
              <tbody>
                {recordsTwo.map((statistic, i) => (
                  <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndexTwo + i + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">{getAttributes(statistic)}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{getNumber(statistic)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
          
        </div>
      </div>
    </>
  );
}
