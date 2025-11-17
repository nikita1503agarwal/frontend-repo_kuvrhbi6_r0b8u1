import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Brothers from './components/Brothers'
import PixelOcean from './components/PixelOcean'
import CTA from './components/CTA'

function App() {
  const oceanRef = useRef(null)

  const scrollToOcean = () => {
    const el = document.getElementById('ocean')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#061a2b] text-white selection:bg-sky-500/40 selection:text-white">
      {/* Floating navigation */}
      <div className="fixed inset-x-0 top-5 z-50 flex justify-center">
        <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <a href="#" className="text-sky-200/90 text-sm hover:text-white transition-colors">Home</a>
          <span className="text-white/20">•</span>
          <a href="#brothers" className="text-sky-200/90 text-sm hover:text-white transition-colors">Brothers</a>
          <span className="text-white/20">•</span>
          <a href="#ocean" className="text-sky-200/90 text-sm hover:text-white transition-colors">Pixel Ocean</a>
        </div>
      </div>

      {/* Hero */}
      <Hero onExplore={scrollToOcean} />

      {/* Ocean */}
      <section id="ocean" ref={oceanRef} className="relative px-6 pt-6">
        <PixelOcean />
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <p className="mt-6 text-sky-200/80">Hover and move—ripples shimmer and pixel stars drift in parallax. The deep fantasy blue comes alive.</p>
        </motion.div>
      </section>

      {/* Brothers */}
      <Brothers />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="relative py-10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_100%,#0b3b67,transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sky-200/80 text-sm">© {new Date().getFullYear()} Philo & Nate</p>
          <div className="flex items-center gap-3 text-sky-300/70">
            <span className="[image-rendering:pixelated] inline-block h-2 w-2 bg-sky-300 shadow-[0_0_10px_rgba(56,124,255,0.8)]" />
            <span className="[image-rendering:pixelated] inline-block h-2 w-2 bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
            <span className="[image-rendering:pixelated] inline-block h-2 w-2 bg-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.7)]" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
