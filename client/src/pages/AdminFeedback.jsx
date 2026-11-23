import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          xmlns="http://www.w3.org/2000/svg"
          className={"w-4 h-4 " + (n <= rating ? "text-yellow-400" : "text-gray-300")}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    approved: "bg-green-50 text-green-700 border-green-200",
    rejected: "bg-red-50 text-red-700 border-red-200",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status] || ""}`}>
      {status}
    </span>
  );
}

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

const TABS = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Approved" },
  { key: "rejected", label: "Rejected" },
];

export default function AdminFeedback() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState("pending");
  const [actingId, setActingId] = useState(null);
  const [adminName, setAdminName] = useState("");

  const getToken = () => localStorage.getItem("fdp_admin_token");

  const logout = useCallback(() => {
    localStorage.removeItem("fdp_admin_token");
    localStorage.removeItem("fdp_admin_role");
    localStorage.removeItem("fdp_admin_name");
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  const fetchFeedback = useCallback(async () => {
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
      const resp = await fetch(`${base}/api/feedback`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (resp.status === 401 || resp.status === 403) {
        logout();
        return;
      }

      const data = await resp.json().catch(() => ({}));
      if (resp.ok && data?.success && Array.isArray(data.data)) {
        setItems(data.data);
      } else {
        setError(data?.message || "Failed to load feedback");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [navigate, logout]);

  useEffect(() => {
    setAdminName(localStorage.getItem("fdp_admin_name") || "Admin");
    fetchFeedback();
  }, [fetchFeedback]);

  const updateStatus = async (id, status) => {
    const token = getToken();
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }
    setActingId(id);
    try {
      const base = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");
      const resp = await fetch(`${base}/api/feedback/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (resp.status === 401 || resp.status === 403) {
        logout();
        return;
      }

      const data = await resp.json().catch(() => ({}));
      if (resp.ok && data?.success) {
        setItems((prev) =>
          prev.map((it) => (it._id === id ? { ...it, status, reviewedAt: new Date().toISOString() } : it))
        );
      } else {
        setError(data?.message || "Failed to update status");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setActingId(null);
    }
  };

  const filtered = tab === "all" ? items : items.filter((it) => it.status === tab);
  const counts = {
    all: items.length,
    pending: items.filter((it) => it.status === "pending").length,
    approved: items.filter((it) => it.status === "approved").length,
    rejected: items.filter((it) => it.status === "rejected").length,
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 lg:pt-[88px]">
      <div className="bg-gradient-to-r from-[#1BD11B] to-[#57C785] px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Feedback Management</h1>
            <p className="text-white/90 text-sm mt-1">Signed in as {adminName}</p>
          </div>
          <button
            onClick={logout}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-4">
        <Link
          to="/admin/downloads"
          className="inline-block px-4 py-2 rounded-xl bg-white border-2 border-gray-200 text-gray-600 hover:border-green-300 font-semibold text-sm transition-all"
        >
          View Download Records →
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={
                "px-4 py-2 rounded-xl font-semibold text-sm border-2 transition-all " +
                (tab === t.key
                  ? "bg-gradient-to-r from-[#1BD11B] to-[#57C785] text-white border-transparent shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-300")
              }
            >
              {t.label} ({counts[t.key]})
            </button>
          ))}
          <button
            onClick={fetchFeedback}
            className="ml-auto px-4 py-2 rounded-xl font-semibold text-sm border-2 border-gray-200 bg-white text-gray-600 hover:border-green-300 transition-all"
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
            <p>Loading feedback...</p>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-medium">No feedback in this category.</div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="space-y-4">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="text-sm text-gray-500">{item.email}</p>
                  <div className="mt-1.5">
                    <Stars rating={item.rating || 0} />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">{item.message}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Submitted {formatDate(item.createdAt)}
                    {item.reviewedAt ? ` · Reviewed ${formatDate(item.reviewedAt)}` : ""}
                  </p>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0">
                  <button
                    onClick={() => updateStatus(item._id, "approved")}
                    disabled={actingId === item._id || item.status === "approved"}
                    className={
                      "px-4 py-2 rounded-xl text-sm font-semibold transition-all " +
                      (item.status === "approved"
                        ? "bg-green-100 text-green-400 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700")
                    }
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(item._id, "rejected")}
                    disabled={actingId === item._id || item.status === "rejected"}
                    className={
                      "px-4 py-2 rounded-xl text-sm font-semibold transition-all " +
                      (item.status === "rejected"
                        ? "bg-red-100 text-red-400 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700")
                    }
                  >
                    Reject
                  </button>
                  {item.status !== "pending" && (
                    <button
                      onClick={() => updateStatus(item._id, "pending")}
                      disabled={actingId === item._id}
                      className="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
