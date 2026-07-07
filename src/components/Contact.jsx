import SectionHeading from "./SectionHeading.jsx";

const MAPS_URL =
  "https://www.google.com/maps/place/Mudanur+Maternity+Hospital/@16.8403303,75.7141077,17z/data=!4m14!1m7!3m6!1s0x3bc6558702c94b77:0x86dce452df0fbbaa!2sMudanur+Maternity+Hospital!8m2!3d16.8403252!4d75.7166826!16s%2Fg%2F1td0dz26!3m5!1s0x3bc6558702c94b77:0x86dce452df0fbbaa!8m2!3d16.8403252!4d75.7166826!16s%2Fg%2F1td0dz26?entry=ttu";

const INFO = [
  {
    label: "Address",
    value:
      "Kalyan Nagar, BLDE Hospital Road, Gacchinakatti Colony Cross, Vijayapura-586103",
    icon: "location",
  },
  {
    label: "Reception",
    value: "08352 260472 / 98867 34811",
    href: "tel:+918352260472",
    icon: "phone",
  },
  {
    label: "Emergency",
    value: "98867 34811",
    href: "tel:+919886734811",
    badge: "24/7",
    icon: "phone",
  },
  {
    label: "WhatsApp",
    value: "98867 34811",
    href: "https://wa.me/919886734811",
    icon: "whatsapp",
  },
  {
    label: "Email",
    value: "mudanurhospital@yahoo.co.in",
    href: "mailto:mudanurhospital@yahoo.co.in",
    icon: "mail",
  },
  {
    label: "OPD Timings",
    value: "10:00 AM - 3:00 PM | 6:00 PM - 8:00 PM",
    sub: "Closed on Sundays",
    icon: "clock",
  },
];

function InfoIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "location") {
    return (
      <svg {...common}>
        <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15c-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
        <path d="M12 0a12 12 0 0 0-10.46 17.86L.06 23.43a.5.5 0 0 0 .51.57l5.74-1.5A12 12 0 1 0 12 0zm0 21.82a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.73.98 1-3.65-.24-.37A9.82 9.82 0 1 1 12 21.82z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-14 sm:py-20 lg:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Mudanur Hospital"
          description="Reach out for appointments, general queries or emergency assistance."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="flex min-w-0 flex-col gap-3 md:col-span-2 lg:col-span-2">
            {INFO.map((item) => (
              <div
                key={item.label}
                className="group flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:gap-4 sm:px-5 sm:py-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white sm:h-10 sm:w-10">
                  <span className="h-4 w-4 sm:h-5 sm:w-5">
                    <InfoIcon name={item.icon} />
                  </span>
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </p>
                    {item.badge && (
                      <span className="rounded-full border border-red-100 bg-red-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-red-500">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block break-words text-xs font-semibold leading-snug text-slate-800 transition-colors hover:text-blue-600 sm:text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words text-xs font-semibold leading-snug text-slate-800 sm:text-sm">
                      {item.value}
                    </p>
                  )}

                  {item.sub && (
                    <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:col-span-2 lg:col-span-3 lg:rounded-3xl">
            <div className="flex flex-col items-start justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:px-6 sm:py-5">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Our Location
                </h3>
                <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                  Vijayapura, Karnataka - 586103
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95 sm:w-auto"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Open in Maps
              </a>
            </div>

            <div className="relative min-h-[280px] flex-1 sm:min-h-[360px] lg:min-h-[460px]">
              <iframe
                title="Mudanur Hospital Map"
                src="https://www.google.com/maps?q=16.8403252,75.7166826&z=18&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="flex items-start gap-3 border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-6">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              <p className="break-words text-xs leading-relaxed text-slate-500">
                Mudanur Multispeciality Hospital, Kalyan Nagar, BLDE Hospital
                Road, Gacchinakatti Colony Cross, Vijayapura-586103
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
