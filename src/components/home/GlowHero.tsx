import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

const CLINIC_PHOTO = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDkAW0rD1lrGQR5xmtn0-d6USHRE9jweCJaarOszaD8c7jfYB_uy0XAFNf7WqLWqsdogUMBLrpH05D9TRGwvqHcVc7QJe9uVvc1Brrc_ntXEqEhtayo5edJvoaP35gbEULn1i80UgT8fZX=w1600-h1200-k-no'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function GlowHero() {
  return (
    <section className="relative min-h-screen hero-blob overflow-hidden flex items-center pt-20">
      {/* Floating blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-rose/15 blur-3xl animate-float-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-48 w-[400px] h-[400px] rounded-full bg-copper/10 blur-3xl animate-float-slower pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/3 w-[300px] h-[300px] rounded-full bg-rose/10 blur-2xl animate-float-slow pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Love badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-pearl border border-border rounded-full px-4 py-2 mb-8 shadow-rose"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="#C4956A" className="text-copper" />
                ))}
              </div>
              <span className="font-body text-xs text-ink-soft">Loved by</span>
              <span className="font-body text-xs font-semibold text-rose-deep">153+ patients</span>
              <span className="font-body text-xs text-ink-soft">in Noida</span>
            </motion.div>

            {/* Label */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-4"
            >
              Cosmetic dental lounge · Sector 135, Noida
            </motion.p>

            {/* Headline */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] mb-6"
            >
              Your soft
              <br />
              <em className="text-gradient-rose not-italic">place to</em>
              <br />
              shine.
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-body text-base md:text-lg text-ink-soft leading-relaxed mb-10 max-w-md"
            >
              Veneers, clear aligners, whitening, and full smile design — in a calm, beauty-first lounge made for your comfort.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium text-sm px-8 py-4 rounded-full shadow-copper hover:bg-rose-deep hover:shadow-rose-md transition-all duration-300"
              >
                Book my consult
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/dream-smile"
                className="inline-flex items-center gap-2 bg-pearl border border-border text-ink font-body font-medium text-sm px-8 py-4 rounded-full hover:bg-blush-deep hover:border-rose transition-all duration-300"
              >
                Get my dream smile plan
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border"
            >
              {[
                { value: '5.0 ★', label: 'Google Rating' },
                { value: '153+', label: 'Happy Patients' },
                { value: '8+', label: 'Years of Care' },
                { value: '100%', label: 'Pain-free Promise' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-medium text-rose-deep">{stat.value}</p>
                  <p className="font-body text-xs text-ink-faint tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main photo frame */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-transparent to-copper/15 rounded-4xl z-10 pointer-events-none" />
              <img
                src={CLINIC_PHOTO}
                alt="The Toothgram Dental Clinic interior"
                className="w-full h-[420px] lg:h-[580px] object-cover rounded-4xl shadow-rose-lg"
                loading="eager"
              />

              {/* Floating card: rating */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-6 -right-4 lg:-right-8 bg-pearl rounded-3xl p-4 shadow-rose-md border border-border"
              >
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="#C4956A" className="text-copper" />
                  ))}
                </div>
                <p className="font-display text-2xl font-medium text-rose-deep leading-none">5.0</p>
                <p className="font-body text-xs text-ink-faint mt-0.5">Google Rating</p>
              </motion.div>

              {/* Floating card: location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 left-6 bg-rose rounded-2xl px-5 py-3.5 shadow-copper"
              >
                <p className="font-body text-xs text-pearl/80 mb-0.5">Sector 135, Noida</p>
                <p className="font-body text-sm font-medium text-pearl">Open Today · 10 AM – 7 PM</p>
              </motion.div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border-2 border-border/60 pointer-events-none" aria-hidden="true" />
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full border border-rose/20 pointer-events-none" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
