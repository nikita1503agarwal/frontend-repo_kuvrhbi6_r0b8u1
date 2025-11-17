import { motion } from 'framer-motion'
import { Sparkles, Swords, Stars } from 'lucide-react'

const titleVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const subtitleVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ onExplore }) {
  // Safely encode the inline SVG to avoid JSX parsing issues
  const pixelStarsSVG = encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="8" shape-rendering="crispEdges">' +
      '<rect width="2" height="2" x="2" y="2" fill="#a5b4fc"/>' +
      '<rect width="2" height="2" x="40" y="4" fill="#99c1ff"/>' +
      '<rect width="2" height="2" x="70" y="1" fill="#88a8ff"/>' +
    '</svg>'
  )

  return (
    <section className="relative overflow-hidden">
      {/* Cosmic glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(76,118,255,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(24,72,255,0.35),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.06) 75%, rgba(255,255,255,0.06) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.06) 75%, rgba(255,255,255,0.06) 76%, transparent 77%)', backgroundSize: '42px 42px' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={titleVariant}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur"
        >
          <Stars className="h-4 w-4 text-sky-300" />
          <span className="text-xs tracking-widest uppercase text-sky-200">Hypermodern Pixel Fantasy</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={titleVariant}
          className="mt-5 text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] text-sky-100 drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]"
          style={{ textShadow: '0 0 16px rgba(56,124,255,0.35)' }}
        >
          Philo & Nate
          <span className="block bg-gradient-to-r from-sky-200 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">Brothers of the Deep</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={subtitleVariant}
          className="mx-auto mt-5 max-w-2xl text-sky-200/80 text-lg"
        >
          Two pixel heroes wandering neon oceans and midnight constellations. Tap, hover, and explore their shimmering world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={onExplore} className="group inline-flex items-center gap-2 rounded-xl bg-sky-500/20 px-5 py-3 text-sky-100 ring-1 ring-sky-300/30 hover:bg-sky-400/25 transition-colors">
            <Sparkles className="h-5 w-5 text-sky-200 group-hover:rotate-12 transition-transform" />
            Explore the Realm
          </button>
          <a href="#brothers" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sky-100 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
            <Swords className="h-5 w-5 text-sky-200" /> Meet the Brothers
          </a>
        </motion.div>
      </div>

      {/* Scrolling pixel stars */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 [image-rendering:pixelated] animate-[scrollX_18s_linear_infinite] opacity-50"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${pixelStarsSVG}")` }}
      />
    </section>
  )
}
