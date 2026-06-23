// Footer.jsx
import { useState } from "react";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="footer" className="footer" aria-label="CharityCare site footer">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-nowrap flex-wrap gap-2 items-center">
          <div className="w-full lg:w-1/2">
            <div className="footer-cta-img h-64 lg:h-80 ">
              <img
                className="shadow-xl"
                src="/assets/images/contact.jpg"
                alt="CharityCare volunteers supporting communities in need"
                loading="lazy"
                width={600}
                height={320}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="footer-cta-content h-64 lg:h-80 shadow-xl">
              <p className="section-subtitle">CharityCare</p>
              <h2 className="section-title" style={{ color: "#fff" }}>
                Always Open to Support People in Need
              </h2>
              <p className="section-text" style={{ color: "#d9d9d9" }}>
                Charity helps reduce suffering and builds unity in society.
                Together we can make a difference.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button
                  className="btn-custom"
                  onClick={() => scrollTo("about")}
                  aria-label="Explore more about CharityCare"
                >
                  Explore More →
                </button>
                <a
                  href="tel:+912343443534"
                  style={{ color: "#d9d9d9", textDecoration: "none" }}
                >
                  Call: +91 234344 3534
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className="footer-links mt-12" aria-label="Footer navigation">
          <div className="flex flex-wrap -mx-4 text-center md:text-left">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Quick Links
              </h3>
              <ul>
                <li>
                  <button
                    onClick={() => scrollTo("home")}
                    aria-label="Go to Home section"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact")}
                    aria-label="Go to Contact section"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("services")}
                    aria-label="Go to Services section"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("blog")}
                    aria-label="Go to Blog section"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Explore Now
              </h3>
              <ul>
                <li>
                  <button
                    onClick={() => scrollTo("team")}
                    aria-label="Meet our volunteers"
                  >
                    Volunteers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("events")}
                    aria-label="View upcoming events"
                  >
                    Event
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Supports
              </h3>
              <ul>
                <li>
                  <button
                    onClick={() => scrollTo("donation")}
                    aria-label="Go to Donation section"
                  >
                    Donation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("faq")}
                    aria-label="View frequently asked questions"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Newsletter
              </h3>
              <p style={{ color: "#d9d9d9", fontSize: 14, marginBottom: 12 }}>
                Get updates about charity events and activities.
              </p>
              <div
                className="newsletter"
                role="form"
                aria-label="Newsletter subscription"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Enter your email for newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <button
                  onClick={() => setEmail("")}
                  aria-label="Subscribe to CharityCare newsletter"
                >
                  Subscribe
                </button>
              </div>
              <div
                className="socials mt-4"
                aria-label="CharityCare social media links"
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow CharityCare on Twitter"
                >
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow CharityCare on Facebook"
                >
                  <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow CharityCare on Instagram"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to CharityCare on YouTube"
                >
                  <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p>
                Copyright &amp; Design By{" "}
                <span className="highlight">@CharityCare</span>
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right mt-2 md:mt-0">
              <ul
                className="footer-bottom-links"
                aria-label="Footer bottom links"
              >
                <li>
                  <button onClick={() => scrollTo("faq")} aria-label="View FAQ">
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact")}
                    aria-label="View Careers"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact")}
                    aria-label="Contact CharityCare"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <p
              style={{
                color: "#d9d9d9",
                fontSize: 12,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              This is a demo project built for portfolio purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
