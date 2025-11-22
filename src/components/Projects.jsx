import { motion } from 'framer-motion'
import { ExternalLink, Layers, Sparkles } from 'lucide-react'

const work = [
  {
    title: 'Sui Explorer – Africa Edition',
    desc: 'On-chain insights with real-time charts, mempool heatmaps and wallet profiling.',
    tags: ['Sui', 'Next.js', 'Recharts'],
    href: '#'
  },
  {
    title: 'AeroDrop',
    desc: 'Airdrop orchestration for communities with allowlists, proofs and analytics.',
    tags: ['Sui', 'Move', 'Edge'],
    href: '#'
  },
  {
    title: 'HealthFlow',
    desc: 'HIPAA-ready dashboards for healthcare data exchange secured on-chain.',
    tags: ['React', 'Tailwind', 'Supabase'],
    href: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_50%_0%,rgba(56,189,248,0.10),transparent_70%)]" />

      <div className="absolute -z-0 left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-indigo-500/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-300/80">Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">DeFi, Infra and Experiences</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Work with us</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              initial={{ opacity: 0, y: 20, scale: .98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-white/20 neon-border"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/0 via-sky-400/0 to-indigo-500/10" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-white flex items-center gap-2">
                    <Layers size={18} className="text-cyan-300" /> {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{w.desc}</p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-white mt-1" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {w.tags.map(t => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 flex items-center gap-1">
                    <Sparkles size={12} className="text-cyan-300" /> {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
