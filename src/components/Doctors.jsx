import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { DOCTORS } from "../data/doctors";

function DoctorCard({ d, i }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl"
      style={{ "--reveal-delay": `${Math.min(i, 8) * 55}ms` }}
    >
      {/* Doctor Photo */}
      <div className="relative h-36 sm:h-44 md:h-52 lg:h-48 xl:h-52 overflow-hidden bg-slate-100">
        {d.photo && !imgError ? (
          <img
            src={d.photo}
            alt={d.name}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-blue shadow">
              {d.initials}
            </div>
          </div>
        )}
      </div>

      {/* Doctor Details */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="min-h-[42px] text-xs font-semibold leading-5 text-slate-900 sm:text-sm">
          {d.name}
        </h3>

        {d.qualification && (
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-brand-blue sm:text-[11px]">
            {d.qualification}
          </p>
        )}

        <div className="mt-3">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 sm:text-[11px]">
            {d.specialization}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16 lg:py-20"
    >
      <div className="section">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Meet Our Expert Doctors"
            description="Highly qualified and experienced medical professionals dedicated to providing the best healthcare services."
          />
        </div>

        {/* Responsive Auto Grid */}
        <div
          className="mt-10 grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {DOCTORS.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              d={doctor}
              i={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}