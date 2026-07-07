import HospitalPhoto from '../images/Hospital.jpeg'

const fieldClass =
  'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10'

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 lg:pt-[72px]">
      <div className="relative overflow-hidden">
        <div className="grid min-h-[320px] grid-cols-1 gap-0 lg:min-h-[50vh] lg:grid-cols-12">
          <div className="flex items-center bg-white lg:col-span-6">
            <div className="section w-full py-14 lg:py-20">
              <div className="max-w-xl">
                <span className="reveal inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue ring-1 ring-brand-blue/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Open 24 / 7 - Emergency Care
                </span>

                <h1
                  className="reveal mt-5 text-[34px] font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-[54px]"
                  style={{ '--reveal-delay': '80ms' }}
                >
                  Trusted Healthcare for{' '}
                  <span className="text-brand-blue">Your Family</span>
                </h1>

                <p
                  className="reveal mt-5 text-base leading-relaxed text-brand-mute sm:text-lg"
                  style={{ '--reveal-delay': '160ms' }}
                >
                  At Mudanur Hospital, our experienced doctors, modern facilities, and
                  compassionate team are dedicated to caring for every patient - from
                  routine check-ups to advanced treatments.
                </p>

                <div
                  id="consultation"
                  className="reveal mt-8 max-w-xl scroll-mt-32 rounded-[24px] border border-slate-200 bg-slate-50/90 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-softLg"
                  style={{ '--reveal-delay': '240ms' }}
                >
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
                      Book Consultation
                    </p>
                    <h3 className="text-xl font-bold text-brand-ink">
                      Get expert advice from Dr. S. R. Mudanur
                    </h3>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <label className="block text-sm font-medium text-slate-700">
                      First Name
                      <input type="text" placeholder="Your name" className={fieldClass} />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone Number
                      <input type="tel" placeholder="+91 1234567890" className={fieldClass} />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Email Address
                      <input type="email" placeholder="you@example.com" className={fieldClass} />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                      Message (Optional)
                      <textarea placeholder="How can we help?" rows="3" className={fieldClass} />
                    </label>
                  </div>

                  <button
                    type="button"
                    className="sheen mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blueDark hover:shadow-lg active:translate-y-0"
                  >
                    Book Consultation Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="reveal flex items-center justify-center py-10 lg:col-span-6"
            style={{ '--reveal-delay': '180ms' }}
          >
            <div className="subtle-float relative h-[500px] w-full overflow-hidden rounded-[24px] shadow-2xl lg:h-[calc(100vh-96px)] lg:max-h-[760px]">
              <img
                src={HospitalPhoto}
                alt="Mudanur Hospital building"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.03]"
              />

              <div className="absolute inset-0 facade-grid opacity-40" />
              <div className="absolute inset-0 bg-brand-ink/30" />

              <div className="absolute bottom-6 left-6 max-w-[260px] rounded-xl bg-white/95 p-4 shadow-softLg backdrop-blur sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs text-brand-mute">Visit us at</div>
                    <div className="text-sm font-semibold leading-tight text-brand-ink">
                      Mudanur Hospital Campus
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 border-t border-brand-line pt-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs text-brand-mute">Working Hours</div>
                    <div className="text-sm font-semibold leading-tight text-brand-ink">
                      Mon-Sat - 8:00 AM - 9:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
