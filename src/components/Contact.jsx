import SectionHeading from './SectionHeading.jsx'

const INFO = [
  {
    label: 'Address',
    value: 'Kalyan Nagar, BLDE Hospital Road, Gacchinakatti Colony Cross, Vijayapura-586103',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Reception',
    value: '08352 260472 / 98867 34811',
    href: 'tel:+918352260472',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Emergency',
    value: '98867 34811',
    href: 'tel:+919886734811',
    badge: '24×7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '98867 34811',
    href: 'https://wa.me/919886734811',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.127 1.535 5.862L.057 23.428a.5.5 0 0 0 .515.572l5.736-1.502A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 0 1-5.002-1.368l-.36-.214-3.733.978.996-3.645-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'mudanurhospital@yahoo.co.in',
    href: 'mailto:mudanurhospital@yahoo.co.in',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'OPD Timings',
    value: '10:00 AM – 3:00 PM · 6:00 PM – 8:00 PM',
    sub: 'Closed on Sundays',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
]

const MAPS_URL =
  'https://www.google.com/maps/place/Mudanur+Maternity+Hospital/@16.8403303,75.7141077,17z/data=!4m14!1m7!3m6!1s0x3bc6558702c94b77:0x86dce452df0fbbaa!2sMudanur+Maternity+Hospital!8m2!3d16.8403252!4d75.7166826!16s%2Fg%2F1td0dz26!3m5!1s0x3bc6558702c94b77:0x86dce452df0fbbaa!8m2!3d16.8403252!4d75.7166826!16s%2Fg%2F1td0dz26?entry=ttu'

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="section">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Mudanur Hospital"
          description="Reach out for appointments, general queries or emergency assistance."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">

          {/* ── Left: Info cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {INFO.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                {/* Icon */}
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <span className="h-5 w-5">{item.icon}</span>
                </span>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </p>
                    {item.badge && (
                      <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-red-500 border border-red-100">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm font-semibold text-slate-800 transition-colors hover:text-blue-600 truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-slate-800 leading-snug">
                      {item.value}
                    </p>
                  )}

                  {item.sub && (
                    <p className="mt-0.5 text-xs text-slate-400">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Map ── */}
          <div className="lg:col-span-3 flex flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">

            {/* Map header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Our Location</h3>
                <p className="text-xs text-slate-500 mt-0.5">Vijayapura, Karnataka — 586103</p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-100"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Open in Maps
              </a>
            </div>

            {/* Embed */}
            <div className="relative flex-1 min-h-[360px]">
              <iframe
                title="Mudanur Hospital Map"
                src="https://www.google.com/maps?q=16.8403252,75.7166826&z=18&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Address strip */}
            <div className="flex items-center gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50">
              <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mudanur Multispeciality Hospital, Kalyan Nagar, BLDE Hospital Road, Gacchinakatti Colony Cross, Vijayapura-586103
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}