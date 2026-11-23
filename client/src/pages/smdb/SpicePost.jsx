import { useState, useEffect } from "react";
import taxonomy from "../../spices.js";
import useDownloadWithEmail from "../../hooks/useDownloadWithEmail";
import EmailDownloadModal, { DownloadButton, RowRangeInputs } from "../../components/DownloadWithEmail";

const SMDB_SPICE_COLUMNS = [
  { header: "S.No", field: "sn" },
  { header: "Scientific Name", field: "scientificName" },
  { header: "Common Name", field: "commonName" },
  { header: "CID", field: "cid" },
  { header: "Compound Name", field: "compoundName" },
  { header: "IUPAC Name", field: "IUPACName" },
  { header: "Molecular Weight", field: "molecularWeight" },
  { header: "Molecular Formula", field: "molecularFormula" },
  { header: "Canonical Smiles", field: "canonicalSmiles" },
];

const SMDB_SPICE_COL_WIDTHS = [8, 22, 20, 10, 25, 35, 18, 20, 35];

export default function SpicePost({ slug, taxonomyKey }) {
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const lastIndex = active * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = items.slice(firstIndex, lastIndex);
    const npage = Math.ceil(items.length / recordsPerPage)
    const numCol = firstIndex + 1;

    const dl = useDownloadWithEmail({
        items,
        slug,
        localStorageKey: "smdb_download_email",
        slugFieldName: "spiceSlug",
        columns: SMDB_SPICE_COLUMNS,
        colWidths: SMDB_SPICE_COL_WIDTHS,
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

    const sortRowsByCompleteness = (data) => {
        if (!data || data.length === 0) return [];

        const fieldsToCheck = [
            'scientificName', 'commonName', 'cid', 'compoundName',
            'IUPACName', 'molecularWeight', 'molecularFormula', 'canonicalSmiles'
        ];

        const rowsWithScore = data.map((item, index) => {
            let filledCount = 0;
            let totalFields = fieldsToCheck.length;

            fieldsToCheck.forEach(field => {
                if (item[field] && item[field].toString().trim() !== '') {
                    filledCount++;
                }
            });

            const completeness = (filledCount / totalFields) * 100;
            return { ...item, originalIndex: index, completeness, filledCount, totalFields };
        });

        const sortedRows = rowsWithScore.sort((a, b) => {
            if (Math.abs(a.completeness - b.completeness) < 0.1) {
                if (a.filledCount === b.filledCount) {
                    return a.originalIndex - b.originalIndex;
                }
                return b.filledCount - a.filledCount;
            }
            return b.completeness - a.completeness;
        });

        return sortedRows.map(({ ...item }) => item);
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URI_API}/api/smdb/${slug}/`).then((result) => {
            result.json().then((resp) => {
                const sortedBySn = resp.sort((a, b) => (a.sn ?? 0) - (b.sn ?? 0));
                const sortedByCompleteness = sortRowsByCompleteness(sortedBySn);
                setItems(sortedByCompleteness);
            });
        });
    }, [slug]);

    const info = taxonomy[taxonomyKey || slug];
    const title = info?.scientificName || slug;
    const imageUrl = (() => {
        const path = info?.image || "sergei.jpg";
        try {
            return new URL(`../../Image/${path}`, import.meta.url).href;
        } catch {
            return undefined;
        }
    })();

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
            {/* Desktop Layout - Laptop and above */}
            <div className="hidden lg:grid grid-rows-1 pt-32 md:grid-cols-2">
                <div className="xl:mt-14 mt-12 xl:ml-40 sm:ml-10">
                    <h5 className="text-2xl font-bold italic">{title}</h5>
                    {info && (
                        <>
                            <h3 className="text-1xl font-bold">Classification (APG 2016)</h3>
                            <div className="space-y-1">
                                {info.classification.map(([key, value], idx) => (
                                    <div key={idx} className="px-2">
                                        <div className="flex items-baseline gap-3">
                                            <span className="w-36 text-lg font-bold text-gray-900">{key}:</span>
                                            <div className="flex-1 min-w-0 overflow-x-auto">
                                                <span className={(key === 'Species' || key === 'Genus' ? "italic " : "") + "whitespace-nowrap inline-block"}>{value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className="">
                    {imageUrl && (
                        <img
                            className="xl:h-80 h-60 xl:pl-20 xl:mt-14 xl:w-[600px] xl:pr-20 ms-auto xl:pt-2 px-4 py-2 drop-shadow-2xl rounded-2xl"
                            src={imageUrl}
                            alt={title}
                        />
                    )}
                </div>
            </div>

            {/* Mobile and Tablet Layout */}
            <div className="lg:hidden pt-32 px-4">
                <h5 className="text-2xl font-bold text-center mb-6 italic">{title}</h5>

                {imageUrl && (
                    <div className="flex justify-center mb-6">
                        <img
                            className="h-64 w-80 max-w-full rounded-xl shadow-2xl border-4 border-white object-cover"
                            src={imageUrl}
                            alt={title}
                        />
                    </div>
                )}

                {info && (
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-center">Classification (APG 2016)</h3>
                        <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                            {info.classification.map(([key, value], idx) => (
                                <div key={idx} className="flex items-baseline gap-2">
                                    <span className="w-24 text-base font-bold text-gray-900">{key}:</span>
                                    <span className={(key === 'Species' || key === 'Genus' ? "italic " : "") + "text-base text-gray-700"}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
                            maxRow={items.length}
                        />
                        <DownloadButton onClick={dl.handleDownloadClick} />
                        <div className="flex items-center space-x-2 ml-auto">
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

                    <div className="overflow-x-auto border-4 border-black-600 rounded-lg shadow-lg   " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
                        <table className="min-w-full bg-white" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                            <thead className="bg-black-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">S.No</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Scientific Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Common Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">CID</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Compound Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">IUPAC Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Molecular Weight</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Molecular Formula</th>
                                    <th className="px-4 py-3 text-left text-sm font-bold text-black-900 border-b-2 border-black-600   ">Canonical Smiles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((item, index) => (
                                    <tr key={index} className="hover:bg-black-50 border-b border-black-200   ">
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50   ">{firstIndex + index + 1}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300 italic font-medium   ">{item.scientificName || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300   ">{item.commonName || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300   ">{item.cid || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300   ">{item.compoundName || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300   ">{item.IUPACName || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300   ">{item.molecularWeight || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900 border-r border-black-300   ">{item.molecularFormula || ''}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900   ">{item.canonicalSmiles || ''}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {npage > 1 && (
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-4">
                            <div className="text-center">
                                <span className="text-sm text-gray-700 font-medium">
                                    Showing {numCol} to {Math.min(lastIndex, items.length)} of {items.length} records
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
                                    Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span>
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

                <div className="min-h-[20px]"></div>
            </div>

            {/* Desktop Data Table */}
            <div className="hidden lg:block pt-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Data Table</h3>
                    </div>
                    <div className="flex items-center space-x-2 flex-wrap gap-2 mb-6">
                        <RowRangeInputs
                            startRow={dl.startRow}
                            setStartRow={dl.setStartRow}
                            endRow={dl.endRow}
                            setEndRow={dl.setEndRow}
                            maxRows={dl.maxRows}
                            maxRow={items.length}
                        />
                        <DownloadButton onClick={dl.handleDownloadClick} />
                        <div className="flex items-center space-x-2 ml-auto">
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

                    <div className="overflow-x-auto border-2 border-black-600 rounded-lg shadow-lg   " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
                        <table className="min-w-full bg-white" >
                            <thead className="bg-black-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">S.No</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Scientific Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Common Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">CID</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Compound Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">IUPAC Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Molecular Weight</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600 border-r border-black-400   ">Molecular Formula</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-black-900 border-b-2 border-black-600   ">Canonical Smiles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((item, index) => (
                                    <tr key={index} className="hover:bg-black-50 border-b border-black-200   ">
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 font-medium bg-gray-50   ">{firstIndex + index + 1}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300 italic font-medium   ">{item.scientificName || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300   ">{item.commonName || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300   ">{item.cid || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300   ">{item.compoundName || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300   ">{item.IUPACName || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300   ">{item.molecularWeight || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 border-r border-black-300   ">{item.molecularFormula || ''}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900   ">{item.canonicalSmiles || ''}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {npage > 1 && (
                        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6 mb-20">
                            <div className="text-center">
                                <span className="text-base text-gray-700 font-medium">
                                    Showing <span className="text-black-600 font-bold">{numCol}</span> to <span className="text-black-600 font-bold">{Math.min(lastIndex, items.length)}</span> of <span className="text-black-600 font-bold">{items.length}</span> records
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
                                    Page <span className="text-black-600 font-bold">{active}</span> of <span className="text-black-600 font-bold">{npage}</span>
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

                <div className="min-h-[20px]"></div>
            </div>
        </>
    );
}
