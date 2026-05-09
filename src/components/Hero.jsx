export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">

          {/* Left */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="section-subtitle">❤️ Change Lives With Us</p>
            <h1 className="hero-heading">
              Small Help Can Make <br />
              A Big Difference
            </h1>
            <p className="section-text" style={{ color: '#cbd5e1' }}>
              CharityCare is committed to supporting people in need through
              education, food, and healthcare. Together, we can create a
              brighter and better future.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a href="#contact" className="btn-custom">Donate Now</a>
              <a
                href="#"
                className="inline-block px-6 py-[10px] bg-white text-[#1b2a2f] rounded-[30px] text-sm font-medium transition hover:bg-gray-100"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 px-4 text-center mt-10 lg:mt-0">
            <div className="hero-img-wrapper inline-block">
              <img src="/assets/images/hero.jpg" alt="hero" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
