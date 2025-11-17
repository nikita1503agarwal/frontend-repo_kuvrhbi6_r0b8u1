import { motion } from 'framer-motion'
import { Shield, Zap } from 'lucide-react'

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } })
}

export default function Brothers() {
  return (
    <section id="brothers" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.3),transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={card} className="group rounded-2xl p-6 ring-1 ring-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/20 ring-1 ring-sky-300/30">
                <Shield className="h-5 w-5 text-sky-200" />
              </span>
              <h3 className="text-2xl font-black text-sky-100">Philo</h3>
            </div>
            <p className="mt-3 text-sky-200/80">A tactician of tides, Philo bends moonlit waves into pixel shields and shimmering paths.</p>
            <div className="mt-4 h-32 w-full rounded-xl bg-[linear-gradient(135deg,#1d4ed8_0%,#0ea5e9_100%)] [image-rendering:pixelated] relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div custom={2} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={card} className="group rounded-2xl p-6 ring-1 ring-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 ring-1 ring-cyan-300/30">
                <Zap className="h-5 w-5 text-cyan-200" />
              </span>
              <h3 className="text-2xl font-black text-cyan-100">Nate</h3>
            </div>
            <p className="mt-3 text-cyan-200/80">A comet-sprinter, Nate sparks constellations into paths and dashes between pixels of time.</p>
            <div className="mt-4 h-32 w-full rounded-xl bg-[linear-gradient(135deg,#0ea5e9_0%,#22d3ee_100%)] [image-rendering:pixelated] relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
