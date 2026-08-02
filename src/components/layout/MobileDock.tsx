import { Link, useLocation } from 'react-router-dom'
import { Phone, CalendarDays, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MobileDock() {
  const { pathname } = useLocation()

  if (pathname === '/book') return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
    >
      <div className="bg-pearl/95 backdrop-blur-md border border-border rounded-2xl shadow-rose-lg overflow-hidden">
        <div className="flex items-center divide-x divide-border">
          <Link
            to="/book"
            className="flex-1 flex flex-col items-center gap-1 py-3.5 text-rose-deep hover:bg-blush transition-colors"
          >
            <CalendarDays size={18} />
            <span className="font-body text-[10px] tracking-wide font-medium">Book</span>
          </Link>
          <a
            href="tel:+918384050365"
            className="flex-1 flex flex-col items-center gap-1 py-3.5 text-ink-soft hover:bg-blush transition-colors"
          >
            <Phone size={18} />
            <span className="font-body text-[10px] tracking-wide font-medium">Call</span>
          </a>
          <Link
            to="/dream-smile"
            className="flex-1 flex flex-col items-center gap-1 py-3.5 bg-rose text-pearl hover:bg-rose-deep transition-colors"
          >
            <Sparkles size={18} />
            <span className="font-body text-[10px] tracking-wide font-medium">Dream Smile</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
