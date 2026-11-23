import { useState } from "react";
import { Link } from "react-router-dom";

const THEMES = {
  violet: {
    shell: "from-violet-50 via-white to-indigo-100",
    badge: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
    accent: "text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
    panel: "border-violet-100 bg-white/95",
  },
  emerald: {
    shell: "from-emerald-50 via-white to-lime-100",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    accent: "text-emerald-700",
    button: "bg-emerald-600 hover:bg-emerald-700",
    panel: "border-emerald-100 bg-white/95",
  },
  amber: {
    shell: "from-amber-50 via-white to-orange-100",
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    accent: "text-amber-700",
    button: "bg-amber-600 hover:bg-amber-700",
    panel: "border-amber-100 bg-white/95",
  },
};

export default function CitationPage({
  shortName,
  databaseName,
  modulePath,
  moduleLabel,
  paperTitle,
  paperLink,
  description,
  citations,
  theme = "emerald",
}) {
  const [copiedStyle, setCopiedStyle] = useState("");
  const currentTheme = THEMES[theme] ?? THEMES.emerald;

  const handleCopy = async (style, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStyle(style);
      window.setTimeout(() => {
        setCopiedStyle((currentValue) =>
          currentValue === style ? "" : currentValue
        );
      }, 1600);
    } catch (error) {
      console.error("Unable to copy citation", error);
    }
  };

  return (
    <section
      className={`min-h-screen bg-gradient-to-br ${currentTheme.shell} px-4 pb-16 pt-28 sm:px-6 lg:px-8`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div
          className={`overflow-hidden rounded-[28px] border ${currentTheme.border} ${currentTheme.panel} shadow-[0_20px_60px_rgba(15,23,42,0.08)]`}
        >
          <div className="flex flex-col gap-6 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4">
                <span
                  className={`inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] ${currentTheme.badge}`}
                >
                  {shortName} Cite This As
                </span>
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                    Cite {databaseName} in your manuscript
                  </h1>
                  <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {description}
                  </p>
                </div>
              </div>

             
            </div>

            <div className="rounded-3xl border border-white/70 bg-slate-900 px-5 py-5 text-white shadow-lg sm:px-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                Published Paper
              </p>
              <h2 className="mt-2 text-lg font-semibold leading-8 sm:text-2xl">
                {paperTitle}
              </h2>
              
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {citations.map(({ style, text, displayText }) => (
            <article
              key={style}
              className={`rounded-[24px] border ${currentTheme.border} ${currentTheme.panel} p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6`}
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-semibold ${currentTheme.badge}`}
                >
                  {style}
                </span>

              </div>

              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                {displayText ?? text}
                {paperLink ? (
                <a
                  href={paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex break-all text-sm font-medium text-blue-800 underline underline-offset-4 transition hover:text-sky-200"
                >
                  {paperLink}
                </a>
              ) : null}
              </p>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
