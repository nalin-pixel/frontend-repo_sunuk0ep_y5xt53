import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(56,189,248,0.10),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
