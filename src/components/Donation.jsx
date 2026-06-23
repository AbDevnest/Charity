// Donation.jsx
import { useState } from 'react'

const donationCards = [
  {
    img: '/assets/images/d1.webp',
    title: 'Support Child Education',
    text: 'Help underprivileged children access quality education and build a brighter future through learning support.',
    progress: 70,
    goal: '₹2,00,000',
    raised: '₹1,40,000',
  },
  {
    img: '/assets/images/d2.webp',
    title: 'Provide Healthy Meals',
    text: 'Support food distribution programs to ensure families receive nutritious meals and live healthier lives.',
    progress: 60,
    goal: '₹1,50,000',
    raised: '₹90,000',
  },
  {
    img: '/assets/images/d3.webp',
    title: 'Medical Support',
    text: 'Help provide essential medical care and emergency support to those who cannot afford treatment.',
    progress: 80,
    goal: '₹3,00,000',
    raised: '₹2,40,000',
  },
  {
    img: '/assets/images/d4.jpg',
    title: 'Community Development',
    text: 'Support programs that improve livelihoods, skills, and overall development of local communities.',
    progress: 50,
    goal: '₹2,50,000',
    raised: '₹1,25,000',
  },
]

const amounts = ['$10', '$20', '$50', '$100']

function DonationCard({ card }) {
  return (
    <article className="donation-card">
      <div className="flex flex-wrap -mx-2 items-center">
        <div className="w-full md:w-5/12 px-2">
          <img
            src={card.img}
            className="donation-img"
            alt={`Donate to ${card.title} - CharityCare`}
            loading="lazy"
            width={300}
            height={180}
          />
        </div>
        <div className="w-full md:w-7/12 px-2">
          <h3 className="donation-title">{card.title}</h3>
          <p className="section-text">{card.text}</p>
          <div
            className="progress-wrap"
            role="progressbar"
            aria-valuenow={card.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${card.title} fundraising progress: ${card.progress}%`}
          >
            <div className="progress-bar-fill" style={{ width: `${card.progress}%` }}>
              <span>{card.progress}%</span>
            </div>
          </div>
          <div className="donation-meta">
            <span>Goal: {card.goal}</span>
            <span>Raised: {card.raised}</span>
          </div>
          <button
            className="btn-donate"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label={`Donate now to ${card.title}`}
          >
            Donate Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Donation() {
  const [selected, setSelected] = useState(null)
  const [custom, setCustom] = useState('')

  return (
    <section id="donation" className="py-[90px]" style={{ background: 'rgba(201,227,224,0.48)' }} aria-labelledby="donation-heading">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
          <div>
            <p className="section-subtitle">Start Donating</p>
            <h2 id="donation-heading" className="section-title">Make a Difference Today</h2>
          </div>
          <button
            className="btn-custom"
            onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View all donation campaigns"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {donationCards.map((card, i) => (
            <DonationCard key={i} card={card} />
          ))}
        </div>

        <div className="custom-donate-box mt-12" aria-label="Custom donation amount selector">
          <div className="flex flex-wrap -mx-4 items-center">

            <div className="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
              <p className="donate-small">❤️ Donate Now</p>
              <h3 className="donate-heading">Make Your Contribution</h3>
              <div className="donate-amounts" role="group" aria-label="Select donation amount">
                {amounts.map(a => (
                  <button
                    key={a}
                    className={selected === a ? 'active' : ''}
                    onClick={() => setSelected(a)}
                    aria-pressed={selected === a}
                    aria-label={`Donate ${a}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <label htmlFor="custom-amount" className="sr-only">Enter custom donation amount</label>
              <input
                id="custom-amount"
                type="number"
                placeholder="Enter Amount"
                className="donate-input"
                value={custom}
                onChange={e => setCustom(e.target.value)}
                min={1}
                aria-label="Enter custom donation amount"
              />
              <button
                className="mt-3 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
                aria-label="Proceed to donate"
              >
                Donate Now
              </button>
            </div>

            <div className="w-full lg:w-7/12 px-4">
              <h2 className="donate-title">Support Lives &amp; Create Impact Together</h2>
              <div
                className="progress-wrap"
                role="progressbar"
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Overall fundraising progress: 65%"
              >
                <div className="progress-bar-fill" style={{ width: '65%' }}>
                  <span>65%</span>
                </div>
              </div>
              <div className="donate-meta">
                <span>Raised: ₹65,000</span>
                <span>Goal: ₹1,00,000</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}