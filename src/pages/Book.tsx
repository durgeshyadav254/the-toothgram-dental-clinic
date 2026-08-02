import { useState } from 'react'
import SEO from '../components/ui/SEO'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, MapPin, Clock, CalendarDays } from 'lucide-react'
import { services } from '../data/services'

export default function Book() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredTime: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-pearl pt-24 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center bg-blush rounded-4xl p-12 border border-border shadow-rose-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-rose" />
          </motion.div>
          <h2 className="font-display italic text-4xl text-ink mb-4">Appointment request received!</h2>
          <p className="font-body text-base text-ink-soft leading-relaxed mb-3">
            Thank you, {form.name}! We've received your booking request.
          </p>
          <p className="font-body text-sm text-ink-soft leading-relaxed mb-8">
            Our team will confirm your appointment within a few hours. If it's urgent, please call us directly.
          </p>
          <a
            href="tel:+918384050365"
            className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300"
          >
            <Phone size={16} /> Call us now
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title="Book an Appointment — The Toothgram Dental Clinic, Noida"
        description="Book your appointment at The Toothgram Dental Clinic, Sector 135, Noida. Free consultations available. Call +91 83840 50365."
      />

      <div className="min-h-screen bg-pearl pt-24">
        {/* Header */}
        <section className="hero-blob py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
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
              className="font-display italic text-5xl md:text-6xl text-ink mb-4"
            >
              Book my consult
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-ink-soft leading-relaxed"
            >
              Fill in your details and we'll be in touch to confirm your perfect time.
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-blush rounded-4xl p-8 border border-border shadow-rose">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs tracking-[0.15em] uppercase text-copper block mb-2">Your name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="First & last name"
                        required
                        className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-[0.15em] uppercase text-copper block mb-2">Phone number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="+91 00000 00000"
                        required
                        className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-copper block mb-2">Email address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-copper block mb-2">I'm interested in</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink focus:outline-none focus:border-rose transition-colors appearance-none"
                    >
                      <option value="">Choose a treatment (optional)</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.slug}>{s.title}</option>
                      ))}
                      <option value="general">General check-up</option>
                      <option value="emergency">Emergency care</option>
                      <option value="consultation">Just a consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-copper block mb-2">Preferred time</label>
                    <div className="flex flex-wrap gap-2">
                      {['Morning (10–12)', 'Afternoon (12–4)', 'Evening (4–7)'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, preferredTime: t }))}
                          className={`font-body text-xs px-4 py-2.5 rounded-full border transition-all ${
                            form.preferredTime === t
                              ? 'bg-rose text-pearl border-rose'
                              : 'bg-pearl border-border text-ink-soft hover:border-rose'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-copper block mb-2">Anything else?</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about any concerns, questions, or how you heard about us..."
                      rows={4}
                      className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-rose text-pearl font-body font-medium py-4 rounded-full shadow-copper hover:bg-rose-deep hover:shadow-rose-md transition-all duration-300"
                  >
                    Book my appointment
                  </button>
                  <p className="font-body text-xs text-ink-faint text-center">
                    We'll confirm within a few hours · Free initial consultation
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-5"
            >
              {/* Quick contact */}
              <div className="bg-rose rounded-3xl p-6 text-pearl">
                <p className="font-body text-xs tracking-[0.15em] uppercase text-pearl/70 mb-3">Prefer to call?</p>
                <p className="font-display text-2xl mb-4">We're here for you.</p>
                <a
                  href="tel:+918384050365"
                  className="flex items-center gap-3 bg-pearl/20 rounded-2xl px-4 py-3 hover:bg-pearl/30 transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-body text-sm font-medium">+91 83840 50365</span>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-blush rounded-3xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-rose" />
                  <p className="font-body text-sm font-medium text-ink">Clinic Hours</p>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { days: 'Mon – Wed', time: '10 AM – 7 PM' },
                    { days: 'Thursday', time: 'Closed' },
                    { days: 'Fri – Sun', time: '10 AM – 7 PM' },
                  ].map((h) => (
                    <div key={h.days} className="flex justify-between">
                      <span className="font-body text-ink-soft">{h.days}</span>
                      <span className={`font-body ${h.time === 'Closed' ? 'text-ink-faint' : 'text-rose-deep font-medium'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-blush rounded-3xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-rose" />
                  <p className="font-body text-sm font-medium text-ink">Find Us</p>
                </div>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">
                  Unit no. 208, Assotech Business Cresterra, Tower-1, Sector 135, Noida, UP 201304
                </p>
                <a
                  href="https://www.google.com/maps/place/The+Toothgram+Dental+Clinic/@28.4955939,77.4018905,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-rose-deep hover:text-rose transition-colors"
                >
                  <CalendarDays size={14} /> View on Google Maps
                </a>
              </div>

              {/* Free consultation note */}
              <div className="bg-rose/10 border border-rose/20 rounded-3xl p-5">
                <p className="font-body text-sm text-rose-deep leading-relaxed">
                  <strong>Free consultation included.</strong> Every new patient gets a complimentary consultation with full digital smile assessment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
