import Logo from './Logo.jsx'

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
]

const SERVICES = [
  'General Medicine',
  'Gynecology & Obstetrics',
  'Infertility',
  'Cancer Care',
  'General Surgery',
  'Ophthalmology',
  'Pediatrics',
  'Laboratory',
  'Emergency Care',
  'Pharmacy'
]

function SocialIcon({ kind }) {
  const props = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (kind) {
    case 'facebook':
      return <svg viewBox="0 0 24 24" className="h-4 w-4" {...props}><path d="M14 9V7a2 2 0 0 1 2-2h2V2h-3a4 4 0 0 0-4 4v3H8v3h3v9h3v-9h3l1-3h-4z" /></svg>
    case 'instagram':
      return <svg viewBox="0 0 24 24" className="h-4 w-4" {...props}><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
    case 'twitter':
      return <svg viewBox="0 0 24 24" className="h-4 w-4" {...props}><path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1A4.2 4.2 0 0 0 11.5 9a11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1A4.2 4.2 0 0 0 5.7 14a4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6 11.9 11.9 0 0 0 8.5 20.5c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.8z" /></svg>
    case 'linkedin':
      return <svg viewBox="0 0 24 24" className="h-4 w-4" {...props}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" /></svg>
    default:
      return null
  }
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-ink text-white/85">
      <div className="section py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Mudanur Hospital is committed to delivering trusted, accessible and modern
              healthcare to families in our community — every day, around the clock.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 hover:bg-brand-blue hover:-translate-y-0.5 transition-all duration-300"
                >
                  <SocialIcon kind={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-brand-teal transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((d) => (
                <li key={d}>
                  <a href="#services" className="text-sm text-white/70 hover:text-brand-teal transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/></svg>
                Mudanur Multispeciality Hospital, Kalyan Nagar, BLDE Hospital Road, Gacchinakatti Colony Cross, Vijayapura-586103
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+918352260472" className="hover:text-white transition-colors">08352 260472</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919886734811" className="hover:text-white transition-colors">98867 34811</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                <a href="mailto:mudanurhospital@yahoo.co.in" className="hover:text-white transition-colors">mudanurhospital@yahoo.co.in</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                OPD: 10:00 AM – 3:00 PM · 6:00 PM – 8:00 PM (Sunday closed)
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
                Emergency Service: 24×7
              </li>
            </ul>
          </div>
        </div>
      </div>


    </footer>
  )
}
