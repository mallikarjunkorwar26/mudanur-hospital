import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { DOCTORS } from "../data/doctors";

function DoctorCard({ d, i }) {
  const [imgError, setImgError] = useState(false);

  const photoSrc = d.photo || null;

  return (
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
      style={{ '--reveal-delay': `${Math.min(i, 8) * 55}ms` }}
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-blue-50">
        {photoSrc && !imgError ? (
          <img
            src={photoSrc}
            alt={d.name}
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
        <h3 className="text-sm font-medium text-slate-900">{d.name}</h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-blue-600">
          {d.qualification}
        </p>
        <div className="mt-3">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
            {d.specialization}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Doctors() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="doctors"
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-50 to-white py-16"
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
          className={`mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {DOCTORS.map((doctor, index) => (
            <DoctorCard key={doctor.name} d={doctor} i={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
