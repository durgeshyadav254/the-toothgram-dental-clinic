import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, Users } from 'lucide-react'

const credentials = [
  { icon: GraduationCap, label: 'BDS, MDS Prosthodontics', sub: 'Top-ranked dental college' },
  { icon: Award, label: '8+ Years Experience', sub: 'Cosmetic & restorative focus' },
  { icon: Users, label: '2,000+ Smiles', sub: 'Transformed with care' },
]

export default function DentistSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-pearl py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blush to-blush-mist rounded-4xl -rotate-2 scale-[1.02]" aria-hidden="true" />
              {/* Placeholder image with gradient + typography for when no doctor photo is available */}
              <div className="relative bg-gradient-to-br from-blush-deep via-blush to-rose-mist rounded-4xl h-[480px] flex flex-col items-center justify-center overflow-hidden border border-border">
                {/* Decorative blobs inside card */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-rose/15 rounded-full blur-2xl" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-copper/10 rounded-full blur-2xl" aria-hidden="true" />

                <div className="relative z-10 text-center px-8">
                  <div className="w-24 h-24 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-border">
                    <span className="font-display italic text-5xl text-rose-deep">Dr</span>
                  </div>
                  <h3 className="font-display italic text-3xl text-ink mb-2">Your Dentist</h3>
                  <p className="font-body text-sm text-ink-soft mb-5">Lead Cosmetic Dentist<br />The Toothgram Dental Clinic</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Veneers', 'Implants', 'Aligners', 'Smile Design'].map(tag => (
                      <span key={tag} className="font-body text-[11px] bg-rose/10 text-rose-deep px-3 py-1 rounded-full border border-rose/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-rose text-pearl rounded-3xl p-5 max-w-[220px] shadow-copper"
            >
              <p className="font-display italic text-sm leading-relaxed">
                "Nervous? Tell us. We'll go gently."
              </p>
              <p className="font-body text-[11px] text-pearl/70 mt-2">— Our promise to every patient</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-4">
              Your dentist
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl text-ink leading-tight mb-6">
              Expertise you can see. Warmth you can feel.
            </h2>
            <p className="font-body text-base text-ink-soft leading-relaxed mb-5">
              At The Toothgram, you're cared for by a highly qualified cosmetic dentist with a genuine passion for crafting beautiful, natural smiles. Every consultation starts with listening — your goals, your concerns, your timeline.
            </p>
            <p className="font-body text-base text-ink-soft leading-relaxed mb-10">
              From a single whitening session to a full smile makeover, our doctor combines the precision of a specialist with the warmth of someone who genuinely cares about how you feel.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-10">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blush rounded-2xl flex items-center justify-center shrink-0">
                    <cred.icon size={18} className="text-rose" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-ink">{cred.label}</p>
                    <p className="font-body text-xs text-ink-faint">{cred.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/the-lounge"
              className="inline-flex items-center gap-2 bg-blush border border-border text-ink font-body font-medium text-sm px-8 py-3.5 rounded-full hover:bg-blush-deep hover:border-rose transition-all duration-300"
            >
              Meet your dentist
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
