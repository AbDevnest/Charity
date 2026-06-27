import { useState } from "react";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const socialLinks = [
  {
    href: "https://twitter.com",
    icon: "fa-brands fa-twitter",
    label: "Follow CharityCare on Twitter",
  },
  {
    href: "https://facebook.com",
    icon: "fa-brands fa-facebook",
    label: "Follow CharityCare on Facebook",
  },
  {
    href: "https://instagram.com",
    icon: "fa-brands fa-instagram",
    label: "Follow CharityCare on Instagram",
  },
  {
    href: "https://youtube.com",
    icon: "fa-brands fa-youtube",
    label: "Subscribe to CharityCare on YouTube",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed");
      }
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <footer id="footer" className="footer" aria-label="CharityCare site footer">
      <div className="container mx-auto px-4">
        {/* CTA Section - Unchanged */}
        <div className="flex lg:flex-nowrap flex-wrap gap-2 items-center">
          <div className="w-full lg:w-1/2">
            <div className="footer-cta-img">
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
            <div className="footer-cta-content shadow-xl">
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

        {/* Footer Links - FIXED NEWSLETTER SECTION */}
        <nav className="footer-links mt-12" aria-label="Footer navigation">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            {/* Quick Links */}
            <div>
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollTo("home")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Go to Home section"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Go to Contact section"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Go to Services section"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("blog")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Go to Blog section"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Explore Now */}
            <div>
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Explore Now
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollTo("team")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Meet our volunteers"
                  >
                    Volunteers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("events")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="View upcoming events"
                  >
                    Event
                  </button>
                </li>
              </ul>
            </div>

            {/* Supports */}
            <div>
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Supports
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollTo("donation")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Go to Donation section"
                  >
                    Donation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("faq")}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="View frequently asked questions"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter - FIXED VERSION */}
            <div className="w-full">
              <h3 style={{ marginBottom: 20, color: "#fff", fontSize: 18 }}>
                Newsletter
              </h3>
              <p style={{ color: "#d9d9d9", fontSize: 14, marginBottom: 12 }}>
                Get updates about charity events and activities.
              </p>

              {/* FIXED: Better flex layout with proper wrapping */}
              <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
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
                  className="flex-1 min-w-[120px] px-4 py-2.5 rounded-lg outline-none text-sm"
                  style={{
                    backgroundColor: "#1e293b",
                    color: "#ffffff",
                    border: "1px solid #334155",
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap text-sm"
                  style={{
                    backgroundColor: "#2faf90",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#259a7a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2faf90")
                  }
                  aria-label="Subscribe to CharityCare newsletter"
                >
                  {loading ? "..." : "Subscribe"}
                </button>
              </div>

              {message && (
                <p
                  className="text-sm mt-2"
                  style={{
                    color: message.includes("✅") ? "#2faf90" : "#ff6b6b",
                  }}
                >
                  {message}
                </p>
              )}

              {/* Social Icons */}
              <div className="socials mt-4 flex justify-center md:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <i
                      className={`${social.icon} text-xl`}
                      aria-hidden="true"
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-12 pt-6 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Copyright & Design By{" "}
                <span className="text-[#2faf90]">@CharityCare</span>
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right mt-2 md:mt-0">
              <ul
                className="flex justify-center md:justify-end gap-4 text-sm"
                aria-label="Footer bottom links"
              >
                <li>
                  <button
                    onClick={() => scrollTo("faq")}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="View FAQ"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="View Careers"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Contact CharityCare"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <p
            className="text-gray-500 text-xs text-center mt-4"
          >
            This is a demo project built for portfolio purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}