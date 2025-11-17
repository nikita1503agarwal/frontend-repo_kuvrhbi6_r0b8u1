import { useEffect, useRef } from 'react'

export default function PixelOcean() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    let t = 0
    const palette = ['#082f49', '#0b3b67', '#0e4a7a', '#165896', '#1e40af']

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    resize()

    const px = 6 // pixel size

    function draw() {
      t += 0.02
      // background base
      ctx.fillStyle = '#061a2b'
      ctx.fillRect(0, 0, w, h)

      for (let y = 0; y < h; y += px) {
        for (let x = 0; x < w; x += px) {
          const n = Math.sin(x * 0.02 + t) + Math.cos(y * 0.03 - t * 1.3)
          const i = Math.floor(((n + 2) / 4) * palette.length)
          ctx.fillStyle = palette[Math.max(0, Math.min(palette.length - 1, i))]
          ctx.fillRect(x, y + Math.sin((x + t * 20) * 0.02) * 2, px, px)
        }
      }

      // stars
      for (let s = 0; s < 64; s++) {
        const sx = ((s * 73) % w)
        const sy = (Math.sin(t * 0.6 + s) * 0.5 + 0.5) * h * 0.4
        ctx.fillStyle = 'rgba(147,197,253,0.8)'
        ctx.fillRect(Math.floor(sx), Math.floor(sy), 2, 2)
      }

      requestAnimationFrame(draw)
    }

    let raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="relative h-[52vh] sm:h-[60vh] md:h-[70vh] lg:h-[78vh] rounded-3xl overflow-hidden ring-1 ring-white/10">
      <canvas ref={canvasRef} className="w-full h-full block [image-rendering:pixelated]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061a2b] via-transparent to-transparent opacity-80" />
    </div>
  )
}
