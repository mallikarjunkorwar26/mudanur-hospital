import Button from "./Button.jsx";

export default function AppointmentCTA() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="section">
        <div className="reveal sheen overflow-hidden rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blueDark shadow-xl shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg lg:rounded-3xl">
          <div className="flex flex-col items-center justify-between gap-7 px-5 py-8 sm:px-8 sm:py-10 lg:flex-row lg:px-12 lg:py-12">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.15em]">
                24/7 Emergency & Appointments
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Need Medical Assistance?
              </h2>

              <p className="mt-3 text-sm leading-7 text-blue-100 lg:text-base">
                Consult our experienced specialists for quality healthcare. Book
                your appointment today or contact us immediately in case of an
                emergency.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="#consultation"
                variant="secondary"
                size="lg"
                className="w-full border-0 bg-white text-brand-blue hover:bg-slate-100 sm:w-auto"
              >
                Book Appointment
              </Button>

              <Button
                href="tel:+919886111864"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 98861 11864
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
