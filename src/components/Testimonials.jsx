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
  const [paused, setPaused] = useState(false)
  const total = testimonials.length
  const intervalRef = useRef(null)

  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)

  // Auto scroll
  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % total)
    }, 3500)
    return () => clearInterval(intervalRef.current)
  }, [paused, total])

  return (
    <section id="testimonials" className="testi-section">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="testi-header">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">What People Say About Us</h2>
          <p className="section-text" style={{ maxWidth: 520 }}>
            Real stories from real people who have witnessed the change we create together.
          </p>
        </div>

        {/* Slider */}
        <div
          className="testi-slider-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards viewport */}
          <div className="testi-viewport">
            <div
              className="testi-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="testi-card">
                  {/* Quote icon */}
                  <div className="testi-quote">"</div>

                  {/* Stars */}
                  <div className="testi-stars">★★★★★</div>

                  {/* Text */}
                  <p className="testi-text">{t.text}</p>

                  {/* User */}
                  <div className="testi-user">
                    <img src={t.img} alt={t.name} className="testi-avatar" />
                    <div>
                      <h4 className="testi-name">{t.name}</h4>
                      <span className="testi-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button className="testi-btn testi-btn-prev" onClick={prev} aria-label="Previous">
            &#8249;
          </button>
          <button className="testi-btn testi-btn-next" onClick={next} aria-label="Next">
            &#8250;
          </button>
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
