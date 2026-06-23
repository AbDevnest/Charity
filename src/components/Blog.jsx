// Blog.jsx
const posts = [
  {
    img: '/assets/images/01.jpg',
    offsetTop: true,
    title: 'How Education Can Transform A Child\'s Future',
    author: 'CharityCare Team',
    date: 'June 2026',
    alt: 'Child studying with books provided by CharityCare education program',
  },
  {
    img: '/assets/images/02.jpg',
    offsetTop: false,
    title: 'Providing Healthy Meals to Communities in Need',
    author: 'CharityCare Team',
    date: 'May 2026',
    alt: 'CharityCare volunteers distributing healthy meals to families',
  },
  {
    img: '/assets/images/03.jpg',
    offsetTop: true,
    title: 'Medical Support That Changes Lives Every Day',
    author: 'CharityCare Team',
    date: 'April 2026',
    alt: 'CharityCare medical team providing healthcare support to community',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-[90px]" style={{ background: 'rgba(201,227,224,0.48)' }} aria-labelledby="blog-heading">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <p className="section-subtitle">Blog &amp; News</p>
          <h2 id="blog-heading" className="section-title">Insights from Our Latest Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {posts.map((post, i) => (
            <article key={i} className={`blog-card ${post.offsetTop ? 'md:mt-8' : ''}`} role="listitem">
              <div className="blog-img border rounded">
                <img
                  src={post.img}
                  alt={post.alt}
                  loading="lazy"
                  width={400}
                  height={240}
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta border-b mb-3 pb-3">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="border-b mb-3 pb-3" style={{ fontSize: '18px', color: '#2c3e40', lineHeight: '1.5' }}>
                  {post.title}
                </h3>
                <button
                  className="read-more"
                  aria-label={`Read more about: ${post.title}`}
                >
                  Read More <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}