import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  { step: '01', label: 'Pick your vibe', sub: 'Natural soft, bright glam, subtle refine, or full glow-up' },
  { step: '02', label: 'Tell us your goals', sub: 'Whiter, straighter, smoother, or all of the above' },
  { step: '03', label: 'Share a photo', sub: 'So we can plan around your unique smile' },
  { step: '04', label: 'Get your plan', sub: 'A personalised smile roadmap, prepared with care' },
]

export default function DreamSmileCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="blush-blob py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-rose/10 border border-rose/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles size={14} className="text-rose" />
            <span className="font-body text-xs text-rose-deep tracking-wide">Free · No commitment</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display italic text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-5"
          >
            Design your dream smile
            <br />
            <span className="text-gradient-rose">in 4 soft steps.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-base text-ink-soft leading-relaxed max-w-lg mx-auto"
          >
            Answer a few questions and we'll build a personalised smile plan — absolutely free. No pressure, just possibilities.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-pearl/80 backdrop-blur-sm rounded-3xl p-5 border border-border text-center"
            >
              <span className="font-display text-4xl text-rose/30 font-medium block mb-2">{s.step}</span>
              <p className="font-body text-sm font-medium text-ink mb-1.5">{s.label}</p>
              <p className="font-body text-xs text-ink-faint leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/dream-smile"
            className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-10 py-4 rounded-full shadow-copper hover:bg-rose-deep hover:shadow-rose-md transition-all duration-300 text-base"
          >
            <Sparkles size={18} />
            Get my dream smile plan
            <ArrowRight size={18} />
          </Link>
          <p className="font-body text-xs text-ink-faint mt-4">
            Takes about 2 minutes · Completely free
          </p>
        </motion.div>
      </div>
    </section>
  )
}
