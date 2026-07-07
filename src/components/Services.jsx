import { useRef, useEffect } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { SERVICES } from "../data/services.js";
import { ServiceIcon } from "./icons/ServiceIcons.jsx";

export default function Services() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    intervalRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 240, behavior: "smooth" });
      }
    }, 3600);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-slate-50 py-20 lg:py-28 overflow-hidden"
    >
      <div className="section">
        <div className="reveal flex items-end justify-between mb-14">
          <SectionHeading
            eyebrow="Our Specialities"
            title="What We Treat"
            description="World-class specialists across every major medical field."
            align="left"
          />

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-2 shrink-0 pb-1">
            <button
              onClick={() => { stopAutoSlide(); scroll(-1); startAutoSlide(); }}
              aria-label="Scroll left"
              className="hover-lift flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => { stopAutoSlide(); scroll(1); startAutoSlide(); }}
              aria-label="Scroll right"
              className="hover-lift flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onTouchStart={stopAutoSlide}
          onTouchEnd={startAutoSlide}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="reveal group snap-start shrink-0 w-56 flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white px-5 py-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 cursor-pointer"
              style={{ '--reveal-delay': `${Math.min(index, 6) * 55}ms` }}
            >
              {/* Icon circle */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </div>

              <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                {service.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
