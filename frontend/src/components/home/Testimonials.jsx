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
    <section className="w-full py-16 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Client Stories</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
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
          {/* Desktop Navigation Arrows - Absolute */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2 p-3 rounded-full bg-white shadow-md border border-slate-100 text-slate-600 hover:text-blue-600 hover:scale-110 transition-all hidden md:flex items-center justify-center z-10 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2 p-3 rounded-full bg-white shadow-md border border-slate-100 text-slate-600 hover:text-blue-600 hover:scale-110 transition-all hidden md:flex items-center justify-center z-10 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <div className="relative z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-8 opacity-5">
                  <Quote size={80} fill="currentColor" className="text-slate-900" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(data[index].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed relative z-10">
                  "{data[index].text}"
                </p>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg border border-blue-100 shadow-sm shrink-0">
                    {data[index].name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base">{data[index].name}</div>
                    <div className="text-sm text-slate-500 font-medium">
                      {data[index].business} <span className="text-slate-300 mx-1">•</span> {data[index].service}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation & Dots */}
          <div className="mt-8 flex flex-col items-center gap-6">
            
            {/* Dots Indicator */}
            <div className="flex gap-3">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === index ? 'w-8 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile Arrow Controls */}
            <div className="flex md:hidden gap-4">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-white shadow border border-slate-200 text-slate-600 active:scale-95 transition"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-white shadow border border-slate-200 text-slate-600 active:scale-95 transition"
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
