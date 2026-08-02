import SEO from '../components/ui/SEO'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { services } from '../data/services'
import WaveDivider from '../components/ui/WaveDivider'

function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pearl pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl text-ink mb-4">Treatment not found</h1>
          <Link to="/smile-studio" className="text-rose-deep hover:text-rose font-body text-sm">
            ← Back to Smile Studio
          </Link>
        </div>
      </div>
    )
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <SEO title={`${service.title} — The Toothgram Dental Clinic`} description={service.description} />

      <div className="min-h-screen bg-pearl pt-24">
        {/* Hero */}
        <section className="hero-blob py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Link
              to="/smile-studio"
              className="inline-flex items-center gap-1.5 font-body text-sm text-ink-soft hover:text-rose-deep transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Smile Studio
            </Link>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="block font-body text-xs tracking-[0.2em] uppercase text-copper mb-4"
            >
              The Toothgram · Smile Studio
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl mb-5"
            >
              {service.icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display italic text-5xl md:text-6xl text-ink mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-base italic text-copper mb-6"
            >
              {service.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {service.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300"
              >
                Book my consult <ArrowRight size={16} />
              </Link>
              <Link
                to="/dream-smile"
                className="inline-flex items-center gap-2 bg-pearl border border-border text-ink font-body font-medium px-8 py-3.5 rounded-full hover:bg-blush transition-all duration-300"
              >
                Get my smile plan
              </Link>
            </motion.div>
          </div>
        </section>

        <WaveDivider topColor="#F8EDE8" bottomColor="#FFF9F6" />

        {/* Details */}
        <section className="bg-pearl py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl text-ink mb-6">What's included</h2>
                <div className="space-y-3">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose shrink-0" />
                      <span className="font-body text-base text-ink-soft">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blush rounded-4xl p-8 border border-border">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-3">Investment</p>
                <p className="font-display text-4xl text-rose-deep mb-3">{service.price}</p>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-6">
                  Exact pricing is determined during your consultation based on your individual needs and treatment scope.
                </p>
                <Link
                  to="/book"
                  className="block text-center bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300"
                >
                  Book a free consult
                </Link>
                <a
                  href="tel:+918384050365"
                  className="mt-3 flex items-center justify-center gap-2 font-body text-sm text-rose-deep hover:text-rose transition-colors"
                >
                  <Phone size={14} />
                  Or call +91 83840 50365
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other treatments */}
        <section className="bg-blush py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-3xl text-ink mb-10 text-center">Other treatments you might love</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/smile-studio/${s.slug}`}
                  className="bg-pearl rounded-3xl p-6 border border-border hover:shadow-rose-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl block mb-3">{s.icon}</span>
                  <h3 className="font-display text-xl text-ink mb-1">{s.title}</h3>
                  <p className="font-body text-xs text-copper italic mb-2">{s.tagline}</p>
                  <span className="font-body text-sm text-rose-deep flex items-center gap-1">
                    Explore <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function SmileStudioIndex() {
  return (
    <>
      <SEO
        title="Smile Studio — Cosmetic Dental Treatments | The Toothgram Noida"
        description="Explore our full range of cosmetic and general dental treatments — veneers, whitening, clear aligners, implants, smile makeovers and more in Sector 135, Noida."
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
              Smile Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-ink-soft leading-relaxed"
            >
              Every treatment we offer is chosen with one goal: to help you feel completely at home in your smile.
            </motion.p>
          </div>
        </section>

        <WaveDivider topColor="#F8EDE8" bottomColor="#FFF9F6" />

        {/* Services grid */}
        <section className="bg-pearl py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/smile-studio/${service.slug}`}
                    className="group block bg-blush rounded-4xl p-7 border border-border shadow-rose hover:-translate-y-1.5 hover:shadow-rose-md transition-all duration-300 h-full"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-3xl">{service.icon}</span>
                      <span className="font-body text-[10px] tracking-[0.15em] uppercase text-copper bg-copper/10 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl text-ink mb-2">{service.title}</h2>
                    <p className="font-body text-xs text-copper italic mb-3">{service.tagline}</p>
                    <p className="font-body text-sm text-ink-soft leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.details.slice(0, 2).map((d) => (
                        <span key={d} className="font-body text-[11px] bg-pearl text-ink-soft px-2.5 py-1 rounded-full border border-border">
                          {d}
                        </span>
                      ))}
                    </div>
                    <span className="font-body text-sm text-rose-deep flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default function SmileStudio() {
  const { slug } = useParams<{ slug?: string }>()
  return slug ? <ServiceDetail /> : <SmileStudioIndex />
}
