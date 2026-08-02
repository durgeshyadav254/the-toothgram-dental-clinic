import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/smile-studio', label: 'Smile Studio' },
  { to: '/the-lounge', label: 'The Lounge' },
  { to: '/glow-gallery', label: 'Gallery' },
  { to: '/dream-smile', label: 'Dream Smile' },
  { to: '/visit', label: 'Visit Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-pearl/95 backdrop-blur-md shadow-rose border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-rose flex items-center justify-center shadow-copper">
                <span className="font-display text-pearl text-lg font-semibold leading-none">T</span>
              </div>
              <div className="leading-none">
                <span className="font-display text-ink text-lg font-medium tracking-wide block">
                  Toothgram
                </span>
                <span className="font-body text-ink-faint text-[10px] tracking-[0.18em] uppercase block">
                  Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Nav — visible from md (768px) upward */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-body text-sm px-3 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-rose-deep bg-blush-mist font-medium'
                        : 'text-ink-soft hover:text-rose-deep hover:bg-blush'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+918384050365"
                className="hidden lg:flex items-center gap-1.5 font-body text-sm text-rose-deep hover:text-rose transition-colors"
              >
                <Phone size={14} />
                <span>+91 83840 50365</span>
              </a>
              <Link
                to="/book"
                className="hidden md:inline-flex items-center bg-rose text-pearl font-body text-sm font-medium px-5 py-2.5 rounded-full shadow-copper hover:bg-rose-deep hover:shadow-rose-md transition-all duration-300"
              >
                Book now
              </Link>
              {/* Hamburger — only on mobile (below md) */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-full text-ink-soft hover:bg-blush transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-pearl/98 backdrop-blur-md border-b border-border shadow-rose-md md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-body text-base px-5 py-3 rounded-2xl transition-colors ${
                      isActive
                        ? 'text-rose-deep bg-blush font-medium'
                        : 'text-ink-soft hover:text-rose-deep hover:bg-blush'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <Link
                  to="/book"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper"
                >
                  Book my consult
                </Link>
                <a
                  href="tel:+918384050365"
                  className="inline-flex items-center justify-center gap-2 font-body text-sm text-rose-deep border border-border rounded-full py-3"
                >
                  <Phone size={14} />
                  +91 83840 50365
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
