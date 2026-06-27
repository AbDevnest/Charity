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

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % total)
    }, 3500)
    return () => clearInterval(intervalRef.current)
  }, [paused, total])

  return (
    <section id="testimonials" className="testi-section" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">

        <div className="testi-header">
          <p className="section-subtitle">Testimonials</p>
          <h2 id="testimonials-heading" className="section-title">What People Say About Us</h2>
          <p className="section-text" style={{ maxWidth: 520 }}>
            Real stories from real people who have witnessed the change we create together.
          </p>
        </div>

        <div
          className="testi-slider-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Testimonials slider"
          aria-roledescription="carousel"
        >
          <div className="testi-viewport" aria-live="polite">
            <div
              className="testi-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className="testi-card"
                  aria-hidden={i !== index}
                  aria-roledescription="slide"
                  aria-label={`Testimonial by ${t.name}`}
                >
                  <div className="testi-quote" aria-hidden="true">"</div>

                  <div className="testi-stars" aria-label="5 out of 5 stars rating">★★★★★</div>

                  <p className="testi-text">{t.text}</p>

                  <div className="testi-user">
                    <img
                      src={t.img}
                      alt={`${t.name} - CharityCare ${t.role}`}
                      className="testi-avatar"
                      loading="lazy"
                      width={58}
                      height={58}
                    />
                    <div>
                      <h3 className="testi-name">{t.name}</h3>
                      <span className="testi-role">{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="testi-btn testi-btn-prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <button
            className="testi-btn testi-btn-next"
            onClick={next}
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>

        <div className="testi-dots" role="tablist" aria-label="Testimonial navigation dots">
          {testimonials.map((t, i) => (
            <button
              key={i}
              className={`testi-dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial by ${t.name}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>

      </div>
    </section>
  )
}