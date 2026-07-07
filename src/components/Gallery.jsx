import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

const TILES = [
  { title: 'Hospital Entrance', image: 'Hospital Entrance.jpeg' },
  { title: 'Reception Lounge', image: 'Reception Lounge.jpeg' },
  { title: 'Consultation Room', image: 'Consultation Room.jpeg' },
  { title: 'Operation Theatre', image: 'Operation Theatre.jpeg' },
  { title: 'Laboratory', image: 'Laboratory.jpeg' },
  { title: 'Patient Ward', image: 'Patient Ward.jpeg' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + TILES.length) % TILES.length)
  const next = () => setLightbox((i) => (i + 1) % TILES.length)

  return (
    <>
      <section id="gallery" className="py-20 lg:py-28 bg-white">
        <div className="section">
          <div className="reveal">
            <SectionHeading
              eyebrow="Gallery"
              title="A Look Inside Mudanur Hospital"
              description="Modern spaces designed for comfort, hygiene and clinical efficiency."
            />
          </div>

          {/* Uniform grid — all same size, one clean row on desktop */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {TILES.map((t, i) => {
              const imageUrl = new URL(`../images/${t.image}`, import.meta.url).href

              return (
                <figure
                  key={t.title}
                  onClick={() => setLightbox(i)}
                  className="reveal group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ '--reveal-delay': `${i * 60}ms` }}
                >
                  <img
                    src={imageUrl}
                    alt={t.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Caption */}
                  <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[11px] font-semibold text-white leading-snug text-center">
                      {t.title}
                    </p>
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex animate-fadeIn items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative mx-4 max-h-[85vh] w-full max-w-4xl animate-fadeUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={new URL(`../images/${TILES[lightbox].image}`, import.meta.url).href}
              alt={TILES[lightbox].title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-white/80">{TILES[lightbox].title}</p>
            </div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
              {TILES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === lightbox ? 'w-5 bg-white' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
