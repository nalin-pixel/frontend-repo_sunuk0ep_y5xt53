import { useState } from 'react'
import { Menu, X, Mail, Github, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-slate-200/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg neon-border">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="relative flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_35px_rgba(56,189,248,0.45)] shimmer" />
              <span className="text-white font-semibold tracking-tight">Sui Ghana</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="mailto:hello@sui.gh" className="text-slate-300 hover:text-white" aria-label="Email"><Mail size={18} /></a>
                <a href="https://github.com/" target="_blank" className="text-slate-300 hover:text-white" aria-label="GitHub" rel="noreferrer"><Github size={18} /></a>
                <a href="#" className="text-slate-300 hover:text-white" aria-label="Website"><Globe2 size={18} /></a>
                <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors">Let’s talk</a>
              </div>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              <NavLink href="#about" onClick={close}>About</NavLink>
              <div />
              <NavLink href="#projects" onClick={close}>Projects</NavLink>
              <div />
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <div className="pt-2 flex items-center gap-4">
                <a href="mailto:hello@sui.gh" className="text-slate-300 hover:text-white" aria-label="Email"><Mail size={18} /></a>
                <a href="https://github.com/" target="_blank" className="text-slate-300 hover:text-white" aria-label="GitHub" rel="noreferrer"><Github size={18} /></a>
                <a href="#" className="text-slate-300 hover:text-white" aria-label="Website"><Globe2 size={18} /></a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  )
}
