// Team.jsx
const members = [
  { img: '/assets/images/member-2.jpg', name: 'Rahul Sharma', role: 'Volunteer',    offsetTop: true },
  { img: '/assets/images/member-1.jpg', name: 'Priya Verma',  role: 'Coordinator', offsetTop: false },
  { img: '/assets/images/member-4.jpg', name: 'Aman Khan',    role: 'Organizer',   offsetTop: true },
  { img: '/assets/images/member-3.jpg', name: 'Sneha Patel',  role: 'Volunteer',   offsetTop: false },
]

export default function Team() {
  return (
    <section id="team" className="py-[90px]" style={{ background: 'rgba(201,227,224,0.48)' }} aria-labelledby="team-heading">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
          <div>
            <p className="section-subtitle">Our Team</p>
            <h2 id="team-heading" className="section-title">Meet Our Volunteers</h2>
          </div>
          <button
            className="btn-custom"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Join CharityCare as a volunteer"
          >
            Join With Us
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {members.map((m, i) => (
            <article key={i} className={`team-card ${m.offsetTop ? 'mt-10' : ''}`} >
              <div className="team-img">
                <img
                  src={m.img}
                  alt={`${m.name} - CharityCare ${m.role}`}
                  loading="lazy"
                  width={300}
                  height={260}
                />
              </div>
              <div className="team-content">
                <h3 style={{ fontWeight: 600, marginBottom: 4, color: '#1b2a2f' }}>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}