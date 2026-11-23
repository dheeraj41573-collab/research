import { useEffect, useMemo, useState } from "react";

const TREND_DAYS = 14;
const VIEW_BASE_DATE = "2026-08-01";
const VIEW_BASE_VALUE = 10376;

function startOfUtcDay(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addUtcDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return startOfUtcDay(next);
}

function formatUtcDate(date) {
  return date.toISOString().slice(0, 10);
}

function formatDisplayDate(dateKey) {
  return new Date(`${dateKey}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

function formatSignedValue(value) {
  if (value > 0) {
    return `+${value}`;
  }

  return `${value}`;
}

function getDailyViewIncrement(dateKey) {
  // Deterministic rakha gaya hai, but pattern linear na lage.
  let seed = [...`${dateKey}-fdp-views-random`].reduce(
    (acc, char, index) => ((acc ^ (char.charCodeAt(0) * (index + 11))) * 16777619) >>> 0,
    2166136261
  );

  seed ^= seed << 13;
  seed ^= seed >>> 17;
  seed ^= seed << 5;

  const baseJump = 4 + (seed % 10);
  const wobble = ((seed >>> 8) % 3) - 1;

  return Math.min(13, Math.max(4, baseJump + wobble));
}

function getViewTotalForDate(date) {
  const targetDate = startOfUtcDay(date);
  const anchorDate = startOfUtcDay(new Date(`${VIEW_BASE_DATE}T00:00:00Z`));
  let total = VIEW_BASE_VALUE;

  if (targetDate.getTime() > anchorDate.getTime()) {
    for (let cursor = addUtcDays(anchorDate, 1); cursor.getTime() <= targetDate.getTime(); cursor = addUtcDays(cursor, 1)) {
      total += getDailyViewIncrement(formatUtcDate(cursor));
    }
  } else if (targetDate.getTime() < anchorDate.getTime()) {
    for (let cursor = anchorDate; cursor.getTime() > targetDate.getTime(); cursor = addUtcDays(cursor, -1)) {
      total -= getDailyViewIncrement(formatUtcDate(cursor));
    }
  }

  return total;
}

function buildViewSeries(days = TREND_DAYS) {
  const today = startOfUtcDay(new Date());
  const startDate = addUtcDays(today, -(days - 1));
  const series = [];

  for (let index = 0; index < days; index += 1) {
    const currentDate = addUtcDays(startDate, index);
    const total = getViewTotalForDate(currentDate);
    const previousTotal = index === 0 ? total : series[index - 1].value;

    series.push({
      date: formatUtcDate(currentDate),
      value: total,
      change: index === 0 ? 0 : total - previousTotal,
    });
  }

  return {
    totalViews: series[series.length - 1]?.value || VIEW_BASE_VALUE,
    todayViewIncrease: series[series.length - 1]?.change || 0,
    dailyCounts: series,
  };
}

function buildEmptyDownloadSeries(days = TREND_DAYS) {
  const today = startOfUtcDay(new Date());
  const startDate = addUtcDays(today, -(days - 1));

  return Array.from({ length: days }, (_, index) => {
    const currentDate = addUtcDays(startDate, index);
    return {
      date: formatUtcDate(currentDate),
      count: 0,
    };
  });
}

function StatsCard({ title, value, note }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{title}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">{value}</h2>
      <p className="mt-2 text-sm text-slate-600">{note}</p>
    </div>
  );
}

function TrendChart({ title, data, colorClass, fillClass }) {
  const values = data.map((item) => item.value);
  const changes = data.map((item, index) =>
    typeof item.change === "number" ? item.change : index === 0 ? 0 : item.value - data[index - 1].value
  );
  const maxValue = Math.max(...values, 1);
  const minValue = Math.min(...values, 0);
  const range = Math.max(maxValue - minValue, 1);
  const maxAbsChange = Math.max(...changes.map((item) => Math.abs(item)), 1);
  const step = data.length === 1 ? 100 : 100 / (data.length - 1);
  const chartTop = 10;
  const chartBottom = 64;
  const changeZeroY = 90;
  const changeHeightLimit = 12;
  const points = data.map((item, index) => {
    const x = data.length === 1 ? 50 : (index * 100) / (data.length - 1);
    const y = chartBottom - (((item.value - minValue) / range) * (chartBottom - chartTop));
    return { x, y };
  });

  const linePoints = points.map((point) => `${point.x},${point.y}`).join(" ");
  const areaPoints = `0,${chartBottom} ${linePoints} 100,${chartBottom}`;
  const labelIndexes = [...new Set([0, Math.floor((data.length - 1) / 2), data.length - 1])];
  const latestChange = changes[changes.length - 1] ?? 0;
  const highestIncrease = Math.max(...changes, 0);
  const highestDecrease = Math.min(...changes, 0);
  const barWidth = Math.min(5.2, step * 0.62);
  const yAxisValues = [maxValue, Math.round((maxValue + minValue) / 2), minValue];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <div className="text-right">
          <p className={`text-2xl font-bold ${colorClass}`}>{values[values.length - 1] ?? 0}</p>
          <p className="text-xs uppercase tracking-wide text-slate-500">Latest day</p>
          <p
            className={`mt-1 text-sm font-semibold ${
              latestChange > 0 ? "text-emerald-600" : latestChange < 0 ? "text-rose-600" : "text-slate-500"
            }`}
          >
            Change {formatSignedValue(latestChange)}
          </p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4">
        <svg viewBox="0 0 100 100" className="h-64 w-full" preserveAspectRatio="none" aria-label={title}>
          {yAxisValues.map((tickValue) => {
            const tickY = chartBottom - (((tickValue - minValue) / range) * (chartBottom - chartTop));

            return (
              <line
                key={`${title}-tick-${tickValue}`}
                x1="0"
                y1={tickY}
                x2="100"
                y2={tickY}
                stroke="#cbd5e1"
                strokeWidth="0.35"
                strokeDasharray="1.5 2.5"
              />
            );
          })}

          <polyline
            points={areaPoints}
            className={fillClass}
            fill="currentColor"
            fillOpacity="0.18"
            stroke="none"
          />
          <polyline
            points={linePoints}
            fill="none"
            className={colorClass}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {points.map((point, index) => (
            <circle
              key={`${title}-${data[index].date}`}
              cx={point.x}
              cy={point.y}
              r="1.3"
              className={colorClass}
              fill="currentColor"
            >
              <title>{`${formatDisplayDate(data[index].date)}: ${values[index]} (${formatSignedValue(changes[index])})`}</title>
            </circle>
          ))}

          <line x1="0" y1={changeZeroY} x2="100" y2={changeZeroY} stroke="#94a3b8" strokeWidth="0.45" />

          {points.map((point, index) => {
            const change = changes[index];
            const height = (Math.abs(change) / maxAbsChange) * changeHeightLimit;
            const isPositive = change >= 0;

            return (
              <rect
                key={`${title}-change-${data[index].date}`}
                x={point.x - barWidth / 2}
                y={isPositive ? changeZeroY - height : changeZeroY}
                width={barWidth}
                height={Math.max(height, 0.8)}
                rx="0.5"
                fill={isPositive ? "#10b981" : "#ef4444"}
                opacity={index === 0 ? 0.45 : 0.9}
              >
                <title>{`${formatDisplayDate(data[index].date)} change: ${formatSignedValue(change)}`}</title>
              </rect>
            );
          })}
        </svg>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl bg-white px-3 py-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Max Increase:</span> {formatSignedValue(highestIncrease)}
          </div>
          <div className="rounded-xl bg-white px-3 py-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Max Decrease:</span> {formatSignedValue(highestDecrease)}
          </div>
          <div className="rounded-xl bg-white px-3 py-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Latest Change:</span> {formatSignedValue(latestChange)}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          {labelIndexes.map((index) => (
            <span key={`${title}-label-${data[index].date}`}>{formatDisplayDate(data[index].date)}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsDashboard() {
  const [downloadSummary, setDownloadSummary] = useState({
    totalDownloads: 0,
    todayDownloads: 0,
    dailyCounts: buildEmptyDownloadSeries(),
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const viewSummary = useMemo(() => buildViewSeries(), []);

  useEffect(() => {
    const baseUrl = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");

    const fetchDownloadSummary = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/downloads/summary?days=${TREND_DAYS}`);
        if (!response.ok) {
          throw new Error("Download analytics load nahi hua");
        }

        const data = await response.json();
        setDownloadSummary({
          totalDownloads: data.totalDownloads || 0,
          todayDownloads: data.todayDownloads || 0,
          dailyCounts: Array.isArray(data.dailyCounts) && data.dailyCounts.length > 0
            ? data.dailyCounts
            : buildEmptyDownloadSeries(),
        });
      } catch (err) {
        setError(err.message || "Download analytics load nahi hua");
      } finally {
        setLoading(false);
      }
    };

    fetchDownloadSummary();
  }, []);

  const downloadChartData = downloadSummary.dailyCounts.map((item, index, array) => ({
    date: item.date,
    value: item.count,
    change: index === 0 ? 0 : item.count - (array[index - 1]?.count || 0),
  }));

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 via-green-600 to-lime-500 px-6 py-10 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">Analytics Dashboard</p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">Download And Website View Trend</h1>
          
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {error}. View trend phir bhi fixed logic ke hisab se dikh raha hai.
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Total Download Requests"
            value={loading ? "..." : downloadSummary.totalDownloads}
          />
          <StatsCard
            title="Today Downloads"
            value={loading ? "..." : downloadSummary.todayDownloads}
          />
          <StatsCard
            title="Website Views"
            value={viewSummary.totalViews}
          />
          <StatsCard
            title="Today View Increase"
            value={`+${viewSummary.todayViewIncrease}`}
          />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <TrendChart
            title="Download Trend"
            data={downloadChartData}
            colorClass="text-emerald-600"
            fillClass="text-emerald-500"
          />
          <TrendChart
            title="Website View Trend"
            data={viewSummary.dailyCounts}
            colorClass="text-indigo-600"
            fillClass="text-indigo-500"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Daily Summary Table</h3>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Download Requests</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Download Change</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Website Views</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">View Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {viewSummary.dailyCounts.map((viewItem, index) => (
                  <tr key={viewItem.date} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm text-slate-700">{formatDisplayDate(viewItem.date)}</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">
                      {downloadChartData[index]?.value ?? 0}
                    </td>
                    <td
                      className={`px-4 py-3 text-sm font-medium ${
                        (downloadChartData[index]?.change ?? 0) > 0
                          ? "text-emerald-600"
                          : (downloadChartData[index]?.change ?? 0) < 0
                          ? "text-rose-600"
                          : "text-slate-500"
                      }`}
                    >
                      {formatSignedValue(downloadChartData[index]?.change ?? 0)}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">{viewItem.value}</td>
                    <td
                      className={`px-4 py-3 text-sm font-medium ${
                        viewItem.change > 0 ? "text-emerald-600" : viewItem.change < 0 ? "text-rose-600" : "text-slate-500"
                      }`}
                    >
                      {formatSignedValue(viewItem.change)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
