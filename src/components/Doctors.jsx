import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { DOCTORS } from "../data/doctors";

function DoctorCard({ d, i }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="reveal group min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ "--reveal-delay": `${Math.min(i, 8) * 55}ms` }}
    >
      {/* Image */}
      <div className="relative h-24 sm:h-40 md:h-52 lg:h-56 overflow-hidden bg-slate-100">
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
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-bold text-brand-blue shadow">
              {d.initials}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-1.5 sm:p-3">
        <h3 className="line-clamp-2 break-words text-[10px] font-semibold leading-tight text-slate-900 sm:text-sm">
          {d.name}
        </h3>

        {d.qualification && (
          <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wide text-brand-blue sm:text-[10px]">
            {d.qualification}
          </p>
        )}

        <p className="mt-1 text-[9px] leading-snug text-slate-600 sm:text-[11px]">
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