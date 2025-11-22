import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const work = [
  {
    title: 'Sui Explorer – Africa Edition',
    desc: 'A visual explorer for on-chain activity with playful 3D touches and buttery performance.',
    tags: ['Next.js', 'Three.js', 'Edge'],
    href: '#'
  },
  {
    title: 'HealthFlow',
    desc: 'Patient-first dashboards with clear data viz, fast search and HIPAA-ready infra.',
    tags: ['React', 'Tailwind', 'Supabase'],
    href: '#'
  },
  {
    title: 'AeroDrop',
    desc: 'Brand + site for a fintech product; rhythm, motion and delightful interactions.',
    tags: ['Brand', 'Design', 'Web'],
    href: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_50%_0%,rgba(99,102,241,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Work with us</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-emerald-400/0 to-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{w.desc}</p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-white mt-1" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {w.tags.map(t => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
