import { useState } from 'react'

const donationCards = [
  {
    img: '/assets/images/d1.jpg',
    title: 'Support Child Education',
    text: 'Help underprivileged children access quality education and build a brighter future through learning support.',
    progress: 70,
    goal: '₹2,00,000',
    raised: '₹1,40,000',
  },
  {
    img: '/assets/images/d2.jpg',
    title: 'Provide Healthy Meals',
    text: 'Support food distribution programs to ensure families receive nutritious meals and live healthier lives.',
    progress: 60,
    goal: '₹1,50,000',
    raised: '₹90,000',
  },
  {
    img: '/assets/images/d3.jpg',
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
    <div className="donation-card">
      <div className="flex flex-wrap -mx-2 items-center">
        <div className="w-full md:w-5/12 px-2">
          <img src={card.img} className="donation-img" alt={card.title} />
        </div>
        <div className="w-full md:w-7/12 px-2">
          <h5 className="donation-title">{card.title}</h5>
          <p className="section-text">{card.text}</p>
          <div className="progress-wrap">
            <div className="progress-bar-fill" style={{ width: `${card.progress}%` }}>
              <span>{card.progress}%</span>
            </div>
          </div>
          <div className="donation-meta">
            <span>Goal: {card.goal}</span>
            <span>Raised: {card.raised}</span>
          </div>
          <a href="#contact" className="btn-donate">Donate Now</a>
        </div>
      </div>
    </div>
  )
}

export default function Donation() {
  const [selected, setSelected] = useState(null)
  const [custom,   setCustom]   = useState('')

  return (
    <section id="donation" className="py-[90px]" style={{ background: 'rgba(201,227,224,0.48)' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
          <div>
            <p className="section-subtitle">Start Donating</p>
            <h2 className="section-title">Make a Difference Today</h2>
          </div>
          <a href="#" className="btn-custom">View All</a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {donationCards.map((card, i) => (
            <DonationCard key={i} card={card} />
          ))}
        </div>

        {/* Custom donate box */}
        <div className="custom-donate-box mt-12">
          <div className="flex flex-wrap -mx-4 items-center">

            {/* Left */}
            <div className="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
              <h5 className="donate-small">❤️ Donate Now</h5>
              <h3 className="donate-heading">Make Your Contribution</h3>
              <div className="donate-amounts">
                {amounts.map(a => (
                  <button
                    key={a}
                    className={selected === a ? 'active' : ''}
                    onClick={() => setSelected(a)}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter Amount"
                className="donate-input"
                value={custom}
                onChange={e => setCustom(e.target.value)}
              />
              <button className="mt-3 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
                Donate Now
              </button>
            </div>

            {/* Right */}
            <div className="w-full lg:w-7/12 px-4">
              <h2 className="donate-title">Support Lives &amp; Create Impact Together</h2>
              <div className="progress-wrap">
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
