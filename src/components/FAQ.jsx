// FAQ.jsx
import { useState } from 'react'

const faqs = [
  {
    q: 'What Is Charity, And Why Is It Important?',
    a: 'Charity helps reduce suffering and builds a better society by supporting those in need with food, education, and healthcare.',
  },
  {
    q: 'How Can I Get Involved In Charity Work?',
    a: 'You can volunteer, donate, or participate in events organized by CharityCare foundation across India.',
  },
  {
    q: 'How Are Charitable Donations Used?',
    a: 'We ensure every donation is used responsibly and transparently for our education, food, and medical programs.',
  },
  {
    q: 'How Do I Know My Donation Reached The Right People?',
    a: 'Yes, we work with verified programs and share regular updates and impact reports with all our donors.',
  },
  {
    q: 'Is My Donation Actually Being Put To Use?',
    a: 'Absolutely, we provide detailed reports and updates for full transparency on how your donation creates impact.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-[90px] bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">

          <div className="w-full lg:w-1/2 px-4">
            <dl>
              {faqs.map((item, i) => (
                <div key={i} className="faq-item">
                  <dt>
                    <button
                      className={`faq-question ${open === i ? 'open' : ''}`}
                      onClick={() => setOpen(open === i ? -1 : i)}
                      aria-expanded={open === i}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      {item.q}
                      <span className="ml-2 text-[#2faf90]" aria-hidden="true">{open === i ? '−' : '+'}</span>
                    </button>
                  </dt>
                  {open === i && (
                    <dd
                      id={`faq-answer-${i}`}
                      className="faq-answer"
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                    >
                      {item.a}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>

          <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
            <div className="pl-0 lg:pl-8">
              <p className="section-subtitle">Our FAQ</p>
              <h2 id="faq-heading" className="section-title">Explore Our FAQs for Quick and Helpful Guidance</h2>
              <p className="section-text">
                Have questions about CharityCare? Find answers about donations, volunteering, and our programs below.
              </p>
              <div className="faq-image mt-5">
                <img
                  src="/assets/images/faq.jpg"
                  alt="CharityCare team answering frequently asked questions about charity"
                  loading="lazy"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}