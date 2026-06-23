import { useState, useEffect, useRef, useCallback } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Donation", href: "#donation" },
  { label: "Event", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "donation",
  "events",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleSections = useRef(new Set());

  const pickActive = useCallback(() => {
    for (const id of SECTION_IDS) {
      if (visibleSections.current.has(id)) {
        setActiveLink(`#${id}`);
        return;
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });
        pickActive();
      },
      {
        rootMargin: "-70px 0px -40% 0px",
        threshold: 0,
      },
    );

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, [pickActive]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50" role="banner">
      <nav
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0"
            aria-label="CharityCare - Go to homepage"
          >
            <img
              src="/assets/images/main-logo.webp"
              alt="CharityCare - Charity Organization Logo"
              width={200}
              height={42}
            />
          </button>

          <div className="hidden lg:flex items-center">
            <ul className="flex items-center list-none m-0 p-0" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    className={`nav-link-item ${activeLink === link.href ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={activeLink === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="ml-6">
                <button
                  className="btn-custom"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  aria-label="Join With Us - Contact CharityCare"
                >
                  Join With Us
                </button>
              </li>
            </ul>
          </div>

          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
              style={
                menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}
              }
            />
            <span
              className="block w-6 h-[2px] bg-white transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
              style={
                menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}
              }
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="bg-[#1b2a2f] p-4">
            <ul className="list-none m-0 py-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href} className="my-3">
                  <button
                    className={`nav-link-item block ${activeLink === link.href ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={activeLink === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <button
                  className="btn-custom"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  aria-label="Join With Us - Contact CharityCare"
                >
                  Join With Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
