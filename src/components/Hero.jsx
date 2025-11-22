import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Sui Ghana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-lg md:text-xl text-slate-300 max-w-xl"
          >
            A modern portfolio showcasing projects, people and playful tech. Crafted with performance, polish and subtle motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_40px_rgba(255,255,255,0.25)] transition-shadow">See Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-3 backdrop-blur hover:bg-white/20 transition-colors">Contact</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
