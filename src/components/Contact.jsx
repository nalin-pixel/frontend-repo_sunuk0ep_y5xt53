import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_0%_100%,rgba(20,184,166,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s Build Something</h2>
            <p className="mt-4 text-slate-300">Tell us about your idea, timeline and what success looks like. We’ll get back within 24 hours.</p>
            <div className="mt-6 flex items-center gap-3 text-slate-300"><Mail size={18} /> hello@sui.gh</div>
          </div>

          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" required />
              <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" required />
            </div>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Company" />
            <textarea rows="5" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell us about your project..." required />
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_rgba(34,197,94,0.25)] hover:shadow-[0_14px_40px_rgba(34,197,94,0.35)] transition-shadow">
              <Send size={18} />
              {sent ? 'Sent — we’ll be in touch!' : 'Send message'}
            </button>
          </motion.form>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-slate-400">
          <p>© {new Date().getFullYear()} Sui Ghana. All rights reserved.</p>
          <a href="#home" className="text-slate-300 hover:text-white">Back to top</a>
        </div>
      </div>
    </section>
  )
}
