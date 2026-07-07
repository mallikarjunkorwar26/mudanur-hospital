export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center'

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>

      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-px w-5 bg-blue-500 rounded-full" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600">
            {eyebrow}
          </span>
          <span className="h-px w-5 bg-blue-500 rounded-full" />
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 leading-tight tracking-tight">
        {title}
      </h2>

      {description && (
        <p className={`mt-3 text-base leading-relaxed text-slate-500 ${isCenter ? 'max-w-xl' : 'max-w-lg'}`}>
          {description}
        </p>
      )}

      <div className={`mt-5 flex gap-1.5 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-1 w-8 rounded-full bg-blue-600" />
        <span className="h-1 w-2 rounded-full bg-blue-300" />
        <span className="h-1 w-1 rounded-full bg-blue-200" />
      </div>

    </div>
  )
}