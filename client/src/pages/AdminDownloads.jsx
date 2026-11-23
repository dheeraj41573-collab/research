import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function AdminDownloads() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [adminName, setAdminName] = useState("");

  const getToken = () => localStorage.getItem("fdp_admin_token");

  const logout = useCallback(() => {
    localStorage.removeItem("fdp_admin_token");
    localStorage.removeItem("fdp_admin_role");
    localStorage.removeItem("fdp_admin_name");
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  const fetchDownloads = useCallback(async () => {
    const token = getToken();
    const role = localStorage.getItem("fdp_admin_role");
    if (!token || role !== "admin") {
      navigate("/admin/login", { replace: true });
      return;
    }

    setLoading(true);
    setError("");
    try {
      const base = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");
      const resp = await fetch(`${base}/api/downloads`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (resp.status === 401 || resp.status === 403) {
        logout();
        return;
      }

      const data = await resp.json().catch(() => ({}));
      if (resp.ok && Array.isArray(data)) {
        setItems(data);
      } else {
        setError(data?.error || data?.message || "Failed to load downloads");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [navigate, logout]);

  useEffect(() => {
    setAdminName(localStorage.getItem("fdp_admin_name") || "Admin");
    fetchDownloads();
  }, [fetchDownloads]);

  const filtered = items.filter((it) => {
    if (!search.trim()) return true;
    const q = search.trim().toLowerCase();
    return (
      (it.name || "").toLowerCase().includes(q) ||
      (it.email || "").toLowerCase().includes(q) ||
      (it.slug || "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20 lg:pt-[88px]">
      <div className="bg-gradient-to-r from-[#1BD11B] to-[#57C785] px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Download Records</h1>
            <p className="text-white/90 text-sm mt-1">Signed in as {adminName}</p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/admin/feedback"
              className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm transition-all"
            >
              Feedback
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email or dataset..."
            className="flex-1 min-w-[220px] rounded-xl border-2 border-gray-200 px-4 py-2 outline-none focus:border-green-500 bg-white transition-all text-sm"
          />
          <span className="px-3 py-2 rounded-xl bg-white border-2 border-gray-200 text-sm font-semibold text-gray-600">
            {filtered.length} of {items.length}
          </span>
          <button
            onClick={fetchDownloads}
            className="px-4 py-2 rounded-xl font-semibold text-sm border-2 border-gray-200 bg-white text-gray-600 hover:border-green-300 transition-all"
          >
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-xl px-4 py-3 font-medium text-sm border bg-red-50 border-red-200 text-red-700">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center py-16 text-gray-500 font-medium">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent mb-3"></div>
            <p>Loading downloads...</p>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-medium">No download records found.</div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-500">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Address</th>
                  <th className="px-4 py-3 font-semibold">Dataset</th>
                  <th className="px-4 py-3 font-semibold">Rows</th>
                  <th className="px-4 py-3 font-semibold">Downloaded</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((it) => (
                  <tr key={it._id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{it.name || "—"}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{it.email}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-[220px] truncate" title={it.address}>
                      {it.address || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{it.slug}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {it.startRow}–{it.endRow}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{formatDate(it.downloadedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
