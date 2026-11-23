/**
 * EmailDownloadModal — reusable modal component for email/address gated download
 * Use with useDownloadWithEmail hook.
 */
export default function EmailDownloadModal({
  show,
  onClose,
  name,
  setName,
  email,
  setEmail,
  address,
  setAddress,
  onSubmit,
}) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
        <h3 className="text-xl font-bold mb-4">Enter Details to Download</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your address"
              rows={3}
              required
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Download
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/**
 * DownloadButtonIcon — the small inline green download icon button
 */
export function DownloadButton({ onClick, title = "Download Excel" }) {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      title={title}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v10m0 0l-3-3m3 3l3-3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        />
      </svg>
    </button>
  );
}

/**
 * RowRangeInputs — the From Row / To Row number inputs placed next to download button
 */
export function RowRangeInputs({
  startRow,
  setStartRow,
  endRow,
  setEndRow,
  maxRows,
  maxRow,
}) {
  return (
    <>
      <div className="flex items-center space-x-1">
        <label className="text-sm font-medium text-gray-700">From Row:</label>
        <input
          type="number"
          min="1"
          max={maxRow}
          value={startRow}
          onChange={(e) => setStartRow(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm w-16"
        />
      </div>
      <div className="flex items-center space-x-1">
        <label className="text-sm font-medium text-gray-700">To Row:</label>
        <input
          type="number"
          min="1"
          max={maxRow}
          value={endRow}
          onChange={(e) => setEndRow(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm w-16"
        />
      </div>
      <span className="text-xs text-gray-500 italic">
        (max {maxRows} at a time)
      </span>
    </>
  );
}

function escapeCSVValue(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

export function exportToCSV(columns, data, filename) {
  if (!data || data.length === 0) {
    alert('No data available to download.');
    return;
  }
  const headerRow = columns.map((c) => escapeCSVValue(c.label)).join(',');
  const dataRows = data.map((row, rowIdx) =>
    columns.map((col) => {
      if (col.key === 'sNo') {
        return escapeCSVValue(rowIdx + 1);
      }
      let val = row[col.key];
      if (val === null || val === undefined) val = '';
      if (typeof val === 'string') {
        val = val.replace(/<[^>]*>/g, '');
      }
      return escapeCSVValue(val);
    }).join(',')
  );
  const csvContent = [headerRow, ...dataRows].join('\r\n');
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename.endsWith('.csv') ? filename : filename + '.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function CSVDownloadButton({ onClick, disabled = false, title = 'Download CSV' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-green-600 border border-green-700 rounded-md hover:bg-green-700 hover:border-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
      title={title}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v10m0 0l-3-3m3 3l3-3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        />
      </svg>
      <span>Download CSV</span>
    </button>
  );
}
