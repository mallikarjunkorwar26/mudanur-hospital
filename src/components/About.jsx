import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "28+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Patients" },
  { value: "6+", label: "Specialties" },
  { value: "24×7", label: "Emergency Care" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="section max-w-6xl mx-auto">

        <div className="reveal">
          <SectionHeading
            eyebrow="About Us"
            title="Trusted Healthcare Since 1998"
            subtitle="Providing compassionate, affordable and quality healthcare for families across Vijayapura."
            center
          />
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div className="reveal space-y-6">

            <h3 className="text-3xl font-bold text-brand-ink">
              About Us
            </h3>

            <p className="text-brand-mute leading-8">
              Our <strong>Medical Oncology, Surgical Oncology, Gynecology, and Infertility</strong> team is committed to providing comprehensive, compassionate, and evidence-based care. We focus on the prevention, early diagnosis, and advanced treatment of various conditions. Our services include the management of <strong>solid tumors</strong>, specialized <strong>outpatient services</strong> with detailed reports, and the treatment of <strong>hematological malignancies</strong> in adults and elderly patients.
            </p>

            <div>
              <h4 className="text-xl font-bold text-brand-blue mb-2">
                Chemotherapy
              </h4>
              <p className="text-brand-mute leading-8">
                Chemotherapy is a treatment that uses anti-cancer (cytotoxic) drugs to destroy or control the growth of cancer cells. It may be used as a standalone treatment for certain types of cancer or combined with surgery, hormonal therapy, targeted therapy, immunotherapy, or other treatment modalities to achieve the best possible outcomes for patients.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-brand-blue mb-2">
                Pain & Palliative Care
              </h4>
              <p className="text-brand-mute leading-8">
                We provide comprehensive <strong>Pain and Palliative Care</strong> services to improve the quality of life for cancer patients. Our specialists are experienced in managing cancer-related pain through medications, including tablets and injections, as well as advanced pain management techniques such as nerve blocks. Our goal is to ensure comfort, symptom relief, and compassionate support for patients and their families throughout their treatment journey.
              </p>
            </div>

          </div>

          {/* Right Side */}

          <div className="reveal rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-softLg" style={{ '--reveal-delay': '120ms' }}>

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">
                  Our Mission
                </h3>

                <p className="text-brand-mute leading-7">
                  To provide compassionate, ethical, and affordable healthcare
                  through experienced professionals, advanced technology, and a
                  patient-first approach.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-brand-blue mb-3">
                  Our Vision
                </h3>

                <p className="text-brand-mute leading-7">
                  To be the most trusted multispeciality hospital, recognized
                  for clinical excellence, innovation, patient safety, and
                  outstanding healthcare services.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-brand-blue mb-4">
                  Our Core Values
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {[
                    "Compassion",
                    "Integrity",
                    "Excellence",
                    "Respect",
                    "Innovation",
                    "Patient Safety",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                        ✓
                      </div>

                      <span className="text-sm text-brand-mute">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Small Statistics Card */}

        <div className="mt-16 flex justify-center">

          <div className="reveal w-full max-w-4xl overflow-hidden rounded-2xl bg-brand-blue shadow-lg">

            <div className="grid grid-cols-2 md:grid-cols-4">

              {STATS.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-5 px-4 text-center
                    ${index < 2 ? "border-b md:border-b-0 border-white/15" : ""}
                    ${index !== STATS.length - 1 ? "md:border-r border-white/15" : ""}
                  `}
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-blue-100">
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
