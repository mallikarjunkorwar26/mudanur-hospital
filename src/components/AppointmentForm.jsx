import { useMemo, useState } from "react";
import HospitalLogo from "../images/Mudanur Logo.png";
import { apiRequest } from "../utils/api.js";

const initialForm = {
  patientName: "",
  mobileNumber: "",
  email: "",
  age: "",
  gender: "",
  preferredDate: "",
  preferredTime: "",
  reasonForVisit: "",
  additionalMessage: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10";

const labelClass = "block text-sm font-semibold text-slate-700";

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function validateForm(values) {
  const errors = {};

  if (!values.patientName.trim()) errors.patientName = "Full Name is required";
  if (!values.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile Number is required";
  } else if (!/^[6-9]\d{9}$/.test(values.mobileNumber.trim())) {
    errors.mobileNumber = "Enter a valid 10 digit Indian mobile number";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!values.age) {
    errors.age = "Age is required";
  } else if (Number(values.age) < 1 || Number(values.age) > 130) {
    errors.age = "Enter a valid age";
  }

  if (!values.gender) errors.gender = "Gender is required";
  if (!values.preferredDate) errors.preferredDate = "Preferred Appointment Date is required";
  if (!values.preferredTime) errors.preferredTime = "Preferred Appointment Time is required";
  if (!values.reasonForVisit.trim()) {
    errors.reasonForVisit = "Reason for Visit / Symptoms is required";
  }

  return errors;
}

function ErrorText({ children }) {
  if (!children) return null;
  return <p className="mt-1 text-xs font-medium text-red-600">{children}</p>;
}

function Spinner() {
  return (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
  );
}

function AppointmentSlip({ appointment }) {
  if (!appointment) return null;

  return (
    <div id="appointment-slip" className="bg-white p-6 text-slate-900">
      <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
        <img src={HospitalLogo} alt="Mudanur Hospital logo" className="h-16 w-auto" />
        <div>
          <h2 className="text-xl font-bold text-brand-blue">
            Mudanur Multispeciality Hospital
          </h2>
          <p className="text-sm text-slate-500">Appointment Slip</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <p><strong>Appointment ID:</strong> {appointment.appointmentId}</p>
        <p><strong>Booking Date:</strong> {new Date(appointment.bookingDate).toLocaleString("en-IN")}</p>
        <p><strong>Patient Name:</strong> {appointment.patientName}</p>
        <p><strong>Mobile Number:</strong> {appointment.mobileNumber}</p>
        <p><strong>Age:</strong> {appointment.age}</p>
        <p><strong>Gender:</strong> {appointment.gender}</p>
        <p><strong>Preferred Date:</strong> {appointment.preferredDate}</p>
        <p><strong>Preferred Time:</strong> {appointment.preferredTime}</p>
        <p className="sm:col-span-2">
          <strong>Reason for Visit:</strong> {appointment.reasonForVisit}
        </p>
      </div>
    </div>
  );
}

function SuccessModal({ appointment, onClose }) {
  const printSlip = () => {
    const slip = document.getElementById("appointment-slip");
    if (!slip) return;

    const printWindow = window.open("", "_blank", "width=900,height=700");
    printWindow.document.write(`
      <html>
        <head>
          <title>Appointment Slip - ${appointment.appointmentId}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; }
            img { max-height: 72px; }
            .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
            @media print { button { display: none; } }
          </style>
        </head>
        <body>${slip.innerHTML}<script>window.print();</script></body>
      </html>
    `);
    printWindow.document.close();
  };

  if (!appointment) return null;

  return (
    <div className="fixed inset-0 z-[80] flex animate-fadeIn items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-2xl animate-fadeUp overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="bg-gradient-to-r from-brand-blue to-brand-teal px-5 py-5 text-white sm:px-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/25">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-bold">
                Appointment Request Submitted Successfully
              </h3>
              <p className="mt-1 text-sm text-white/90">
                Mudanur Multispeciality Hospital
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-5 py-6 text-sm leading-7 text-slate-600 sm:px-7">
          <p>
            Dear <strong className="text-slate-900">{appointment.patientName}</strong>,
          </p>
          <p>
            Thank you for choosing Mudanur Multispeciality Hospital. Your
            appointment request has been received successfully.
          </p>

          <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Appointment ID</p>
              <p className="font-bold text-brand-blue">{appointment.appointmentId}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Preferred Date</p>
              <p className="font-semibold text-slate-900">{appointment.preferredDate}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Preferred Time</p>
              <p className="font-semibold text-slate-900">{appointment.preferredTime}</p>
            </div>
          </div>

          <p>
            Our reception team will review your request and contact you shortly
            to confirm your appointment. Please save your Appointment ID for
            future reference.
          </p>

          <p>
            <strong className="text-slate-900">Hospital Contact:</strong>{" "}
            +91 98867 34811
          </p>

          <p>Thank you for trusting us with your healthcare.</p>

          <div className="hidden">
            <AppointmentSlip appointment={appointment} />
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row">
            <button
              type="button"
              onClick={printSlip}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-blueDark"
            >
              Download Appointment Slip
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [appointment, setAppointment] = useState(null);
  const [genderOpen, setGenderOpen] = useState(false);

  const minDate = useMemo(() => todayDate(), []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setServerError("");

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    try {
      const data = await apiRequest("/api/appointments", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (!data.appointment) {
        throw new Error("Appointment response was incomplete");
      }
      setAppointment(data.appointment);
      setForm(initialForm);
    } catch (error) {
      setServerError(
        error.data?.message || error.message || "Unable to submit appointment"
      );
      if (error.data?.errors) setErrors(error.data.errors);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        id="consultation"
        onSubmit={submitForm}
        className="reveal mt-6 scroll-mt-32 rounded-[24px] border border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-softLg sm:mt-8 sm:p-6"
        style={{ "--reveal-delay": "240ms" }}
      >
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">
            Book Appointment
          </p>
          <h3 className="text-lg font-bold text-brand-ink sm:text-xl">
            Book your appointment with Mudanur Multispeciality Hospital
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            Share your details and our reception team will contact you shortly.
          </p>
        </div>

        {serverError && (
          <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {serverError}
          </div>
        )}

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className={`${labelClass} sm:col-span-2`}>
            Full Name <span className="text-red-500">*</span>
            <input
              type="text"
              value={form.patientName}
              onChange={(event) => updateField("patientName", event.target.value)}
              placeholder="Patient full name"
              className={inputClass}
            />
            <ErrorText>{errors.patientName}</ErrorText>
          </label>

          <label className={labelClass}>
            Mobile Number <span className="text-red-500">*</span>
            <input
              type="tel"
              value={form.mobileNumber}
              onChange={(event) => updateField("mobileNumber", event.target.value)}
              placeholder="9886734811"
              className={inputClass}
            />
            <ErrorText>{errors.mobileNumber}</ErrorText>
          </label>

          <label className={labelClass}>
            Email Address
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="patient@example.com"
              className={inputClass}
            />
            <ErrorText>{errors.email}</ErrorText>
          </label>

          <label className={labelClass}>
            Age <span className="text-red-500">*</span>
            <input
              type="number"
              min="1"
              max="130"
              value={form.age}
              onChange={(event) => updateField("age", event.target.value)}
              placeholder="Age"
              className={inputClass}
            />
            <ErrorText>{errors.age}</ErrorText>
          </label>

          <div className={labelClass}>
            Gender <span className="text-red-500">*</span>
            <div
              className="relative mt-2"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setGenderOpen(false);
                }
              }}
            >
              <button
                type="button"
                onClick={() => setGenderOpen((open) => !open)}
                className={`flex min-h-[46px] w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm shadow-sm outline-none transition-all duration-300 ${
                  genderOpen
                    ? "border-brand-teal ring-4 ring-brand-teal/10"
                    : "border-slate-200 hover:border-brand-teal/60"
                } ${form.gender ? "text-slate-900" : "text-slate-400"}`}
                aria-expanded={genderOpen}
              >
                <span>{form.gender || "Select gender"}</span>
                <svg
                  className={`h-4 w-4 text-brand-teal transition-transform duration-300 ${
                    genderOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-softLg transition-all duration-200 ${
                  genderOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                {["Male", "Female", "Other"].map((gender) => (
                  <button
                    type="button"
                    key={gender}
                    onClick={() => {
                      updateField("gender", gender);
                      setGenderOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors ${
                      form.gender === gender
                        ? "bg-brand-blue/10 font-semibold text-brand-blue"
                        : "text-slate-700 hover:bg-brand-surface"
                    }`}
                  >
                    {gender}
                    {form.gender === gender && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white">
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <ErrorText>{errors.gender}</ErrorText>
          </div>

          <label className={labelClass}>
            Preferred Appointment Date <span className="text-red-500">*</span>
            <input
              type="date"
              min={minDate}
              value={form.preferredDate}
              onChange={(event) => updateField("preferredDate", event.target.value)}
              className={inputClass}
            />
            <ErrorText>{errors.preferredDate}</ErrorText>
          </label>

          <label className={labelClass}>
            Preferred Appointment Time <span className="text-red-500">*</span>
            <input
              type="time"
              value={form.preferredTime}
              onChange={(event) => updateField("preferredTime", event.target.value)}
              className={inputClass}
            />
            <ErrorText>{errors.preferredTime}</ErrorText>
          </label>

          <label className={`${labelClass} sm:col-span-2`}>
            Reason for Visit / Symptoms <span className="text-red-500">*</span>
            <textarea
              rows="3"
              value={form.reasonForVisit}
              onChange={(event) => updateField("reasonForVisit", event.target.value)}
              placeholder="Please describe your symptoms or reason for visit"
              className={inputClass}
            />
            <ErrorText>{errors.reasonForVisit}</ErrorText>
          </label>

          <label className={`${labelClass} sm:col-span-2`}>
            Additional Message
            <textarea
              rows="2"
              value={form.additionalMessage}
              onChange={(event) => updateField("additionalMessage", event.target.value)}
              placeholder="Any additional information"
              className={inputClass}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="sheen mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blueDark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting && <Spinner />}
          {submitting ? "Submitting..." : "Book Appointment"}
        </button>
      </form>

      <SuccessModal
        appointment={appointment}
        onClose={() => setAppointment(null)}
      />
    </>
  );
}
