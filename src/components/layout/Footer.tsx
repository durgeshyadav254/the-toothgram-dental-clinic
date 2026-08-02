import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Instagram, Facebook, Star } from 'lucide-react'

const quickLinks = [
  { to: '/smile-studio', label: 'Smile Studio' },
  { to: '/smile-studio/veneers', label: 'Porcelain Veneers' },
  { to: '/smile-studio/teeth-whitening', label: 'Teeth Whitening' },
  { to: '/smile-studio/clear-aligners', label: 'Clear Aligners' },
  { to: '/smile-studio/smile-makeover', label: 'Smile Makeover' },
  { to: '/smile-studio/dental-implants', label: 'Dental Implants' },
]

const visitLinks = [
  { to: '/the-lounge', label: 'The Lounge' },
  { to: '/glow-gallery', label: 'Glow Gallery' },
  { to: '/dream-smile', label: 'Dream Smile Quiz' },
  { to: '/visit', label: 'Visit Us' },
  { to: '/book', label: 'Book Appointment' },
]

export default function Footer() {
  return (
    <footer className="bg-rose-rich text-blush-deep">
      {/* Top CTA Band */}
      <div className="bg-rose px-4 py-10 text-center">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-pearl/70 mb-2">
          Ready for your transformation?
        </p>
        <h3 className="font-display italic text-3xl md:text-4xl text-pearl mb-6">
          Your dream smile is closer than you think.
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/book"
            className="inline-flex items-center bg-pearl text-rose-rich font-body font-medium text-sm px-8 py-3.5 rounded-full hover:bg-blush transition-colors"
          >
            Book my consult
          </Link>
          <Link
            to="/dream-smile"
            className="inline-flex items-center border border-pearl/40 text-pearl font-body font-medium text-sm px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Get my dream smile plan
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-rose flex items-center justify-center">
                <span className="font-display text-pearl text-lg font-semibold">T</span>
              </div>
              <div className="leading-none">
                <span className="font-display text-pearl text-lg font-medium tracking-wide block">
                  Toothgram
                </span>
                <span className="font-body text-blush-deep/60 text-[10px] tracking-[0.18em] uppercase block">
                  Dental Clinic
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-blush-deep/70 leading-relaxed mb-6">
              Soft care. Serious skill. Beautiful smiles.
            </p>
            <div className="flex items-center gap-1.5 bg-rose-deep/30 rounded-full px-4 py-2.5 w-fit">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="#C4956A" className="text-copper" />
              ))}
              <span className="font-body text-xs text-blush-deep ml-1.5">5.0 · 153+ reviews</span>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-copper mb-5">
              Treatments
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-blush-deep/70 hover:text-blush transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-copper mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {visitLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-blush-deep/70 hover:text-blush transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-copper mb-5">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-rose shrink-0 mt-0.5" />
                <p className="font-body text-sm text-blush-deep/70 leading-relaxed">
                  Unit no. 208, Assotech Business Cresterra, Tower-1, Sector 135, Noida, UP 201304
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-rose shrink-0" />
                <a
                  href="tel:+918384050365"
                  className="font-body text-sm text-blush-deep/70 hover:text-blush transition-colors"
                >
                  +91 83840 50365
                </a>
              </div>
              <div className="flex gap-3">
                <Clock size={16} className="text-rose shrink-0 mt-0.5" />
                <div className="font-body text-sm text-blush-deep/70 leading-relaxed">
                  <p>Mon–Wed, Fri–Sun: 10 AM – 7 PM</p>
                  <p>Thursday: Closed</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-blush-deep/20 flex items-center justify-center text-blush-deep/60 hover:text-blush hover:border-rose transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-blush-deep/20 flex items-center justify-center text-blush-deep/60 hover:text-blush hover:border-rose transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.google.com/maps/place/The+Toothgram+Dental+Clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-blush-deep/20 flex items-center justify-center text-blush-deep/60 hover:text-blush hover:border-rose transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-blush-deep/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-blush-deep/40">
            © {new Date().getFullYear()} The Toothgram Dental Clinic · Sector 135, Noida
          </p>
          <p className="font-body text-xs text-blush-deep/40">
            Crafted with care for beautiful smiles
          </p>
        </div>
      </div>
    </footer>
  )
}
