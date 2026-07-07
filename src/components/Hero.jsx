import HospitalPhoto from '../images/Hospital.jpeg'
import AppointmentForm from './AppointmentForm.jsx'

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 lg:pt-[72px]">
      <div className="relative overflow-hidden">
        <div className="grid min-h-[320px] grid-cols-1 gap-0 lg:min-h-[50vh] lg:grid-cols-12">
          <div className="flex min-w-0 items-center bg-white lg:col-span-6">
            <div className="section w-full py-8 sm:py-14 lg:py-20">
              <div className="max-w-xl">
                <span className="reveal inline-flex max-w-full items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue ring-1 ring-brand-blue/10 sm:text-xs sm:tracking-[0.18em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Open 24 / 7 - Emergency Care
                </span>

                <h1
                  className="reveal mt-4 sm:mt-5 text-2xl sm:text-[34px] font-extrabold leading-[1.05] tracking-tight text-brand-ink md:text-5xl lg:text-[54px]"
                  style={{ '--reveal-delay': '80ms' }}
                >
                  Trusted Healthcare for{' '}
                  <span className="text-brand-blue">Your Family</span>
                </h1>

                <p
                  className="reveal mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-brand-mute md:text-lg"
                  style={{ '--reveal-delay': '160ms' }}
                >
                  At Mudanur Hospital, our experienced doctors, modern facilities, and
                  compassionate team are dedicated to caring for every patient - from
                  routine check-ups to advanced treatments.
                </p>

                <AppointmentForm />
              </div>
            </div>
          </div>

          <div
            className="reveal flex min-w-0 items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:col-span-6 lg:px-0"
            style={{ '--reveal-delay': '180ms' }}
          >
            <div className="subtle-float relative h-[220px] min-[420px]:h-[280px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl lg:h-[calc(100vh-96px)] lg:max-h-[760px] lg:rounded-[24px]">
              <img
                src={HospitalPhoto}
                alt="Mudanur Hospital building"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.03]"
              />

              <div className="absolute inset-0 facade-grid opacity-40" />
              <div className="absolute inset-0 bg-brand-ink/30" />

              <div className="absolute bottom-4 left-4 max-w-[220px] sm:max-w-[260px] rounded-lg sm:rounded-xl bg-white/95 p-3 sm:p-4 shadow-softLg backdrop-blur sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue shrink-0">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-brand-mute">Visit us at</div>
                    <div className="text-xs sm:text-sm font-semibold leading-tight text-brand-ink">
                      Mudanur Hospital Campus
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-3 flex items-center gap-3 border-t border-brand-line pt-2 sm:pt-3">
                  <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal shrink-0">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-brand-mute">Working Hours</div>
                    <div className="text-xs sm:text-sm font-semibold leading-tight text-brand-ink">
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
