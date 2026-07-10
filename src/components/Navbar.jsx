import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      
      // Detect active section
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      let current = '#home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            current = `#${id}`
          }
        }
      }
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-[0_8px_32px_rgba(15,23,42,0.08)]'
          : 'bg-white/20 backdrop-blur-xl border-b border-white/10'
      }`}
    >
      <div className="section flex h-16 items-center justify-between gap-4 sm:h-20 lg:h-24">
        <Logo tone="dark" compact />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300 relative ${
                activeSection === l.href
                  ? 'text-brand-blue bg-brand-blue/10'
                  : 'text-brand-mute/90 hover:text-brand-blue hover:bg-brand-surface'
              }`}
            >
              {l.label}
              {activeSection === l.href && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-brand-blue" />
              )}
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
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-line/70 text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-surface hover:border-brand-blue/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
        >
          <svg className="h-5 w-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-xl border-t border-brand-line/50 shadow-lg`}
      >
        <div className="section py-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeSection === l.href
                  ? 'text-brand-blue bg-brand-blue/10'
                  : 'text-brand-ink/80 hover:text-brand-blue hover:bg-brand-surface'
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <Button href="#consultation" size="md" variant="primary" className="w-full" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}