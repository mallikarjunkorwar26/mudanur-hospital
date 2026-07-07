import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
  { href: '#admin', label: 'Admin' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
   <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white/65 backdrop-blur-2xl border-b border-white/30 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
      : 'bg-white/20 backdrop-blur-xl border-b border-white/10'
  }`}
>
      <div className="section flex items-center justify-between gap-4 h-20 lg:h-[88px]">
        <Logo tone="dark" compact />

        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors duration-300 hover:bg-brand-surface hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#consultation" size="md" variant="primary">
            Book Appointment
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-surface"
        >
          <svg className="h-5 w-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-brand-line`}
      >
        <div className="section py-4 flex flex-col">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-brand-line/70 py-3 text-sm font-medium text-brand-ink/90 transition-colors last:border-0 hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
          <Button href="#consultation" size="md" variant="primary" className="mt-4 w-full">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
