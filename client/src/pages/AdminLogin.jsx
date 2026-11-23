import { useState } from "react";
import { useNavigate } from "react-router-dom";

const getBase = () => (import.meta.env.VITE_APP_URI_API || "").toString().replace(/\/+$/, "");

export default function AdminLogin() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // "login" | "register"

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const switchMode = (next) => {
    setMode(next);
    setError("");
    setSuccess("");
  };

  const setLoginField = (key, value) => {
    setLoginForm((p) => ({ ...p, [key]: value }));
    setError("");
  };

  const setRegisterField = (key, value) => {
    setRegisterForm((p) => ({ ...p, [key]: value }));
    setError("");
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    if (submitting) return;

    if (!loginForm.email.trim() || !loginForm.password) {
      setError("Email and password are required");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const resp = await fetch(`${getBase()}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginForm.email.trim(),
          password: loginForm.password,
        }),
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || !data?.token) {
        setError(data?.message || "Login failed. Check your credentials.");
        setSubmitting(false);
        return;
      }

      if (data.role !== "admin") {
        setError("This account does not have admin access.");
        setSubmitting(false);
        return;
      }

      localStorage.setItem("fdp_admin_token", data.token);
      localStorage.setItem("fdp_admin_role", data.role);
      localStorage.setItem("fdp_admin_name", data.name || "");

      navigate("/admin/feedback", { replace: true });
    } catch (err) {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  const handleRegister = async (ev) => {
    ev.preventDefault();
    if (submitting) return;

    const { name, email, password, confirmPassword } = registerForm;

    if (!name.trim() || !email.trim() || !password) {
      setError("All fields are required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const resp = await fetch(`${getBase()}/api/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
        }),
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        setError(data?.message || "Registration failed");
        setSubmitting(false);
        return;
      }

      setSuccess("Account created. This account does not have admin access.");
      setRegisterForm({ name: "", email: "", password: "", confirmPassword: "" });
      setSubmitting(false);
    } catch (err) {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#1BD11B] to-[#57C785] px-6 py-6">
          <h1 className="text-2xl font-bold text-white">
            {mode === "login" ? "Admin Login" : "User Registration"}
          </h1>
          <p className="text-white/90 text-sm mt-1">FDP Feedback Management</p>
        </div>

        <div className="flex border-b border-gray-100">
          <button
            type="button"
            onClick={() => switchMode("login")}
            className={
              "flex-1 py-3 text-sm font-semibold transition-all " +
              (mode === "login"
                ? "text-green-700 border-b-2 border-green-600"
                : "text-gray-400 hover:text-gray-600")
            }
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => switchMode("register")}
            className={
              "flex-1 py-3 text-sm font-semibold transition-all " +
              (mode === "register"
                ? "text-green-700 border-b-2 border-green-600"
                : "text-gray-400 hover:text-gray-600")
            }
          >
            Register
          </button>
        </div>

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="px-6 py-6 space-y-4" noValidate>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginField("email", e.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 outline-none focus:border-green-500 bg-green-50/40 transition-all"
                autoComplete="username"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginField("password", e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 outline-none focus:border-green-500 bg-green-50/40 transition-all"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="rounded-xl px-4 py-3 font-medium text-sm border bg-red-50 border-red-200 text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={
                "w-full py-2.5 rounded-xl text-white font-semibold shadow-lg transition-all " +
                (submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#1BD11B] to-[#57C785] hover:shadow-xl")
              }
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="px-6 py-6 space-y-4" noValidate>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterField("name", e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 outline-none focus:border-green-500 bg-green-50/40 transition-all"
                autoComplete="name"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterField("email", e.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 outline-none focus:border-green-500 bg-green-50/40 transition-all"
                autoComplete="username"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                value={registerForm.password}
                onChange={(e) => setRegisterField("password", e.target.value)}
                placeholder="At least 6 characters"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 outline-none focus:border-green-500 bg-green-50/40 transition-all"
                autoComplete="new-password"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterField("confirmPassword", e.target.value)}
                placeholder="Re-enter password"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 outline-none focus:border-green-500 bg-green-50/40 transition-all"
                autoComplete="new-password"
              />
            </div>

            <p className="text-xs text-gray-500">
              This creates a regular account and does not provide admin access.
            </p>

            {error && (
              <div className="rounded-xl px-4 py-3 font-medium text-sm border bg-red-50 border-red-200 text-red-700">
                {error}
              </div>
            )}
            {success && (
              <div className="rounded-xl px-4 py-3 font-medium text-sm border bg-green-50 border-green-200 text-green-700">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={
                "w-full py-2.5 rounded-xl text-white font-semibold shadow-lg transition-all " +
                (submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#1BD11B] to-[#57C785] hover:shadow-xl")
              }
            >
              {submitting ? "Creating account..." : "Create Account"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
