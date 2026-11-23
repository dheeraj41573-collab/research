import { useState, useEffect } from "react";

export default function ToxicityPredictionPostGMDB() {
  const [toxicities, setToxicities] = useState([]);
  const [active, setActive] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = toxicities.slice(firstIndex, lastIndex);
  const npage = Math.ceil(toxicities.length / recordsPerPage);
  const numCol = firstIndex + 1;
  const numColPage = Math.min(lastIndex, toxicities.length);

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

  // Helper functions to handle possible field name variations
  const getSn = (row) => row?.sn ?? row?.["S.No"] ?? row?.["S.No."] ?? "";
  const getCid = (row) => row?.cid ?? row?.CID ?? row?.["CID "] ?? "";
  const getCommonName = (row) => row?.commonName ?? row?.["Common Name"] ?? row?.["Common name"] ?? "";
  const getLd50 = (row) => row?.ld50 ?? row?.["LD50"] ?? row?.["LD50 (mg/kg)"] ?? row?.["LD50 (mg/Kg)"] ?? "";
  const getToxicityClass = (row) => row?.toxicityClass ?? row?.["Toxicity Class"] ?? row?.["Toxicity Class "] ?? "";
  const getAverageSimilarity = (row) => row?.averageSimilarity ?? row?.["Average Similarity"] ?? row?.["Average similarity (%)"] ?? "";
  const getPredictionAccuracy = (row) => row?.predictionAccuracy ?? row?.["Prediction Accuracy"] ?? row?.["Prediction accuracy (%)"] ?? "";
  const getClassification = (entry) => entry?.classification ?? entry?.["Classification"] ?? "";
  const getTarget = (entry) => entry?.target ?? entry?.["Target"] ?? "";
  const getPrediction = (entry) => entry?.prediction ?? entry?.["Prediction"] ?? "";
  const getProbability = (entry) => entry?.probability ?? entry?.["Probability"] ?? "";
  const getToxicityEntries = (row) => row?.toxicityEntries ?? [];

  // Helper function to calculate completeness score (higher = more complete)
  const calculateCompletenessScore = (entry) => {
    let score = 0;
    // Count non-empty main fields
    const mainFields = [entry.cid, entry.commonName, entry.ld50, entry.toxicityClass, entry.averageSimilarity, entry.predictionAccuracy];
    mainFields.forEach(field => {
      if (field && field.trim() !== "") {
        score++;
      }
    });
    // Also count toxicity entries (more entries = more complete)
    if (entry.toxicityEntries && entry.toxicityEntries.length > 0) {
      score += entry.toxicityEntries.length;
    }
    return score;
  };

  useEffect(() => {
    const base = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");
    const url = `${base}/api/gmdb/toxicityPrediction`;
    console.log("Fetching data from:", url);
    fetch(url)
      .then((result) => {
        console.log("Response status:", result.status);
        return result.json();
      })
      .then((resp) => {
        console.log("Fetched response:", resp);
        // Since database already has structured data, use it directly
        const data = Array.isArray(resp) ? resp : (Array.isArray(resp?.data) ? resp.data : []);
        // Sort first by completeness score (higher first), then by S.No.
        const sortedData = data.sort((a, b) => {
          const aScore = calculateCompletenessScore(a);
          const bScore = calculateCompletenessScore(b);
          // First compare by score descending
          if (bScore !== aScore) {
            return bScore - aScore;
          }
          // If scores are equal, sort by S.No. ascending
          const aSn = Number(a.sn);
          const bSn = Number(b.sn);
          return aSn - bSn;
        });
        console.log("Sorted data:", sortedData);
        setToxicities(sortedData);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setToxicities([]);
      });
  }, []);


  // Helper function to group toxicity entries by classification for row spanning
  const groupEntriesByClassification = (entries) => {
    const groups = [];
    let currentGroup = null;

    entries.forEach((entry) => {
      if (!currentGroup || currentGroup.classification !== entry.classification) {
        // Start a new group
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = {
          classification: entry.classification,
          entries: [entry]
        };
      } else {
        // Add to current group
        currentGroup.entries.push(entry);
      }
    });

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  };

  return (
    <>
      <div className="lg:hidden pt-24 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Toxicity Prediction of ADME-Qualified Gymnosperm Metabolites</h1>
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Data Table</h3>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select
                value={recordsPerPage}
                onChange={(e) => handlePageSizeChange(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
          </div>
          <div
            className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f1f1f1" }}
            onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}
          >
            <table
              className="min-w-full bg-white"
              style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none" }}
              onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}
            >
              <thead className="bg-black-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    S.No
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    CID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Common Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    LD50 (mg/kg)
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Toxicity Class
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Average similarity (%)
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Prediction accuracy (%)
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Classification
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Target
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Prediction
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">
                    Probability
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((tox, i) => {
                  console.log(`Rendering compound ${i}:`, tox);
                  const entries = getToxicityEntries(tox);
                  console.log(`Compound ${i} entries:`, entries);
                  
                  if (entries.length === 0) {
                    return (
                      <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">
                          {firstIndex + i + 1}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getCid(tox))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getCommonName(tox))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getLd50(tox))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getToxicityClass(tox))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getAverageSimilarity(tox))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getPredictionAccuracy(tox))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300"></td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300"></td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300"></td>
                        <td className="px-4 py-3 text-sm text-gray-900"></td>
                      </tr>
                    );
                  }

                  // Group entries by classification
                  const classificationGroups = groupEntriesByClassification(entries);
                  let currentEntryIndex = 0;

                  // Flatten groups into rows
                  return classificationGroups.map((group, groupIndex) => {
                    return group.entries.map((entry, j) => {
                      const isFirstInCompound = currentEntryIndex === 0;
                      const isFirstInClassificationGroup = j === 0;
                      
                      const row = (
                        <tr key={`${i}-${groupIndex}-${j}`} className="hover:bg-black-50 border-b border-black-200">
                          {isFirstInCompound ? (
                            <>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50" rowSpan={entries.length}>
                                {firstIndex + i + 1}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getCid(tox))}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getCommonName(tox))}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getLd50(tox))}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getToxicityClass(tox))}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getAverageSimilarity(tox))}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getPredictionAccuracy(tox))}
                              </td>
                            </>
                          ) : null}
                          
                          {isFirstInClassificationGroup ? (
                            <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300" rowSpan={group.entries.length}>
                              {sanitize(group.classification)}
                            </td>
                          ) : null}
                          
                          <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                            {sanitize(entry.target)}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300">
                            {sanitize(entry.prediction)}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {sanitize(entry.probability)}
                          </td>
                        </tr>
                      );
                      
                      currentEntryIndex++;
                      return row;
                    });
                  });
                })}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
              <div className="text-center">
                <span className="text-sm text-gray-700 font-medium">
                  Showing {numCol} to {numColPage} of {toxicities.length} records
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prev}
                  disabled={active === 1}
                  className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-black-600 rounded hover:bg-black-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &lt;
                </button>
                <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded">
                  Page <span className="text-black-600 font-bold">{active}</span> of{" "}
                  <span className="text-black-600 font-bold">{npage}</span>
                </span>
                <button
                  onClick={next}
                  disabled={active === npage}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:block pt-32 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Toxicity Prediction of ADME-Qualified Gymnosperm Metabolites</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Data Table</h3>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select
                value={recordsPerPage}
                onChange={(e) => handlePageSizeChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
          </div>
          <div
            className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f1f1f1" }}
            onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}
          >
            <table
              className="min-w-full bg-white"
              style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none" }}
              onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onSelectStart={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}
            >
              <thead className="bg-black-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    S.No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    CID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Common Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    LD50 (mg/kg)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Toxicity Class
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Average similarity (%)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Prediction accuracy (%)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Classification
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Target
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400">
                    Prediction
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600">
                    Probability
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((tox, i) => {
                  console.log(`Desktop rendering compound ${i}:`, tox);
                  const entries = getToxicityEntries(tox);
                  console.log(`Desktop compound ${i} entries:`, entries);
                  
                  if (entries.length === 0) {
                    return (
                      <tr key={i} className="hover:bg-black-50 border-b border-black-200">
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50">
                          {firstIndex + i + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getCid(tox))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getCommonName(tox))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getLd50(tox))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getToxicityClass(tox))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getAverageSimilarity(tox))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                          {sanitize(getPredictionAccuracy(tox))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300"></td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300"></td>
                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300"></td>
                        <td className="px-6 py-4 text-sm text-gray-900"></td>
                      </tr>
                    );
                  }

                  // Group entries by classification
                  const classificationGroups = groupEntriesByClassification(entries);
                  let currentEntryIndex = 0;

                  // Flatten groups into rows
                  return classificationGroups.map((group, groupIndex) => {
                    return group.entries.map((entry, j) => {
                      const isFirstInCompound = currentEntryIndex === 0;
                      const isFirstInClassificationGroup = j === 0;
                      
                      const row = (
                        <tr key={`${i}-${groupIndex}-${j}`} className="hover:bg-black-50 border-b border-black-200">
                          {isFirstInCompound ? (
                            <>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50" rowSpan={entries.length}>
                                {firstIndex + i + 1}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getCid(tox))}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getCommonName(tox))}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getLd50(tox))}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getToxicityClass(tox))}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getAverageSimilarity(tox))}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={entries.length}>
                                {sanitize(getPredictionAccuracy(tox))}
                              </td>
                            </>
                          ) : null}
                          
                          {isFirstInClassificationGroup ? (
                            <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300" rowSpan={group.entries.length}>
                              {sanitize(group.classification)}
                            </td>
                          ) : null}
                          
                          <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                            {sanitize(entry.target)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300">
                            {sanitize(entry.prediction)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {sanitize(entry.probability)}
                          </td>
                        </tr>
                      );
                      
                      currentEntryIndex++;
                      return row;
                    });
                  });
                })}
              </tbody>
            </table>
          </div>
          {npage > 1 && (
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
              <div className="text-center">
                <span className="text-base text-gray-700 font-medium">
                  Showing <span className="text-black-600 font-bold">{numCol}</span> to{" "}
                  <span className="text-black-600 font-bold">{numColPage}</span> of{" "}
                  <span className="text-black-600 font-bold">{toxicities.length}</span> records
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={prev}
                  disabled={active === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  &lt;
                </button>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-lg">
                  Page <span className="text-black-600 font-bold">{active}</span> of{" "}
                  <span className="text-black-600 font-bold">{npage}</span>
                </span>
                <button
                  onClick={next}
                  disabled={active === npage}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-black-600 rounded-lg hover:bg-black-700 hover:border-black-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
