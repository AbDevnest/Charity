import { useState } from 'react'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="footer" className="footer">
      <div className="container mx-auto px-4">

        {/* CTA row */}
        <div className="flex flex-wrap -mx-0 items-center">
          <div className="w-full lg:w-1/2 p-0">
            <div className="footer-cta-img h-64 lg:h-80">
              <img src="/assets/images/contact.jpg" alt="footer cta" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="footer-cta-content">
              <h3 className="section-subtitle">CharityCare</h3>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Always open to support people in need
              </h2>
              <p className="section-text" style={{ color: '#d9d9d9' }}>
                Charity helps reduce suffering and builds unity in society. Together we can make a difference.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button
                  className="btn-custom"
                  onClick={() => scrollTo('about')}
                >
                  Explore More →
                </button>
                <span style={{ color: '#d9d9d9' }}>Call: +91 234344 3534</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links row */}
        <div className="footer-links mt-12">
          <div className="flex flex-wrap -mx-4 text-center md:text-left">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollTo('home')}>Home</button></li>
                <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
                <li><button onClick={() => scrollTo('services')}>Services</button></li>
                <li><button onClick={() => scrollTo('blog')}>Blog</button></li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h4>Explore Now</h4>
              <ul>
                <li><button onClick={() => scrollTo('team')}>Volunteers</button></li>
                <li><button onClick={() => scrollTo('events')}>Event</button></li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h4>Supports</h4>
              <ul>
                <li><button onClick={() => scrollTo('donation')}>Donation</button></li>
                <li><button onClick={() => scrollTo('faq')}>Faq</button></li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h4>Newsletter</h4>
              <p style={{ color: '#d9d9d9', fontSize: 14, marginBottom: 12 }}>
                Get updates about charity events and activities.
              </p>
              <div className="newsletter">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button onClick={() => setEmail('')}>Subscribe</button>
              </div>
              <div className="socials mt-4">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p>
                Copyright &amp; Design By <span className="highlight">@CharityCare</span>
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right mt-2 md:mt-0">
              <ul className="footer-bottom-links">
                <li><button onClick={() => scrollTo('faq')}>Faq</button></li>
                <li><button onClick={() => scrollTo('contact')}>Careers</button></li>
                <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
