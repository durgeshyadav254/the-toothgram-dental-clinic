import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Heart, ClipboardCheck } from 'lucide-react'

const cards = [
  {
    icon: Sparkles,
    title: 'Beauty-first eye',
    description:
      'We design for faces, lips, and how you light up in photos. Every smile we create is crafted around your unique features.',
    color: 'bg-rose/10',
    iconColor: 'text-rose',
  },
  {
    icon: Heart,
    title: 'Gentle pacing',
    description:
      'Anxiety-aware visits, cozy rooms, no rush. We go at your speed and make sure you feel completely comfortable every step of the way.',
    color: 'bg-copper/10',
    iconColor: 'text-copper',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear plan, always',
    description:
      "You'll see the vision before we begin. Full digital smile previews, transparent pricing, and honest conversations — always.",
    color: 'bg-mauve/20',
    iconColor: 'text-rose-deep',
  },
]

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-pearl py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-3"
          >
            Why you'll feel at home
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display italic text-4xl md:text-5xl text-ink max-w-xl mx-auto leading-tight"
          >
            Care that feels like it was made for you.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group bg-blush rounded-4xl p-8 border border-border hover:-translate-y-1.5 hover:shadow-rose-md transition-all duration-300"
            >
              <div className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
                <card.icon size={22} className={card.iconColor} />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{card.title}</h3>
              <p className="font-body text-sm text-ink-soft leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
