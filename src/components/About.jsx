import { motion } from 'framer-motion'

const stats = [
  { label: 'Transactions', value: '85M+' },
  { label: 'Communities', value: '40+' },
  { label: 'Deploys', value: '350+' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_200px_at_0%_0%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(600px_200px_at_100%_80%,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-cyan-300/80">Who we are</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white tracking-tight">Builders on Sui. Community-first.</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              We design, ship and scale crypto-native products across DeFi, identity and infrastructure. Our work blends token design, security, and motion-forward UX.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Based in Ghana, connected to the world. We empower local devs, run hack-nights and contribute to open-source.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur neon-border">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl" />
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
              <li>• Move smart contract audits</li>
              <li>• Token launches and airdrops</li>
              <li>• Wallet and explorer UX</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
