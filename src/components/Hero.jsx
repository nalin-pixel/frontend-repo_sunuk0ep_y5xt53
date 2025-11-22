import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] pt-28 overflow-hidden">
      {/* Animated background grid and aurora glows */}
      <div className="absolute inset-0 bg-grid" />
      <div className="aurora -top-20 -left-20 w-[50vw] h-[50vw] rounded-full opacity-50" />
      <div className="aurora bottom-[-10rem] right-[-10rem] w-[60vw] h-[60vw] rounded-full opacity-40" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for crypto vibe */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm uppercase tracking-widest text-cyan-300/80">Built on Sui • Web3 • DeFi • NFTs</p>
            <h1 className="mt-3 text-5xl md:text-7xl font-extrabold leading-[1.05] text-gradient">Sui Ghana — Building the decentralized future</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl"
          >
            We craft crypto-native products and experiences on the Sui blockchain with performance, security and delightful motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_35px_rgba(34,197,94,0.25)] transition-colors">
              Explore builds <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 text-white px-6 py-3 backdrop-blur hover:bg-white/10 transition-colors">
              Partner with us
            </a>
          </motion.div>

          {/* Floating stat cards */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[{k:'TVL',v:'$12.5M+'},{k:'Latency',v:'< 250ms'},{k:'Contracts',v:'120+'}].map((s, i) => (
              <motion.div key={s.k} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .1 * i }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur neon-border">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/0 via-sky-400/0 to-indigo-500/10" />
                <p className="text-sm text-slate-400">{s.k}</p>
                <p className="mt-1 text-2xl font-bold text-white">{s.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
