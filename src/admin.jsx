import React from "react";
import ReactDOM from "react-dom/client";
import AdminDashboard from "./components/AdminDashboard.jsx";
import Logo from "./components/Logo.jsx";
import "./index.css";

function AdminApp() {
  return (
    <div className="min-h-screen bg-slate-50 text-brand-ink">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="section flex min-h-20 items-center justify-between gap-4 py-2">
          <Logo compact />
          <a
            href="./"
            className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-brand-line px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-surface"
          >
            Public Website
          </a>
        </div>
      </header>

      <main>
        <AdminDashboard />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("admin-root")).render(
  <React.StrictMode>
    <AdminApp />
  </React.StrictMode>
);
