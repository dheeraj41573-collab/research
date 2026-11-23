import { useState } from "react";

function StarInput({ value, rating, onRate, readonly }) {
  const filled = value <= rating;
  return (
    <button
      type="button"
      disabled={readonly}
      onClick={() => !readonly && onRate(value)}
      className={(filled ? "text-yellow-400 " : "text-gray-300 ") + (readonly ? "cursor-default " : "cursor-pointer hover:scale-110 transition-transform ")}
      aria-label={`Rate ${value} star`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"/>
      </svg>
    </button>
  );
}

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", rating: 0, message: "" });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const setField = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
    setResult(null);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length > 100) e.name = "Name too long (max 100)";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter valid email";
    if (!form.rating || form.rating < 1 || form.rating > 5) e.rating = "Please select a rating (1-5)";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length > 2000) e.message = "Message too long (max 2000)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    setResult(null);
    try {
      const base = (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");
      const url = `${base}/api/feedback`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          rating: Number(form.rating),
          message: form.message.trim(),
        }),
      });
      const data = await resp.json().catch(() => ({}));
      if (resp.ok && data?.success) {
        setResult({ type: "success", message: data.message || "Thanks! Your feedback is awaiting approval." });
        setForm({ name: "", email: "", rating: 0, message: "" });
      } else {
        setResult({ type: "error", message: data?.message || "Failed to submit feedback. Try again." });
      }
    } catch (err) {
      setResult({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const displayRating = hoverRating || form.rating;

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#1BD11B] to-[#57C785] px-6 py-5 md:px-8 md:py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Share Your Feedback</h2>
          <p className="text-white/90 text-sm md:text-base mt-1">
            We value your opinion. Your feedback will be published after admin review.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 md:px-8 md:py-7 space-y-5" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-sm md:text-base font-semibold text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                maxLength={100}
                placeholder="Your full name"
                className={"w-full rounded-xl border-2 px-4 py-2.5 md:py-3 outline-none transition-all " +
                  (errors.name ? "border-red-400 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500 bg-green-50/40")}
              />
              {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm md:text-base font-semibold text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                maxLength={150}
                placeholder="you@example.com"
                className={"w-full rounded-xl border-2 px-4 py-2.5 md:py-3 outline-none transition-all " +
                  (errors.email ? "border-red-400 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500 bg-green-50/40")}
              />
              {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm md:text-base font-semibold text-gray-700">
              Rating <span className="text-red-500">*</span>
            </label>
            <div
              className="flex items-center gap-2 p-3 rounded-xl bg-green-50/40 border-2 border-gray-200"
              onMouseLeave={() => setHoverRating(0)}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  onMouseEnter={() => setHoverRating(n)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  <StarInput
                    value={n}
                    rating={displayRating}
                    onRate={(v) => setField("rating", v)}
                    readonly={false}
                  />
                </div>
              ))}
              <span className="ml-3 text-sm md:text-base font-semibold text-gray-700">
                {displayRating > 0 ? `${displayRating} / 5` : "Tap a star"}
              </span>
            </div>
            {errors.rating && <p className="text-xs text-red-500 font-medium">{errors.rating}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm md:text-base font-semibold text-gray-700">
              Your Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setField("message", e.target.value)}
              maxLength={2000}
              rows={4}
              placeholder="Tell us about your experience with the FDP platform..."
              className={"w-full resize-y rounded-xl border-2 px-4 py-2.5 md:py-3 outline-none transition-all " +
                (errors.message ? "border-red-400 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500 bg-green-50/40")}
            />
            <div className="flex justify-between items-center">
              {errors.message
                ? <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                : <span className="text-xs text-gray-400"></span>}
              <p className="text-xs text-gray-500 font-medium">{form.message.length}/2000</p>
            </div>
          </div>

          {result && (
            <div
              role="alert"
              className={
                "rounded-xl px-4 py-3 font-medium text-sm md:text-base border " +
                (result.type === "success"
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-red-50 border-red-200 text-red-700")
              }
            >
              {result.message}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className={"px-8 py-2.5 md:py-3 rounded-xl text-white font-semibold text-base md:text-lg shadow-lg transition-all " +
                (submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#1BD11B] to-[#57C785] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0")}
            >
              {submitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
