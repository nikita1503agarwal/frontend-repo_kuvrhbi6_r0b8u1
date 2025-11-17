import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,#1e3a8a,transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-gradient-to-br from-sky-900/60 to-indigo-900/60 ring-1 ring-white/10 p-8">
          <h3 className="text-2xl sm:text-3xl font-black text-sky-100">Enter the Deep Fantasy Blue</h3>
          <p className="mt-2 text-sky-200/80">Summon particles, ride pixel waves, and watch the world react to your cursor. Philo and Nate await.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#brothers" className="inline-flex items-center gap-2 rounded-xl bg-sky-500/20 px-5 py-3 text-sky-100 ring-1 ring-sky-300/30 hover:bg-sky-400/25 transition-colors">
              <Sparkles className="h-5 w-5" /> Meet the Heroes
            </a>
            <a href="#ocean" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sky-100 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
              <Play className="h-5 w-5" /> Ride the Pixel Ocean
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
