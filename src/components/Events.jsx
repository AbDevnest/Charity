const stats = [
  { icon: 'fa-users',           value: '260+', label: 'Total Happy Children' },
  { icon: 'fa-handshake-angle', value: '110+', label: 'Our Volunteers' },
  { icon: 'fa-box-open',        value: '190+', label: 'Products & Gifts' },
  { icon: 'fa-globe',           value: '560+', label: 'Worldwide Donors' },
]

const events = [
  {
    img: '/assets/images/event1.jpg',
    date: '29\nJuly',
    title: 'Growing Communities Together',
    text: 'Join us in supporting local families with food, education, and healthcare initiatives for better living.',
    location: 'Jaipur, India',
  },
  {
    img: '/assets/images/event2.jpg',
    date: '10\nAug',
    title: 'Education Support Drive',
    text: 'Providing school kits and learning support to children in need to help them build brighter futures.',
    location: 'Delhi, India',
  },
  {
    img: '/assets/images/event3.webp',
    date: '22\nAug',
    title: 'Health & Wellness Camp',
    text: 'Free medical checkups and essential healthcare services for underserved communities and families.',
    location: 'Mumbai, India',
  },
  {
    img: '/assets/images/event4.webp',
    date: '05\nSep',
    title: 'Food Distribution Program',
    text: 'Helping provide nutritious meals to families and children struggling with hunger and poverty.',
    location: 'Ahmedabad, India',
  },
]

export default function Events() {
  return (
    <section id="events" className="event-section">
      <div className="container mx-auto px-4">

        {/* Stats */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center -mx-4 gap-y-6">
            {stats.map((s, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/4 px-4 flex justify-center">
                <div className="stat-circle">
                  <i className={`fa-solid ${s.icon}`}></i>
                  <h4>{s.value}</h4>
                  <p>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
          <div>
            <p className="section-subtitle" style={{ background: '#fff', color: '#2faf90', display: 'inline-block', padding: '4px 12px', borderRadius: '20px' }}>
              Upcoming Events
            </p>
            <h2 className="section-title" style={{ color: '#fff' }}>Our Latest Events</h2>
          </div>
          <button
            className="btn-custom mt-3 md:mt-0"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore More
          </button>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <div key={i} className="event-card">
              <div className="event-img">
                <img src={ev.img} alt={ev.title} />
                <span className="event-date" style={{ whiteSpace: 'pre-line' }}>{ev.date}</span>
              </div>
              <div className="event-content">
                <h5>{ev.title}</h5>
                <p>{ev.text}</p>
                <p className="event-meta my-4">
                  <i className="fa-solid fa-location-dot"></i> {ev.location}
                </p>
                <button className="event-btn">Event Details</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
