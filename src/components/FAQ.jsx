import { useState } from 'react'

const faqs = [
  {
    q: 'What Is Charity, And Why Is It Important ?',
    a: 'Charity helps reduce suffering and builds a better society by supporting those in need.',
  },
  {
    q: 'How Can I Get Involved In Charity Work ?',
    a: 'You can volunteer, donate, or participate in events organized by our foundation.',
  },
  {
    q: 'Dedication for charitable Donations ?',
    a: 'We ensure every donation is used responsibly and transparently.',
  },
  {
    q: 'My Donations Are Going To a Charity ?',
    a: 'Yes, we work with verified programs to ensure impact.',
  },
  {
    q: 'Is my donation actually being put to use?',
    a: 'Absolutely, we provide reports and updates for transparency.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-[90px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">

          {/* Accordion */}
          <div className="w-full lg:w-1/2 px-4">
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question ${open === i ? 'open' : ''}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  {item.q}
                  <span className="ml-2 text-[#2faf90]">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
            <div className="pl-0 lg:pl-8">
              <span className="section-subtitle">Our FAQ</span>
              <h2 className="section-title">Explore our faqs for quick and helpful guidance</h2>
              <p className="section-text">Charity helps reduce suffering and builds unity in society.</p>
              <div className="faq-image mt-5">
                <img src="/assets/images/faq.jpg" alt="faq" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
