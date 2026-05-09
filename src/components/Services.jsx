import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'

const services = [
  {
    icon: 'fa-graduation-cap',
    title: 'Education',
    text: 'Providing free education, digital learning, and essential resources to empower children and help them build a brighter future.',
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Medical Help',
    text: 'Offering basic healthcare, medicines, and emergency medical support to underprivileged communities who cannot afford proper treatment and care.',
  },
  {
    icon: 'fa-bowl-food',
    title: 'Food Support',
    text: 'Distributing nutritious meals and essential food supplies to hungry families, ensuring no one sleeps without proper food and care.',
  },
  {
    icon: 'fa-people-group',
    title: 'Community',
    text: 'Strengthening communities through awareness programs, skill development, and support initiatives that create sustainable growth and better living conditions.',
  },
  {
    icon: 'fa-hands-holding-child',
    title: 'Child Care',
    text: 'Ensuring safety, education, and proper care for children by providing shelter, guidance, and opportunities for healthy growth and development.',
  },
  {
    icon: 'fa-handshake-angle',
    title: 'Support',
    text: "Connecting volunteers with meaningful opportunities to contribute, support causes, and make a real difference in people's lives through collective efforts.",
  },
]

export default function Services() {
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        0:   { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    })
    return () => swiper.destroy(true, true)
  }, [])

  return (
    <section id="services" className="py-[90px]" style={{ background: 'rgba(240,245,232,0.69)' }}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <p className="section-subtitle">Our Services 🤌</p>
          <h2 className="section-title" style={{ maxWidth: 700 }}>
            Providing Humanist services to all people is what we do
          </h2>
        </div>

        <div className="swiper service-slider mt-10" ref={swiperRef}>
          <div className="swiper-wrapper">
            {services.map((s, i) => (
              <div className="swiper-slide" key={i}>
                <div className="service-card">
                  <div className="icon-circle">
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <h5 className="font-semibold text-lg text-[#1b2a2f]">{s.title}</h5>
                  <p className="section-text">{s.text}</p>
                  <button className="btn-custom" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
