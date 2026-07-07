import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Doctors from './components/Doctors.jsx'
import Services from './components/Services.jsx'
import AppointmentCTA from './components/AppointmentCTA.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const onAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      const headerOffset = 96
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    links.forEach((link) => link.addEventListener('click', onAnchorClick))

    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      links.forEach((link) => link.removeEventListener('click', onAnchorClick))
    }
  }, [])

  return (
    <div className="bg-white text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <AppointmentCTA />
        <Gallery />
        <Contact />
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  )
}
