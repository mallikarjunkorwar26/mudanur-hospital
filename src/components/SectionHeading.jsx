export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center'

  return (
    <div className={`flex flex-col px-2 sm:px-0 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>

      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 sm:mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-px w-4 sm:w-5 bg-brand-blue/40 rounded-full" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-brand-blue">
            {eyebrow}
          </span>
          <span className="h-px w-4 sm:w-5 bg-brand-blue/40 rounded-full" />
        </div>
      )}

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-brand-ink leading-tight tracking-tight">
        {title}
      </h2>

      {description && (
        <p className={`mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-mute ${isCenter ? 'max-w-2xl' : 'max-w-lg'}`}>
          {description}
        </p>
      )}

      <div className={`mt-3 sm:mt-5 flex gap-1.5 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-1 w-6 sm:w-8 rounded-full bg-brand-blue" />
        <span className="h-1 w-2 rounded-full bg-brand-blue/50" />
        <span className="h-1 w-1 rounded-full bg-brand-blue/30" />
      </div>

    </div>
  )
}
