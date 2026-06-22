export default function About() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-[90px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">

          {/* Image — desktop only */}
          <div className="hidden lg:block w-full lg:w-1/2 px-4">
            <div className="about-img-wrapper">

              <img
                src="/assets/images/about.webp"
                className="img-main"
                alt="Charity volunteers helping community"
                loading="lazy"
              />

              <img
                src="/assets/images/about2.webp"
                className="img-small"
                alt="Team working together in charity mission"
                loading="lazy"
              />

              <div className="experience-box">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>

            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 px-4">

            {/* NOT H1 (fix for SEO structure) */}
            <p className="section-subtitle">
              <i className="fa-solid fa-heart text-rose-600" aria-hidden="true"></i>
              {" "}About Us
            </p>

            <h2 className="section-title">
              Helping Each Other Can Make World Better
            </h2>

            <p className="section-text">
              CharityCare works to uplift communities by providing essential
              support like food, education, and healthcare services.
            </p>

            <div className="flex items-center mt-8">
              <div className="icon-box">
                <i
                  className="fa-solid fa-hand-holding-heart"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="ml-4">
                <h6 className="font-semibold text-[#1b2a2f] mb-1">
                  Start Helping Team
                </h6>
                <p className="section-text mb-0">
                  Join our mission and support those in need.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="btn-custom"
                onClick={scrollToServices}
              >
                Explore More
              </button>
            </div>

          </div>

          {/* Image — mobile only */}
          <div className="block lg:hidden w-full px-4 mt-10">
            <div className="about-img-wrapper">

              <img
                className="img-main"
                src="/assets/images/about1.jpg"
                alt="Charity volunteers helping community"
                loading="lazy"
              />

              <div className="experience-box">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}