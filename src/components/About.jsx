// About.jsx
export default function About() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-[90px] bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">

          <div className="hidden lg:block w-full lg:w-1/2 px-4">
            <div className="about-img-wrapper">
              <img
                src="/assets/images/about.webp"
                className="img-main"
                alt="CharityCare volunteers helping community members with food and education"
                loading="lazy"
                width={450}
                height={500}
              />
              <img
                src="/assets/images/about2.webp"
                className="img-small"
                alt="CharityCare team working together on charity mission"
                loading="lazy"
                width={180}
                height={180}
              />
              <div className="experience-box" aria-label="15 plus years of experience">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <p className="section-subtitle">
              <i className="fa-solid fa-heart text-rose-600" aria-hidden="true"></i>
              {" "}About Us
            </p>

            <h2 id="about-heading" className="section-title">
              Helping Each Other Can Make World Better
            </h2>

            <p className="section-text">
              CharityCare works to uplift communities by providing essential
              support like food, education, and healthcare services. For over
              15 years, we have been committed to creating lasting change in
              the lives of those who need it most.
            </p>

            <div className="flex items-center mt-8">
              <div className="icon-box" aria-hidden="true">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-[#1b2a2f] mb-1">
                  Start Helping Team
                </h3>
                <p className="section-text mb-0">
                  Join our mission and support those in need across communities worldwide.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="btn-custom"
                onClick={scrollToServices}
                aria-label="Explore our charity services"
              >
                Explore More
              </button>
            </div>
          </div>

          <div className="block lg:hidden w-full px-4 mt-10">
            <div className="about-img-wrapper">
              <img
                className="img-main"
                src="/assets/images/about1.jpg"
                alt="CharityCare volunteers helping community members"
                loading="lazy"
                width={450}
                height={500}
              />
              <div className="experience-box" aria-label="15 plus years of experience">
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