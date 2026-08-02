export interface Review {
  id: number
  name: string
  initials: string
  rating: number
  date: string
  text: string
  treatment?: string
  avatarColor: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    initials: 'PS',
    rating: 5,
    date: 'June 2026',
    text: 'The Toothgram experience is unlike any dental visit I\'ve had. The clinic is absolutely stunning — calm, beautiful, and immaculate. Dr. treated me like a valued guest, not just a patient. My veneers look so natural and my confidence has genuinely transformed.',
    treatment: 'Porcelain Veneers',
    avatarColor: '#C9898F',
  },
  {
    id: 2,
    name: 'Rohit Mehta',
    initials: 'RM',
    rating: 5,
    date: 'May 2026',
    text: 'I was terrified of dentists but the team here changed everything. They were so patient, explained every step, and made sure I was comfortable throughout. The results speak for themselves — my teeth look incredible. Highly recommend to anyone in Noida.',
    treatment: 'Smile Makeover',
    avatarColor: '#C4956A',
  },
  {
    id: 3,
    name: 'Ananya Verma',
    initials: 'AV',
    rating: 5,
    date: 'May 2026',
    text: 'Got teeth whitening done ahead of my wedding and the results were phenomenal! The doctor was incredibly knowledgeable and the whole process was painless. My smile literally glowed in all my wedding photos. Worth every rupee.',
    treatment: 'Teeth Whitening',
    avatarColor: '#B9A4B0',
  },
  {
    id: 4,
    name: 'Kavya Nair',
    initials: 'KN',
    rating: 5,
    date: 'April 2026',
    text: 'I\'ve been doing my Invisalign treatment here and the progress tracking and digital planning is so impressive. The staff is warm, the reminders are thoughtful, and the space feels like a luxury spa. This is what dental care should feel like everywhere.',
    treatment: 'Clear Aligners',
    avatarColor: '#A66B72',
  },
  {
    id: 5,
    name: 'Sneha Joshi',
    initials: 'SJ',
    rating: 5,
    date: 'March 2026',
    text: 'Brought my daughter here after struggling to find a gentle dentist in Noida. The team was incredibly kind and patient with her. She actually looks forward to her check-ups now! The attention to detail and hygiene standards are exceptional.',
    treatment: 'General Care',
    avatarColor: '#C9898F',
  },
  {
    id: 6,
    name: 'Aditya Kapoor',
    initials: 'AK',
    rating: 5,
    date: 'February 2026',
    text: 'Getting dental implants was a big decision and I\'m so glad I chose The Toothgram. The consultation was thorough, the procedure was seamless, and recovery was smooth. Six months in and the implants feel completely natural. Outstanding clinic.',
    treatment: 'Dental Implants',
    avatarColor: '#7A454C',
  },
]
