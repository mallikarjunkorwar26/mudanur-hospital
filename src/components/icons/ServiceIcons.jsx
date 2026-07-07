// Original, lightweight SVG icons for services. No external libraries.
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function ServiceIcon({ name, className = 'h-6 w-6' }) {
  switch (name) {
    case 'stethoscope':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M6 3v6a4 4 0 0 0 8 0V3" />
          <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
          <circle cx="18" cy="11" r="2" />
        </svg>
      )
    case 'female':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <circle cx="12" cy="8" r="5" />
          <path d="M12 13v8M9 18h6" />
        </svg>
      )
    case 'baby':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 10h.01M15 10h.01" />
          <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
        </svg>
      )
    case 'infertility':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M6 11.5C6 8.5 8.5 6 12 6s6 2.5 6 5.5c0 4.25-6 8.25-6 8.25S6 15.75 6 11.5z" />
          <path d="M12 8v4" />
        </svg>
      )
    case 'cancer':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M12 3C8.5 3 6 5.5 6 9c0 3 2 5.5 4 7.5V21" />
          <path d="M12 3c3.5 0 6 2.5 6 6 0 3-2 5.5-4 7.5V21" />
          <path d="M8 7l8 10" />
        </svg>
      )
    case 'eye':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'scalpel':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M14 3l7 7-9 9-3-1-1-3z" />
          <path d="M5 19l-2 2" />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 19l-6-10V3" />
          <path d="M7 15h10" />
        </svg>
      )
    case 'pill':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" />
          <path d="M9.5 7.5l7 7" />
        </svg>
      )
    case 'ambulance':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M3 17V8a1 1 0 0 1 1-1h10v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <circle cx="7.5" cy="18" r="1.8" />
          <circle cx="17.5" cy="18" r="1.8" />
          <path d="M7 11h3M8.5 9.5v3" />
        </svg>
      )
    case 'scan':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <path d="M3 7V5a2 2 0 0 1 2-2h2M21 7V5a2 2 0 0 0-2-2h-2M3 17v2a2 2 0 0 0 2 2h2M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 12h10" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}
