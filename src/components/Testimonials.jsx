import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    text: 'This charity creates real impact by helping communities grow with education, healthcare, and essential resources.',
    img: '/assets/images/member-1.jpg',
    name: 'Rahul Sharma',
    role: 'Volunteer',
  },
  {
    text: 'Their transparency and dedication make them trustworthy. Donations truly reach those who need support the most.',
    img: '/assets/images/member-2.jpg',
    name: 'Anjali Verma',
    role: 'Donor',
  },
  {
    text: "I've personally seen their work. They empower children through education and skill-building programs.",
    img: '/assets/images/member-3.jpg',
    name: 'Aman Gupta',
    role: 'Supporter',
  },
  {
    text: 'Amazing organization! Their initiatives bring hope and real change in underserved communities.',
    img: '/assets/images/member-4.jpg',
    name: 'Priya Singh',
    role: 'Member',
  },
  {
    text: 'Supporting this charity feels meaningful. Every contribution helps improve lives and build a better future.',
    img: '/assets/images/member-1.jpg',
    name: 'Karan Mehta',
    role: 'Donor',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const total = testimonials.length

  const updateSlide = (idx) => {
    if (trackRef.current) {
      const width = trackRef.current.parentElement.clientWidth
      trackRef.current.style.transform = `translateX(-${idx * width}px)`
    }
  }

  useEffect(() => {
    updateSlide(index)
  }, [index])

  useEffect(() => {
    const handleResize = () => updateSlide(index)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [index])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % total)
    }, 4000)
    return () => clearInterval(timer)
  }, [total])

  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)

  return (
    <section id="testimonials" className="py-[90px]" style={{ background: 'rgba(240,245,232,0.69)' }}>
      <div className="container mx-auto px-4">
        <p className="section-subtitle">Testimonials</p>
        <h2 className="section-title">What People Say About Us</h2>

        <div className="testimonial-wrapper">

          {/* Image */}
          <div className="testimonial-image">
            <img src="/assets/images/testimonial.jpg" alt="testimonial" />
          </div>

          {/* Slider */}
          <div className="testimonial-content">
            <div className="testimonial-slider">
              <div className="testimonial-track" ref={trackRef}>
                {testimonials.map((t, i) => (
                  <div key={i} className="testimonial-item">
                    <div className="stars">★★★★★</div>
                    <p>{t.text}</p>
                    <div className="testimonial-user">
                      <img src={t.img} alt={t.name} />
                      <div>
                        <h4 className="font-semibold text-[#1b2a2f]">{t.name}</h4>
                        <span className="text-sm text-[#7a8a8d]">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonial-controls">
              <button onClick={prev}>‹</button>
              <button onClick={next}>›</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
