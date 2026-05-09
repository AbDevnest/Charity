import { useState, useEffect, useRef, useCallback } from 'react'

// These must match the `id` attributes on every section component
const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Donation', href: '#donation' },
  { label: 'Event',    href: '#events' },
  { label: 'Contact',  href: '#contact' },
]

// IDs in page order — used by the Intersection Observer
const SECTION_IDS = ['home', 'about', 'services', 'donation', 'events', 'contact']

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visibleSections = useRef(new Set())

  const pickActive = useCallback(() => {
    // Walk sections top-to-bottom; first visible one wins
    for (const id of SECTION_IDS) {
      if (visibleSections.current.has(id)) {
        setActiveLink(`#${id}`)
        return
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id)
          } else {
            visibleSections.current.delete(entry.target.id)
          }
        })
        pickActive()
      },
      {
        // Fire when 20% of a section enters the viewport.
        // rootMargin top offset accounts for the sticky navbar height (~70px).
        rootMargin: '-70px 0px -40% 0px',
        threshold: 0,
      }
    )

    const elements = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter(Boolean)

    elements.forEach(el => observer.observe(el))
    return () => elements.forEach(el => observer.unobserve(el))
  }, [pickActive])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={e => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <img src="/assets/images/main-logo.png" alt="logo" className="h-[42px]" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center list-none m-0 p-0">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link-item ${activeLink === link.href ? 'active' : ''}`}
                    onClick={e => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="ml-6">
                <a
                  href="#contact"
                  className="btn-custom"
                  onClick={e => handleNavClick(e, '#contact')}
                >
                  Join With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile toggler */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {/* Animated hamburger → X */}
            <span
              className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
              style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
            />
            <span
              className="block w-6 h-[2px] bg-white transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
              style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#1b2a2f] p-4 ">
            <ul className="list-none m-0 py-3">
              {navLinks.map(link => (
                <li key={link.href} className="my-3">
                  <a
                    href={link.href}
                    className={`nav-link-item block ${activeLink === link.href ? 'active' : ''}`}
                    onClick={e => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#contact"
                  className="btn-custom"
                  onClick={e => handleNavClick(e, '#contact')}
                >
                  Join With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
