import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star } from 'lucide-react'
import { reviews } from '../../data/reviews'

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-pearl py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-xs tracking-[0.2em] uppercase text-copper mb-3"
          >
            Love notes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display italic text-4xl md:text-5xl text-ink"
          >
            What our patients are saying.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mt-5"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#C4956A" className="text-copper" />
              ))}
            </div>
            <span className="font-body text-sm text-ink-soft">
              5.0 average · 153 verified Google reviews
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-blush rounded-4xl p-7 border border-border h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="#C4956A" className="text-copper" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-body text-sm text-ink-soft leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>

                  {/* Treatment chip */}
                  {review.treatment && (
                    <span className="font-body text-[11px] bg-rose/10 text-rose-deep px-3 py-1 rounded-full border border-rose/20 mb-5 inline-block">
                      {review.treatment}
                    </span>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto pt-5 border-t border-border">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-pearl font-body font-medium text-sm shrink-0"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-ink">{review.name}</p>
                      <p className="font-body text-xs text-ink-faint">{review.date}</p>
                    </div>
                    <div className="ml-auto">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-ink-faint" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
