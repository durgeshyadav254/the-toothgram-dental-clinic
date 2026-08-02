export interface Service {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  icon: string
  details: string[]
  price: string
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'veneers',
    title: 'Porcelain Veneers',
    tagline: 'Porcelain petals for your smile',
    description: 'Custom porcelain shaped to look like your smile — just more rested, even, and radiant. Ultra-thin shells crafted to perfection.',
    icon: '✦',
    details: ['Ultra-thin porcelain shells', 'Custom shade matching', 'Minimal tooth prep', '10–15 year longevity'],
    price: 'From ₹8,000/tooth',
  },
  {
    id: '2',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    tagline: 'A lit-from-within glow',
    description: 'Professional-grade whitening that delivers 6–8 shades brighter results in a single session. Safe, fast, and beautifully effective.',
    icon: '◇',
    details: ['In-chair laser whitening', 'Take-home trays available', 'Enamel-safe formula', 'Results in 60 minutes'],
    price: 'From ₹5,000',
  },
  {
    id: '3',
    slug: 'clear-aligners',
    title: 'Clear Aligners',
    tagline: 'Straighten, softly',
    description: 'Straighten on your schedule, without putting your life on display. Nearly invisible, removable, and designed around your lifestyle.',
    icon: '○',
    details: ['3D digital planning', 'Virtually invisible', 'Removable for meals', '12–18 month treatment'],
    price: 'From ₹45,000',
  },
  {
    id: '4',
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    tagline: 'Your full glow-up, orchestrated',
    description: 'A comprehensive transformation combining multiple treatments, digitally planned around your face, lips, and unique smile goals.',
    icon: '✧',
    details: ['Digital smile design', 'Full-face analysis', 'Multi-treatment plan', 'Before preview included'],
    price: 'Custom plan',
  },
  {
    id: '5',
    slug: 'dental-implants',
    title: 'Dental Implants',
    tagline: 'A permanent, natural-looking root',
    description: 'Replace missing teeth with titanium roots and lifelike crowns that look, feel, and function like your natural teeth.',
    icon: '⬡',
    details: ['Titanium implant posts', 'Natural-look crowns', '95%+ success rate', 'Lifetime solution'],
    price: 'From ₹25,000/tooth',
  },
  {
    id: '6',
    slug: 'general-dentistry',
    title: 'General Care',
    tagline: 'Healthy base, always',
    description: 'Preventive care, deep cleaning, fillings, and check-ups delivered with the same warmth and precision as our cosmetic treatments.',
    icon: '♡',
    details: ['Comprehensive check-ups', 'Professional cleaning', 'Composite fillings', 'Gum health care'],
    price: 'From ₹800',
  },
]
