import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { DOCTORS } from "../data/doctors";

function DoctorCard({ d, i }) {
  const [imgError, setImgError] = useState(false);

  const photoSrc = d.photo || null;

  return (
    <article
      className="reveal premium-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/10"
      style={{ '--reveal-delay': `${Math.min(i, 8) * 55}ms` }}
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-blue-50">
        {photoSrc && !imgError ? (
          <img
            src={photoSrc}
            alt={d.name}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-white text-lg font-medium text-blue-600">
              {d.initials}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="break-words text-sm font-medium leading-snug text-slate-900">{d.name}</h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-blue-600">
          {d.qualification}
        </p>
        <div className="mt-3">
          <span className="inline-flex max-w-full rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-medium leading-snug text-blue-700">
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
      className="surface-band bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16"
    >
      <div className="section">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Meet Our Expert Doctors"
            description="Highly qualified and experienced medical professionals dedicated to providing the best healthcare services."
          />
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-6 sm:mt-14"
        >
          {DOCTORS.map((doctor, index) => (
            <DoctorCard key={doctor.name} d={doctor} i={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
