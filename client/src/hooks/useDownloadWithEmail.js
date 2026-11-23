import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * useDownloadWithEmail — reusable hook for Name/Email/Address-gated Excel download
 * (same pattern as SMDB SpicePost for CMDB, LMDB, GMDB, FMDB, DMDB etc.)
 *
 * @param {Object} opts
 * @param {Array}  opts.items          — data array to slice & export
 * @param {string} opts.slug           — current species slug
 * @param {string} opts.localStorageKey— localStorage key for remembered email
 * @param {string} opts.slugFieldName  — field name sent to /api/downloads (e.g. "spiceSlug", "cerealSlug", "lichenSlug")
 * @param {Array}  opts.columns        — [{ header: "Excel Header", field: "itemFieldName" }, ...]
 * @param {Array}  [opts.colWidths]    — Excel column widths (wch values), optional
 * @param {number} [opts.maxRows=5]    — max downloadable rows at once
 * @returns {Object} download state & handlers
 */
export default function useDownloadWithEmail({
  items,
  slug,
  localStorageKey,
  slugFieldName,
  columns,
  colWidths,
  maxRows = 5,
}) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [startRow, setStartRow] = useState(1);
  const [endRow, setEndRow] = useState(maxRows);

  useEffect(() => {
    const savedName = localStorage.getItem(`${localStorageKey}_name`);
    const savedEmail = localStorage.getItem(localStorageKey);
    const savedAddr = localStorage.getItem(`${localStorageKey}_address`);
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedAddr) setAddress(savedAddr);
  }, [localStorageKey]);

  // Keep endRow bounded by actual items length
  useEffect(() => {
    if (items && items.length > 0) {
      setEndRow((prev) => Math.min(Math.max(prev, 1), items.length));
      setStartRow((prev) => Math.min(Math.max(prev, 1), items.length));
    }
  }, [items]);

  const handleDownloadClick = () => {
    const savedName = localStorage.getItem(`${localStorageKey}_name`);
    const savedEmail = localStorage.getItem(localStorageKey);
    const savedAddr = localStorage.getItem(`${localStorageKey}_address`);
    if (savedName && savedEmail && savedAddr) {
      performDownload();
    } else {
      setShowModal(true);
    }
  };

  const performDownload = async () => {
    const start = parseInt(startRow, 10);
    const end = parseInt(endRow, 10);
    const total = items?.length ?? 0;

    if (isNaN(start) || isNaN(end) || start < 1 || end > total || start > end) {
      alert(`Please enter a valid row range (1 to ${total})`);
      return;
    }
    if (end - start + 1 > maxRows) {
      alert(`You can download a maximum of ${maxRows} rows at a time`);
      return;
    }

    // Save record to backend
    try {
      const body = {
        name,
        email,
        address,
        startRow: start,
        endRow: end,
      };
      body[slugFieldName] = slug;
      body.slug = slug;
      body.slugFieldName = slugFieldName;

      const resp = await fetch(`${import.meta.env.VITE_APP_URI_API}/api/downloads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!resp.ok) {
        try {
          const errData = await resp.json();
          console.error("Download save rejected:", errData);
          alert(`Note: Your record could not be saved (${resp.status}). Your file will still download.`);
        } catch (_) {
          alert(`Note: Your record could not be saved (${resp.status}). Your file will still download.`);
        }
      }
    } catch (err) {
      console.error("Error saving download record:", err);
      alert(`Note: Could not reach server (${err?.message || "network error"}). Your file will still download.`);
    }

    try {
      const selectedRows = (items || []).slice(start - 1, end);
      const formatted = selectedRows.map((item, index) => {
        const row = {};
        columns.forEach((col) => {
          row[col.header] = item[col.field] ?? "";
        });
        // S.No first column (based on "S.No" header if defined, else skip)
        const snoIdx = columns.findIndex((c) => c.header === "S.No");
        if (snoIdx >= 0) {
          row["S.No"] = start + index;
        }
        return row;
      });

      // S.No needs to be first in object order — reconstruct
      const finalData = formatted.map((row, index) => {
        const withSno = { "S.No": start + index };
        columns.forEach((col) => {
          if (col.header !== "S.No") withSno[col.header] = row[col.header];
        });
        return withSno;
      });

      const ws = XLSX.utils.json_to_sheet(finalData);
      if (colWidths && colWidths.length) {
        ws["!cols"] = colWidths.map((wch) => ({ wch }));
      }
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Data");
      const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const blob = new Blob([buf], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      });
      saveAs(blob, `${slug}-data.xlsx`);
    } catch (err2) {
      console.error("Error in XLSX/saveAs:", err2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!address.trim()) {
      alert("Please enter your address");
      return;
    }
    localStorage.setItem(`${localStorageKey}_name`, name);
    localStorage.setItem(localStorageKey, email);
    localStorage.setItem(`${localStorageKey}_address`, address);
    setShowModal(false);
    performDownload();
  };

  return {
    showModal,
    setShowModal,
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    startRow,
    setStartRow,
    endRow,
    setEndRow,
    handleDownloadClick,
    handleSubmit,
    maxRows,
  };
}
