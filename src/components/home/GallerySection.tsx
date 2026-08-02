import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CLINIC_PHOTO = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDkAW0rD1lrGQR5xmtn0-d6USHRE9jweCJaarOszaD8c7jfYB_uy0XAFNf7WqLWqsdogUMBLrpH05D9TRGwvqHcVc7QJe9uVvc1Brrc_ntXEqEhtayo5edJvoaP35gbEULn1i80UgT8fZX=w1600-h1200-k-no'

const transformations = [
  {
    id: 1,
    label: 'Smile Makeover',
    patient: 'Priya S.',
    treatment: 'Veneers + Whitening',
    gradient: 'from-rose/20 to-blush-mist',
  },
  {
    id: 2,
    label: 'Clear Aligners',
    patient: 'Ananya V.',
    treatment: '18-month Invisalign',
    gradient: 'from-copper/15 to-blush',
  },
  {
    id: 3,
    label: 'Full Makeover',
    patient: 'Rohit M.',
    treatment: 'Implants + Veneers',
    gradient: 'from-mauve/20 to-rose-mist',
  },
  {
    id: 4,
    label: 'Whitening',
    patient: 'Kavya N.',
    treatment: 'Laser Whitening',
    gradient: 'from-rose/15 to-pearl',
  },
]

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-blush-deep py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-3"
            >
              Glow Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display italic text-4xl md:text-5xl text-ink leading-tight"
            >
              Real smiles. Real transformations.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/glow-gallery"
              className="inline-flex items-center gap-2 font-body text-sm text-rose-deep hover:text-rose transition-colors"
            >
              See all glow-ups <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {transformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`group relative bg-gradient-to-br ${item.gradient} rounded-3xl overflow-hidden border border-border cursor-pointer hover:shadow-rose-md transition-all duration-300 hover:-translate-y-1 ${i === 0 || i === 3 ? 'row-span-1' : ''}`}
              style={{ minHeight: i % 2 === 0 ? '260px' : '200px' }}
            >
              {/* Background pattern using clinic photo with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundImage: `url(${CLINIC_PHOTO})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

              {/* Before / After chip */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="font-body text-[10px] tracking-wide bg-blush/90 text-rose-deep px-2.5 py-1 rounded-full">Before</span>
                <span className="font-body text-[10px] tracking-wide bg-rose/90 text-pearl px-2.5 py-1 rounded-full">After</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-pearl/70 mb-0.5">
                  {item.treatment}
                </p>
                <p className="font-display italic text-lg text-pearl">{item.label}</p>
                <p className="font-body text-xs text-pearl/70">— {item.patient}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/glow-gallery"
            className="inline-flex items-center gap-2 bg-pearl border border-border text-ink font-body font-medium text-sm px-8 py-3.5 rounded-full hover:bg-blush hover:border-rose shadow-rose transition-all duration-300"
          >
            See all transformations <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
