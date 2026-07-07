import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "28+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Patients" },
  { value: "6+", label: "Specialties" },
  { value: "24/7", label: "Emergency Care" },
];

const VALUES = [
  "Compassion",
  "Integrity",
  "Excellence",
  "Respect",
  "Innovation",
  "Patient Safety",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="section max-w-6xl">
        <div className="reveal">
          <SectionHeading
            eyebrow="About Us"
            title="Trusted Healthcare Since 1998"
            description="Providing compassionate, affordable and quality healthcare for families across Vijayapura."
          />
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal min-w-0 space-y-4 sm:space-y-6">
            <h3 className="text-2xl font-bold text-brand-ink sm:text-3xl">
              About Us
            </h3>

            <p className="text-sm leading-7 text-brand-mute sm:text-base sm:leading-8">
              Our{" "}
              <strong>
                Medical Oncology, Surgical Oncology, Gynecology, and Infertility
              </strong>{" "}
              team is committed to providing comprehensive, compassionate, and
              evidence-based care. We focus on the prevention, early diagnosis,
              and advanced treatment of various conditions. Our services include
              the management of <strong>solid tumors</strong>, specialized{" "}
              <strong>outpatient services</strong> with detailed reports, and
              the treatment of <strong>hematological malignancies</strong> in
              adults and elderly patients.
            </p>

            <div>
              <h4 className="mb-2 text-lg font-bold text-brand-blue sm:text-xl">
                Chemotherapy
              </h4>
              <p className="text-sm leading-7 text-brand-mute sm:text-base sm:leading-8">
                Chemotherapy is a treatment that uses anti-cancer drugs to
                destroy or control the growth of cancer cells. It may be used as
                a standalone treatment for certain types of cancer or combined
                with surgery, hormonal therapy, targeted therapy, immunotherapy,
                or other treatment modalities to achieve the best possible
                outcomes for patients.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-bold text-brand-blue sm:text-xl">
                Pain & Palliative Care
              </h4>
              <p className="text-sm leading-7 text-brand-mute sm:text-base sm:leading-8">
                We provide comprehensive{" "}
                <strong>Pain and Palliative Care</strong> services to improve
                the quality of life for cancer patients. Our specialists are
                experienced in managing cancer-related pain through medications,
                injections, and advanced pain management techniques such as
                nerve blocks.
              </p>
            </div>
          </div>

          <div
            className="reveal min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-softLg sm:p-8 lg:rounded-3xl"
            style={{ "--reveal-delay": "120ms" }}
          >
            <div className="space-y-5 sm:space-y-8">
              <div>
                <h3 className="mb-2 text-lg font-bold text-brand-blue sm:mb-3 sm:text-xl">
                  Our Mission
                </h3>
                <p className="text-sm leading-7 text-brand-mute sm:text-base">
                  To provide compassionate, ethical, and affordable healthcare
                  through experienced professionals, advanced technology, and a
                  patient-first approach.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5 sm:pt-8">
                <h3 className="mb-2 text-lg font-bold text-brand-blue sm:mb-3 sm:text-xl">
                  Our Vision
                </h3>
                <p className="text-sm leading-7 text-brand-mute sm:text-base">
                  To be the most trusted multispeciality hospital, recognized
                  for clinical excellence, innovation, patient safety, and
                  outstanding healthcare services.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5 sm:pt-8">
                <h3 className="mb-3 text-lg font-bold text-brand-blue sm:mb-4 sm:text-xl">
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                  {VALUES.map((item) => (
                    <div key={item} className="flex min-w-0 items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="min-w-0 text-sm text-brand-mute">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="reveal w-full max-w-4xl overflow-hidden rounded-2xl bg-brand-blue shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATS.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-3 py-5 text-center sm:px-4 ${
                    index < 2 ? "border-b border-white/15 md:border-b-0" : ""
                  } ${
                    index !== STATS.length - 1
                      ? "md:border-r md:border-white/15"
                      : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
