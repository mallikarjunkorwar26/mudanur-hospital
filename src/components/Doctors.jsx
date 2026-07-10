import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { DOCTORS } from "../data/doctors";

function DoctorCard({ d, i }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="reveal group min-w-0 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-premium"
      style={{ "--reveal-delay": `${Math.min(i, 8) * 55}ms` }}
    >
      {/* Image */}
      <div className="relative h-24 sm:h-40 md:h-52 lg:h-56 overflow-hidden bg-gradient-to-br from-brand-surface to-slate-100">
        {d.photo && !imgError ? (
          <img
            src={d.photo}
            alt={d.name}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 font-bold text-brand-blue shadow-soft backdrop-blur-sm ring-1 ring-brand-blue/10">
              {d.initials}
            </div>
          </div>
        )}
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-4">
        <h3 className="line-clamp-2 break-words text-[11px] font-bold leading-tight text-brand-ink sm:text-sm">
          {d.name}
        </h3>

        {d.qualification && (
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-brand-blue sm:text-[11px]">
            {d.qualification}
          </p>
        )}

        <p className="mt-1 text-[10px] leading-snug text-brand-mute/80 sm:text-xs">
          {d.specialization}
        </p>
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
        <SectionHeading
          eyebrow="Our Specialists"
          title="Meet Our Expert Doctors"
          description="Highly qualified and experienced medical professionals dedicated to providing the best healthcare services."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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