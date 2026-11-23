import { useState, useEffect } from "react";

function Stars({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          xmlns="http://www.w3.org/2000/svg"
          className={"w-4 h-4 md:w-5 md:h-5 " + (n <= rating ? "text-yellow-400" : "text-gray-300")}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

const AVATAR_BG = [
  "bg-gradient-to-br from-pink-400 to-rose-500",
  "bg-gradient-to-br from-purple-400 to-indigo-500",
  "bg-gradient-to-br from-blue-400 to-cyan-500",
  "bg-gradient-to-br from-emerald-400 to-teal-500",
  "bg-gradient-to-br from-amber-400 to-orange-500",
  "bg-gradient-to-br from-fuchsia-400 to-pink-500",
  "bg-gradient-to-br from-lime-400 to-green-500",
  "bg-gradient-to-br from-violet-400 to-purple-500",
];

export default function ApprovedFeedbackList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleStart, setVisibleStart] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const computePerPage = () => {
      if (typeof window !== "undefined") {
        const w = window.innerWidth;
        if (w < 768) setPerPage(1);
        else if (w < 1024) setPerPage(2);
        else setPerPage(3);
      }
    };
    computePerPage();
    window.addEventListener("resize", computePerPage);
    return () => window.removeEventListener("resize", computePerPage);
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const base = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");
        const url = `${base}/api/feedback/approved?limit=50`;
        const resp = await fetch(url);
        const data = await resp.json().catch(() => ({}));
        if (resp.ok && data?.success && Array.isArray(data.data)) {
          setItems(data.data);
        } else {
          setItems([]);
        }
      } catch (err) {
        setError("Unable to load feedback right now.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const total = items.length;

  useEffect(() => {
    if (isPaused || total <= perPage) return undefined;

    const timer = window.setInterval(() => {
      setVisibleStart((start) => {
        const nextStart = start + perPage;
        return nextStart >= total ? 0 : nextStart;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, perPage, total]);

  const visibleEnd = Math.min(visibleStart + perPage, total);

  const prev = () => {
    if (visibleStart === 0) {
      const lastFull = Math.max(0, total - perPage);
      setVisibleStart(lastFull);
    } else {
      setVisibleStart((s) => Math.max(0, s - perPage));
    }
  };
  const next = () => {
    const nextStart = visibleStart + perPage;
    if (nextStart >= total) {
      setVisibleStart(0);
    } else {
      setVisibleStart(nextStart);
    }
  };

  const visibleItems = items.slice(visibleStart, visibleEnd);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#1BD11B] to-[#57C785] px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Users Say</h2>
            <p className="text-white/90 text-sm md:text-base mt-1">
              Approved feedback from our community
            </p>
          </div>
          {total > 0 && (
            <div className="text-white/95 font-semibold text-sm md:text-base">
              Showing <span className="text-white font-bold">{Math.max(total, 0)}</span> review{total === 1 ? "" : "s"}
            </div>
          )}
        </div>

        <div className="px-6 py-6 md:px-8 md:py-7">
          {loading && (
            <div className="text-center py-12 text-gray-500 font-medium">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent mb-3"></div>
              <p>Loading feedback...</p>
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-10 text-red-500 font-medium">
              {error}
            </div>
          )}

          {!loading && !error && total === 0 && (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <p className="text-gray-500 font-medium text-lg">
                No approved reviews yet. Be the first to share your feedback!
              </p>
            </div>
          )}

          {!loading && !error && total > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleItems.map((item, idx) => {
                  const bgClass = AVATAR_BG[(visibleStart + idx) % AVATAR_BG.length];
                  return (
                    <article
                      key={item._id || `${visibleStart}-${idx}`}
                      className="flex flex-col rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full ${bgClass} text-white font-bold text-lg md:text-xl flex items-center justify-center shadow-md`}>
                          {getInitials(item.name)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 text-base md:text-lg truncate">
                            {item.name}
                          </h3>
                          <div className="mt-1">
                            <Stars rating={item.rating || 0} />
                          </div>
                          {item.createdAt && (
                            <p className="text-xs text-gray-500 mt-1">
                              {formatDate(item.createdAt)}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm md:text-base italic leading-relaxed flex-1">
                        &ldquo;{item.message}&rdquo;
                      </p>
                    </article>
                  );
                })}
              </div>

              {total > perPage && (
                <div className="mt-7 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous feedback"
                    className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#1BD11B] to-[#57C785] text-white shadow-md hover:shadow-lg hover:-translate-x-0.5 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>

                  <div className="flex items-center gap-1.5 md:gap-2 flex-wrap justify-center">
                    {Array.from({ length: Math.ceil(total / perPage) }).map((_, pageIdx) => {
                      const startOfPage = pageIdx * perPage;
                      const active = startOfPage === visibleStart;
                      return (
                        <button
                          key={pageIdx}
                          onClick={() => setVisibleStart(startOfPage)}
                          aria-label={`Go to page ${pageIdx + 1}`}
                          className={
                            "rounded-full transition-all duration-200 " +
                            (active
                              ? "w-8 h-2.5 md:w-10 md:h-3 bg-gradient-to-r from-[#1BD11B] to-[#57C785] shadow-sm"
                              : "w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-300 hover:bg-gray-400")
                          }
                        />
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next feedback"
                    className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#1BD11B] to-[#57C785] text-white shadow-md hover:shadow-lg hover:translate-x-0.5 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
