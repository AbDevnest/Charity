const posts = [
  { img: '/assets/images/01.jpg', offsetTop: true },
  { img: '/assets/images/02.jpg', offsetTop: false },
  { img: '/assets/images/03.jpg', offsetTop: true },
]

export default function Blog() {
  return (
    <section id="blog" className="py-[90px]" style={{ background: 'rgba(201,227,224,0.48)' }}>
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <div className="section-subtitle">Blog &amp; News</div>
          <h2 className="section-title">Insights from latest blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className={`blog-card ${post.offsetTop ? 'md:mt-8' : ''}`}>
              <div className="blog-img border rounded">
                <img src={post.img} alt="blog" />
              </div>
              <div className="blog-content">
                <div className="blog-meta border-b mb-3 pb-3">
                  <span>By Admin</span>
                  <span>By Comment</span>
                </div>
                <h5 className="border-b mb-3 pb-3">
                  How Education Can Transform A Child's Future.
                </h5>
                <a href="#" className="read-more">
                  Read More <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
