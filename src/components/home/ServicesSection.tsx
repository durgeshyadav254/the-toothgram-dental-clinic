import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-blush py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-3"
            >
              Smile Studio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display italic text-4xl md:text-5xl text-ink leading-tight max-w-md"
            >
              Treatments crafted around you.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/smile-studio"
              className="inline-flex items-center gap-2 font-body text-sm text-rose-deep hover:text-rose transition-colors"
            >
              View all treatments <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <Link
                to={`/smile-studio/${service.slug}`}
                className="group block bg-pearl rounded-4xl p-7 border border-border shadow-rose hover:-translate-y-1.5 hover:shadow-rose-md transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl text-rose group-hover:scale-110 transition-transform duration-300 inline-block">
                    {service.icon}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.15em] uppercase text-copper bg-copper/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-2">{service.title}</h3>
                <p className="font-body text-xs text-copper italic mb-3">{service.tagline}</p>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-rose-deep group-hover:gap-3 transition-all duration-300">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
