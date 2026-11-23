import { useState, useEffect } from "react";

export default function PharmacologyPlantDMDB() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = items.slice(firstIndex, lastIndex);
  const npage = Math.ceil(items.length / recordsPerPage);
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, items.length);

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
    fetch(`${import.meta.env.VITE_APP_URI_API}/api/dmdb/pharmacologyPlant/`).then((result) => {
      result.json().then((resp) => {
        setItems(Array.isArray(resp) ? resp : []);
      });
    });
  }, []);

  const columns = items.length > 0 ? Object.keys(items[0]).filter((k)=>k!=="_id" && k!=="__v") : [];
  const visibleFields = columns.filter((key) => key !== "sn").filter((key) =>
    items.some((row) => row[key] && row[key] !== "" && row[key] !== "-" && row[key] !== "*")
  );

  const renderItalicized = (text) => {
    if (!text || typeof text !== "string") return text || "-";
    const parts = text.split(/(\([^)]+\))/g);
    return parts.map((part, index) => {
      if (part.startsWith("(") && part.endsWith(")")) {
        return <span key={index}>(<i>{part.slice(1, -1)}</i>)</span>;
      }
      return part;
    });
  };

  return (
    <div className="pt-8 px-4">
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
      <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg">
        <table className="min-w-full bg-white" style={{ userSelect: 'none' }}>
          <thead className="bg-black-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">S.No</th>
              {visibleFields.map((col, index) => (
                <th
                  key={col}
                  className={`px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 ${index === visibleFields.length - 1 ? "" : "border-r border-black-400"}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((row, i) => (
              <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">{firstIndex + i + 1}</td>
                {visibleFields.map((col, index) => (
                  <td
                    key={col}
                    className={`px-6 py-4 text-sm text-gray-900 ${index === visibleFields.length - 1 ? "" : "border-r border-black-300"}`}
                  >
                    {renderItalicized(row[col])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {npage > 1 && (
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
          <div className="text-center">
            <span className="text-base text-gray-700 font-medium">Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{numColPage}</span> of <span className="text-black-600 font-bold">{items.length}</span> records</span>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={prev} disabled={active === 1} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&lt;</button>
            <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg">Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span></span>
            <button onClick={next} disabled={active === npage} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
}
