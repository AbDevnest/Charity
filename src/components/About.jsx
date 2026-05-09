export default function About() {
  return (
    <section id="about" className="py-[90px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">

          {/* Image — desktop only (left) */}
          <div className="hidden lg:block w-full lg:w-1/2 px-4">
            <div className="about-img-wrapper">
              <img src="/assets/images/about1.jpg" className="img-main" alt="about" />
              <img src="/assets/images/about2.jpg" className="img-small" alt="about" />
              <div className="experience-box">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 px-4">
            <p className="section-subtitle">❤️ About Us</p>
            <h2 className="section-title">Helping Each Other Can Make World Better</h2>
            <p className="section-text">
              CharityCare works to uplift communities by providing essential
              support like food, education, and healthcare services.
            </p>

            <div className="flex items-center mt-8">
              <div className="icon-box">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div className="ml-4">
                <h6 className="font-semibold text-[#1b2a2f] mb-1">Start Helping Team</h6>
                <p className="section-text mb-0">Join our mission and support those in need.</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="btn-custom"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore More
              </button>
            </div>
          </div>

          {/* Image — mobile only (below text) */}
          <div className="block lg:hidden w-full px-4 mt-10">
            <div className="about-img-wrapper">
              <img src="/assets/images/about1.jpg" className="img-main" alt="about" />
              <div className="experience-box">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
