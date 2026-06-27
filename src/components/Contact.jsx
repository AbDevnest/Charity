import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',      
    subject: '', 
    message: '' 
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  setSuccess(false)

  const phoneRegex = /^[0-9]{10}$/
  if (!phoneRegex.test(form.phone)) {
    setError('Please enter a valid 10-digit phone number')
    return
  }

  setLoading(true)

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()

    if (data.success) {
      setSuccess(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } else {
      setError(data.message || 'Something went wrong')
    }
  } catch (err) {
    setError('Failed to send message. Please try again.')
  }
  setLoading(false)
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
            {/* ✅ Success/Error Messages */}
            {success && (
              <p className="text-green-500 text-center mb-4">Message sent successfully! We'll get back to you soon.</p>
            )}
            {error && (
              <p className="text-red-500 text-center mb-4">{error}</p>
            )}

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

              {/* ✅ Phone Input — New */}
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />

              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
              />

              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                rows={5}
                name="message"
                placeholder="Write your message here..."
                required
                value={form.message}
                onChange={handleChange}
              />

              <button 
                type="submit" 
                className="btn-custom mt-2" 
                aria-label="Send your message to CharityCare"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'} 
                <i className="fa-solid fa-arrow-right ml-1" aria-hidden="true"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}