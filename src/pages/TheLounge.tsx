import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, ArrowRight, Sparkles, Shield, Heart } from 'lucide-react'
import WaveDivider from '../components/ui/WaveDivider'

const CLINIC_PHOTO = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDkAW0rD1lrGQR5xmtn0-d6USHRE9jweCJaarOszaD8c7jfYB_uy0XAFNf7WqLWqsdogUMBLrpH05D9TRGwvqHcVc7QJe9uVvc1Brrc_ntXEqEhtayo5edJvoaP35gbEULn1i80UgT8fZX=w1600-h1200-k-no'

const experiences = [
  {
    icon: Sparkles,
    title: 'Beauty-clinic feel',
    description: 'Warm lighting, soft interiors, and a calm atmosphere designed to feel more spa than surgery.',
  },
  {
    icon: Shield,
    title: 'Clinical excellence',
    description: 'State-of-the-art equipment, strict sterilisation protocols, and evidence-based treatments.',
  },
  {
    icon: Heart,
    title: 'Personal attention',
    description: 'Every patient gets unhurried time, clear explanations, and care that feels genuinely personal.',
  },
]

const hours = [
  { day: 'Monday', time: '10:00 AM – 7:00 PM' },
  { day: 'Tuesday', time: '10:00 AM – 7:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 7:00 PM' },
  { day: 'Thursday', time: 'Closed' },
  { day: 'Friday', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 7:00 PM' },
]

export default function TheLounge() {
  return (
    <>
      <Helmet>
        <title>The Lounge — About Our Clinic | The Toothgram Dental Clinic, Noida</title>
        <meta
          name="description"
          content="Step inside The Toothgram — a beautifully designed dental lounge in Sector 135, Noida. Learn about our space, our philosophy, and what makes us different."
        />
      </Helmet>

      <div className="min-h-screen bg-pearl pt-24">
        {/* Hero */}
        <section className="hero-blob py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-4">The Lounge</p>
                <h1 className="font-display italic text-5xl md:text-6xl text-ink leading-tight mb-6">
                  Where dentistry feels like self-care.
                </h1>
                <p className="font-body text-lg text-ink-soft leading-relaxed mb-8">
                  The Toothgram was designed from the ground up to feel nothing like a typical dental clinic. From the moment you walk in, you're in a calm, beautiful space where your comfort comes first.
                </p>
                <div className="flex gap-3">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300"
                  >
                    Book a visit <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose/15 to-transparent rounded-4xl -rotate-1 scale-105" aria-hidden="true" />
                <img
                  src={CLINIC_PHOTO}
                  alt="The Toothgram Dental Clinic interior"
                  className="relative w-full h-80 lg:h-96 object-cover rounded-4xl border border-border shadow-rose-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <WaveDivider topColor="#F8EDE8" bottomColor="#FFF9F6" />

        {/* Experience cards */}
        <section className="bg-pearl py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display italic text-4xl text-ink">The Toothgram experience</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-blush rounded-4xl p-8 border border-border"
                >
                  <div className="w-12 h-12 bg-rose/10 rounded-2xl flex items-center justify-center mb-5">
                    <exp.icon size={22} className="text-rose" />
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-3">{exp.title}</h3>
                  <p className="font-body text-sm text-ink-soft leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider topColor="#FFF9F6" bottomColor="#F8EDE8" />

        {/* Location + Hours */}
        <section className="bg-blush py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Location */}
              <div>
                <h2 className="font-display text-3xl text-ink mb-8">Find us</h2>
                <div className="space-y-5 mb-8">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-rose shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-medium text-ink mb-1">Address</p>
                      <p className="font-body text-sm text-ink-soft leading-relaxed">
                        Unit no. 208, Assotech Business Cresterra,<br />
                        Tower-1, above ABC Medicos,<br />
                        Sector 135, Noida, UP 201304
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Phone size={18} className="text-rose shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-medium text-ink mb-1">Phone</p>
                      <a href="tel:+918384050365" className="font-body text-sm text-rose-deep hover:text-rose transition-colors">
                        +91 83840 50365
                      </a>
                    </div>
                  </div>
                </div>
                {/* Map embed placeholder */}
                <a
                  href="https://www.google.com/maps/place/The+Toothgram+Dental+Clinic/@28.4955939,77.4018905,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-pearl rounded-3xl overflow-hidden border border-border hover:shadow-rose-md transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-blush-deep to-rose-mist relative flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className="text-rose mx-auto mb-2" />
                      <p className="font-body text-sm font-medium text-ink">Open in Google Maps</p>
                      <p className="font-body text-xs text-ink-faint">Sector 135, Noida</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <Clock size={18} className="text-rose" />
                  <h2 className="font-display text-3xl text-ink">Hours</h2>
                </div>
                <div className="bg-pearl rounded-3xl border border-border overflow-hidden">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i < hours.length - 1 ? 'border-b border-border' : ''
                      } ${h.time === 'Closed' ? 'opacity-50' : ''}`}
                    >
                      <span className="font-body text-sm font-medium text-ink">{h.day}</span>
                      <span className={`font-body text-sm ${h.time === 'Closed' ? 'text-ink-faint' : 'text-rose-deep'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-rose/10 border border-rose/20 rounded-2xl p-5">
                  <p className="font-body text-sm text-rose-deep">
                    <strong>Booking tip:</strong> Walk-ins welcome but appointments are recommended to ensure availability and minimal wait time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
