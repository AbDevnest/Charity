// Contact.jsx
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    alert('Message sent! We will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-[90px]" style={{ background: 'rgba(240,245,232,0.69)' }} aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">

          <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
            <p className="section-subtitle">Contact Us</p>
            <h2 id="contact-heading" className="section-title">Get in Touch With Us</h2>
            <p className="section-text">
              We're here to help and answer any question you might have about our
              charity programs. We look forward to hearing from you and making a
              difference together.
            </p>
            <address className="contact-details mt-5 not-italic">
              <p>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                {" "}<span>Jaipur, Rajasthan, India</span>
              </p>
              <p>
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                {" "}<a href="tel:+912343443534" style={{ color: 'inherit', textDecoration: 'none' }}>+91 234344 3534</a>
              </p>
              <p>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                {" "}<a href="mailto:support@charitycare.com" style={{ color: 'inherit', textDecoration: 'none' }}>support@charitycare.com</a>
              </p>
            </address>
          </div>

          <div className="w-full lg:w-7/12 px-4">
            <form
              className="contact-form bg-white p-8 rounded-2xl shadow-sm"
              onSubmit={handleSubmit}
              aria-label="Contact CharityCare form"
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
              </div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                rows={5}
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn-custom mt-2" aria-label="Send your message to CharityCare">
                Send Message <i className="fa-solid fa-arrow-right ml-1" aria-hidden="true"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}