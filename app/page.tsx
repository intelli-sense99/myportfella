import Hero from '../Component/Hero'
import About from '../Component/About'
import Skills from '../Component/Skills'
import Projects from '../Component/Projects'
import Services from '../Component/Services'
import Contact from '../Component/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container py-12">
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>
    </>
  )
}
