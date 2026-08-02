import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ArrowRight, Car, Train } from 'lucide-react'

const hours = [
  { day: 'Monday', time: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Tuesday', time: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Wednesday', time: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Thursday', time: 'Closed', closed: true },
  { day: 'Friday', time: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Saturday', time: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Sunday', time: '10:00 AM – 7:00 PM', closed: false },
]

export default function Visit() {
  return (
    <>
      <Helmet>
        <title>Visit Us — The Toothgram Dental Clinic, Sector 135, Noida</title>
        <meta name="description" content="Find The Toothgram Dental Clinic in Sector 135, Noida. Get directions, hours, phone number, and parking information." />
      </Helmet>

      <div className="min-h-screen bg-pearl pt-24">
        {/* Header */}
        <section className="hero-blob py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display italic text-5xl md:text-6xl text-ink mb-4"
            >
              Visit Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-lg text-ink-soft"
            >
              We're easy to find and always happy to see you.
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {/* Address card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-blush rounded-4xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-rose/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={18} className="text-rose" />
                  </div>
                  <h2 className="font-display text-2xl text-ink">Address</h2>
                </div>
                <p className="font-body text-base text-ink-soft leading-relaxed mb-5">
                  Unit no. 208, Assotech Business Cresterra,<br />
                  Tower-1, above ABC Medicos,<br />
                  Sector 135, Noida,<br />
                  Uttar Pradesh – 201304
                </p>
                <a
                  href="https://www.google.com/maps/place/The+Toothgram+Dental+Clinic/@28.4955939,77.4018905,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium text-sm px-6 py-3 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300"
                >
                  Get directions <ArrowRight size={15} />
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-blush rounded-3xl p-7 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose/10 rounded-2xl flex items-center justify-center">
                    <Phone size={18} className="text-rose" />
                  </div>
                  <h2 className="font-display text-2xl text-ink">Phone</h2>
                </div>
                <a href="tel:+918384050365" className="font-body text-xl text-rose-deep hover:text-rose transition-colors">
                  +91 83840 50365
                </a>
              </motion.div>

              {/* How to get here */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-blush rounded-3xl p-7 border border-border"
              >
                <h3 className="font-display text-2xl text-ink mb-5">Getting here</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-copper/10 rounded-xl flex items-center justify-center shrink-0">
                      <Car size={16} className="text-copper" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-ink">By Car</p>
                      <p className="font-body text-sm text-ink-soft">Assotech Business Cresterra has ample parking. Enter via Sector 135 road. The clinic is on the 2nd floor of Tower 1.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-rose/10 rounded-xl flex items-center justify-center shrink-0">
                      <Train size={16} className="text-rose" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-ink">By Metro</p>
                      <p className="font-body text-sm text-ink-soft">Take Aqua Line to Sector 137 station. Auto or cab to Assotech Business Cresterra (~5 min).</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Hours + CTA */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-blush rounded-4xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-rose/10 rounded-2xl flex items-center justify-center">
                    <Clock size={18} className="text-rose" />
                  </div>
                  <h2 className="font-display text-2xl text-ink">Clinic Hours</h2>
                </div>
                <div className="bg-pearl rounded-3xl border border-border overflow-hidden">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i < hours.length - 1 ? 'border-b border-border' : ''
                      } ${h.closed ? 'opacity-50' : ''}`}
                    >
                      <span className="font-body text-sm font-medium text-ink">{h.day}</span>
                      <span className={`font-body text-sm ${h.closed ? 'text-ink-faint' : 'text-rose-deep'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-rose rounded-3xl p-8 text-pearl"
              >
                <h3 className="font-display italic text-3xl mb-3">Ready to visit?</h3>
                <p className="font-body text-sm text-pearl/80 mb-6 leading-relaxed">
                  Book your appointment online or call us directly. Walk-ins are always welcome during clinic hours.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 bg-pearl text-rose-rich font-body font-medium text-sm px-8 py-3.5 rounded-full hover:bg-blush transition-colors"
                  >
                    Book an appointment <ArrowRight size={15} />
                  </Link>
                  <a
                    href="tel:+918384050365"
                    className="inline-flex items-center justify-center gap-2 border border-pearl/30 text-pearl font-body font-medium text-sm px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Phone size={15} /> Call +91 83840 50365
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
