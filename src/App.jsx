import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import Donation     from './components/Donation'
import Events       from './components/Events'
import Team         from './components/Team'
import Testimonials from './components/Testimonials'
import FAQ          from './components/FAQ'
import Blog         from './components/Blog'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Donation />
        <Events />
        <Team />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
