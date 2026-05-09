const members = [
  { img: '/assets/images/member-2.jpg', name: 'Rahul Sharma', role: 'Volunteer',    offsetTop: true },
  { img: '/assets/images/member-1.jpg', name: 'Priya Verma',  role: 'Coordinator', offsetTop: false },
  { img: '/assets/images/member-4.jpg', name: 'Aman Khan',    role: 'Organizer',   offsetTop: true },
  { img: '/assets/images/member-3.jpg', name: 'Sneha Patel',  role: 'Volunteer',   offsetTop: false },
]

export default function Team() {
  return (
    <section id="team" className="py-[90px]" style={{ background: 'rgba(201,227,224,0.48)' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
          <div>
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-title">Meet Our Volunteers</h2>
          </div>
          <button
            className="btn-custom"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join With Us
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div key={i} className={`team-card ${m.offsetTop ? 'mt-10' : ''}`}>
              <div className="team-img">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="team-content">
                <h5>{m.name}</h5>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
