import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const data = [
  {
    name: 'Rohan Gupta',
    business: 'D2C Retail',
    service: 'GST Returns',
    text:
      'Their reconciliation process reduced notices significantly. Filing has been timely and accurate every month.',
    rating: 5
  },
  {
    name: 'Ananya Sen',
    business: 'Tech Services',
    service: 'ITR & Advisory',
    text:
      'Clear, proactive tax planning. They explained deductions and crafted a plan that saved us time and money.',
    rating: 5
  },
  {
    name: 'Vikram Mehta',
    business: 'Manufacturing',
    service: 'Compliance & Accounting',
    text:
      'Books and filings are now streamlined. The team is responsive and keeps us compliant without stress.',
    rating: 5
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) return
    const id = setInterval(() => setIndex(i => (i + 1) % data.length), 5000)
    return () => clearInterval(id)
  }, [pause])

  const prev = () => setIndex(i => (i - 1 + data.length) % data.length)
  const next = () => setIndex(i => (i + 1) % data.length)
  const go = i => setIndex(i)

  return (
    <section className="w-full py-16 theme-page">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink">Client Stories</h2>
          <p className="text-ink-soft mt-3 max-w-2xl mx-auto">
            Trusted by businesses across industries for compliance, advisory, and growth.
          </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          onTouchStart={() => setPause(true)}
          onTouchEnd={() => setPause(false)}
        >
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2 p-3 rounded-full card card-interactive text-ink-soft hover:text-ink hover:scale-110 hidden md:flex items-center justify-center z-10 group focus-ring"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2 p-3 rounded-full card card-interactive text-ink-soft hover:text-ink hover:scale-110 hidden md:flex items-center justify-center z-10 group focus-ring"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="relative z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="card p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-6 right-8 opacity-10">
                  <Quote size={80} fill="currentColor" className="text-ink" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(data[index].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-ink-soft font-medium leading-relaxed relative z-10">
                  "{data[index].text}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-14 w-14 card-avatar flex items-center justify-center font-bold text-lg shrink-0">
                    {data[index].name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-ink text-base">{data[index].name}</div>
                    <div className="text-sm text-ink-soft font-medium">
                      {data[index].business} <span className="mx-1">{"\u2022"}</span> {data[index].service}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex gap-3">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`transition-all duration-300 rounded-full focus-ring ${
                    i === index ? 'w-8 h-2 bg-brand' : 'w-2 h-2 dot-inactive'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex md:hidden gap-4">
              <button
                onClick={prev}
                className="p-2 rounded-full card card-interactive text-ink-soft active:scale-95 focus-ring"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full card card-interactive text-ink-soft active:scale-95 focus-ring"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
