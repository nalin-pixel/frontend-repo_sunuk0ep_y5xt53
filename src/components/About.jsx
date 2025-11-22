import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects', value: '24+' },
  { label: 'Clients', value: '12' },
  { label: 'Awards', value: '3' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_200px_at_0%_0%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(600px_200px_at_100%_80%,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              We are Sui Ghana — a design-forward studio exploring the playful edge of technology. We build immersive interfaces, expressive brand systems and robust web apps that feel effortless.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Our process blends strategy, craft and iteration. Every detail matters — type, motion, micro-interactions — all working together to create delightful experiences.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur">
            <dl className="grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="text-sm text-slate-400">{s.label}</dt>
                  <dd className="mt-2 text-3xl font-bold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Interactive product prototypes</li>
              <li>• Brand and web design systems</li>
              <li>• High-performance frontend engineering</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
