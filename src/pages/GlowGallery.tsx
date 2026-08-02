import SEO from '../components/ui/SEO'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import WaveDivider from '../components/ui/WaveDivider'

const CLINIC_PHOTO = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDkAW0rD1lrGQR5xmtn0-d6USHRE9jweCJaarOszaD8c7jfYB_uy0XAFNf7WqLWqsdogUMBLrpH05D9TRGwvqHcVc7QJe9uVvc1Brrc_ntXEqEhtayo5edJvoaP35gbEULn1i80UgT8fZX=w1600-h1200-k-no'

const cases = [
  { id: 1, name: 'Priya S.', treatment: 'Porcelain Veneers', result: '8 upper veneers', duration: '2 weeks', gradient: 'from-rose/25 to-blush-mist' },
  { id: 2, name: 'Ananya V.', treatment: 'Clear Aligners', result: '18-month treatment', duration: '18 months', gradient: 'from-copper/20 to-blush' },
  { id: 3, name: 'Rohit M.', treatment: 'Full Smile Makeover', result: 'Implants + veneers + whitening', duration: '3 months', gradient: 'from-mauve/25 to-rose-mist' },
  { id: 4, name: 'Kavya N.', treatment: 'Laser Whitening', result: '8 shades brighter', duration: '1 session', gradient: 'from-rose/20 to-pearl' },
  { id: 5, name: 'Sneha J.', treatment: 'Smile Makeover', result: 'Veneers + contouring', duration: '3 weeks', gradient: 'from-copper/15 to-blush-deep' },
  { id: 6, name: 'Aditya K.', treatment: 'Dental Implants', result: '3 implants placed', duration: '4 months', gradient: 'from-rose/15 to-blush' },
  { id: 7, name: 'Meera R.', treatment: 'Gum Contouring', result: 'Even gum line', duration: '1 day', gradient: 'from-mauve/20 to-pearl' },
  { id: 8, name: 'Vikram S.', treatment: 'Clear Aligners', result: 'Fully aligned smile', duration: '12 months', gradient: 'from-rose/20 to-blush-mist' },
]

export default function GlowGallery() {
  return (
    <>
      <SEO
        title="Glow Gallery — Smile Transformations | The Toothgram Noida"
        description="See real smile transformations from our patients. Before and after results for veneers, whitening, aligners, implants, and smile makeovers in Noida."
      />

      <div className="min-h-screen bg-pearl pt-24">
        {/* Header */}
        <section className="hero-blob py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-4"
            >
              The Toothgram
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display italic text-5xl md:text-6xl text-ink mb-5"
            >
              Glow Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-ink-soft leading-relaxed"
            >
              Real patients. Real transformations. Every smile tells a story of care, precision, and joy.
            </motion.p>
          </div>
        </section>

        <WaveDivider topColor="#F8EDE8" bottomColor="#FFF9F6" />

        {/* Clinic Photo Feature */}
        <section className="bg-pearl py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-4xl overflow-hidden border border-border shadow-rose-md"
            >
              <img
                src={CLINIC_PHOTO}
                alt="The Toothgram Dental Clinic"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-rich/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-pearl/70 mb-1">Our Clinic</p>
                <p className="font-display italic text-2xl md:text-3xl text-pearl">The Toothgram, Sector 135 Noida</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cases grid */}
        <section className="bg-pearl py-12 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display italic text-3xl text-ink text-center mb-10">Patient Transformations</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cases.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.1 }}
                  className={`group relative bg-gradient-to-br ${c.gradient} rounded-3xl overflow-hidden border border-border cursor-pointer hover:shadow-rose-md transition-all duration-300 hover:-translate-y-1.5`}
                  style={{ minHeight: i % 3 === 0 ? '280px' : '230px' }}
                >
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity"
                    style={{ backgroundImage: `url(${CLINIC_PHOTO})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

                  {/* Chips */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="font-body text-[10px] bg-blush/90 text-rose-deep px-2.5 py-1 rounded-full w-fit">
                      Before
                    </span>
                    <span className="font-body text-[10px] bg-rose/90 text-pearl px-2.5 py-1 rounded-full w-fit">
                      After
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-4 right-4">
                    <span className="font-body text-[10px] bg-pearl/80 text-ink-soft px-2.5 py-1 rounded-full">
                      {c.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-body text-[10px] tracking-[0.15em] uppercase text-pearl/60 mb-0.5">
                      {c.result}
                    </p>
                    <p className="font-display italic text-lg text-pearl leading-tight">{c.treatment}</p>
                    <p className="font-body text-xs text-pearl/70">— {c.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blush py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display italic text-4xl text-ink mb-4">Ready for your glow-up?</h2>
            <p className="font-body text-base text-ink-soft mb-8">
              Book a free consultation and let's design your dream smile together.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300"
              >
                Book my consult <ArrowRight size={16} />
              </Link>
              <Link
                to="/dream-smile"
                className="inline-flex items-center gap-2 bg-pearl border border-border text-ink font-body font-medium px-8 py-3.5 rounded-full hover:bg-blush-deep transition-all duration-300"
              >
                Get my smile plan
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
