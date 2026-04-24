import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Extracurriculars from './components/Extracurriculars'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Extracurriculars />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
