import { useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { apiRequest, downloadFile } from "../utils/api.js";

const STATUSES = ["Pending", "Confirmed", "Completed", "Cancelled"];

const statusClasses = {
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Confirmed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Completed: "bg-blue-50 text-blue-700 border-blue-200",
  Cancelled: "bg-red-50 text-red-700 border-red-200",
};

export default function AdminDashboard() {
  const [token, setToken] = useState(() => sessionStorage.getItem("adminToken") || "");
  const [loginForm, setLoginForm] = useState({ username: "admin", password: "admin" });
  const [loginLoading, setLoginLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState("");
  const [exporting, setExporting] = useState("");

  const fetchAppointments = async (query = search) => {
    if (!token) return;
    setLoading(true);
    setError("");
    try {
      const params = query ? `?search=${encodeURIComponent(query)}` : "";
      const data = await apiRequest(`/api/appointments${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments(data.appointments || []);
    } catch (err) {
      setError(err.message || "Unable to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchAppointments("");
  }, [token]);

  const login = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    setError("");
    try {
      const data = await apiRequest("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(loginForm),
      });
      sessionStorage.setItem("adminToken", data.token);
      setToken(data.token);
    } catch (err) {
      setError(err.message || "Unable to login");
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    setToken("");
    setAppointments([]);
    setSearch("");
  };

  const stats = useMemo(() => {
    return STATUSES.map((status) => ({
      status,
      count: appointments.filter((item) => item.status === status).length,
    }));
  }, [appointments]);

  const updateStatus = async (id, status) => {
    setSavingId(id);
    setError("");
    try {
      const data = await apiRequest(`/api/appointments/${id}/status`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      setAppointments((current) =>
        current.map((item) => (item._id === id ? data.appointment : item))
      );
    } catch (err) {
      setError(err.message || "Unable to update appointment status");
    } finally {
      setSavingId("");
    }
  };

  const exportAppointments = async (type) => {
    setExporting(type);
    setError("");
    try {
      await downloadFile(
        `/api/appointments/export/${type}`,
        token,
        type === "excel" ? "mudanur-appointments.xlsx" : "mudanur-appointments.pdf"
      );
    } catch (err) {
      setError(err.message || "Unable to export appointments");
    } finally {
      setExporting("");
    }
  };

  return (
    <section id="admin" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="section">
        <div className="reveal">
          <SectionHeading
            eyebrow="Admin Dashboard"
            title="Appointment Management"
            description="Search appointment requests, update status, and export hospital records."
          />
        </div>

        {!token ? (
          <form
            onSubmit={login}
            className="reveal mx-auto mt-10 max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft sm:p-7"
          >
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">
                Secure Admin Login
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Reception Access
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Use the temporary credentials admin / admin. You can change them
                later in the backend environment file.
              </p>
            </div>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Username
              <input
                type="text"
                value={loginForm.username}
                onChange={(event) =>
                  setLoginForm((current) => ({
                    ...current,
                    username: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-slate-700">
              Password
              <input
                type="password"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm((current) => ({
                    ...current,
                    password: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
              />
            </label>

            {error && (
              <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="mt-5 inline-flex min-h-[46px] w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-blueDark disabled:opacity-70"
            >
              {loginLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
        <div className="reveal mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-soft sm:p-6">
          <div className="mb-5 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Logged in as
              </p>
              <p className="font-bold text-slate-900">admin</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
            >
              Logout
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.status} className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {item.status}
                </p>
                <p className="mt-2 text-2xl font-bold text-brand-ink">{item.count}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <form
              className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                fetchAppointments(search);
              }}
            >
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by Appointment ID, Name, or Mobile Number"
                className="min-h-[44px] min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
              />
              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blueDark"
              >
                Search
              </button>
            </form>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => exportAppointments("excel")}
                disabled={exporting === "excel"}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-brand-line bg-white px-4 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue"
              >
                {exporting === "excel" ? "Exporting..." : "Export Excel"}
              </button>
              <button
                type="button"
                onClick={() => exportAppointments("pdf")}
                disabled={exporting === "pdf"}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-brand-line bg-white px-4 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue"
              >
                {exporting === "pdf" ? "Exporting..." : "Export PDF"}
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-[980px] w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Appointment ID</th>
                    <th className="px-4 py-3">Patient</th>
                    <th className="px-4 py-3">Mobile</th>
                    <th className="px-4 py-3">Preferred</th>
                    <th className="px-4 py-3">Reason</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td className="px-4 py-8 text-center text-slate-500" colSpan="6">
                        Loading appointments...
                      </td>
                    </tr>
                  ) : appointments.length === 0 ? (
                    <tr>
                      <td className="px-4 py-8 text-center text-slate-500" colSpan="6">
                        No appointments found.
                      </td>
                    </tr>
                  ) : (
                    appointments.map((item) => (
                      <tr key={item._id} className="align-top">
                        <td className="px-4 py-4 font-semibold text-brand-blue">
                          {item.appointmentId}
                        </td>
                        <td className="px-4 py-4">
                          <p className="font-semibold text-slate-900">{item.patientName}</p>
                          <p className="text-xs text-slate-500">
                            {item.age} yrs | {item.gender}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-slate-600">
                          <p>{item.mobileNumber}</p>
                          {item.email && <p className="text-xs">{item.email}</p>}
                        </td>
                        <td className="px-4 py-4 text-slate-600">
                          <p>{item.preferredDate}</p>
                          <p className="text-xs">{item.preferredTime}</p>
                        </td>
                        <td className="max-w-xs px-4 py-4 text-slate-600">
                          {item.reasonForVisit}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-2">
                            <span
                              className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses[item.status]}`}
                            >
                              {item.status}
                            </span>
                            <select
                              value={item.status}
                              disabled={savingId === item._id}
                              onChange={(event) => updateStatus(item._id, event.target.value)}
                              className="min-h-[40px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold outline-none focus:border-brand-teal"
                            >
                              {STATUSES.map((status) => (
                                <option key={status}>{status}</option>
                              ))}
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
