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
    <section id="contact" className="py-[90px]" style={{ background: 'rgba(240,245,232,0.69)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">

          {/* Info */}
          <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
            <span className="section-subtitle">Contact Us</span>
            <h2 className="section-title">Get in touch with us</h2>
            <p className="section-text">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="contact-details mt-5">
              <p><i className="fa-solid fa-location-dot"></i> Jaipur, Rajasthan, India</p>
              <p><i className="fa-solid fa-phone"></i> +91 234344 3534</p>
              <p><i className="fa-solid fa-envelope"></i> support@charitycare.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12 px-4">
            <form
              className="contact-form bg-white p-8 rounded-2xl shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Write Message"
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn-custom mt-2">
                Send Message <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
