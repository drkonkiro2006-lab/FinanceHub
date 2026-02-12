import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react'

const data = [
  {
    name: 'Rohan Gupta',
    business: 'D2C Retail',
    service: 'GST Returns',
    text: 'Their reconciliation process reduced notices significantly. Filing has been timely and accurate every month.',
    rating: 5,
    initials: 'RG',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Ananya Sen',
    business: 'Tech Services',
    service: 'ITR & Advisory',
    text: 'Clear, proactive tax planning. They explained deductions and crafted a plan that saved us time and money.',
    rating: 5,
    initials: 'AS',
    gradient: 'from-amber-400 to-orange-600'
  },
  {
    name: 'Vikram Mehta',
    business: 'Manufacturing',
    service: 'Compliance & Accounting',
    text: 'Books and filings are now streamlined. The team is responsive and keeps us compliant without stress.',
    rating: 5,
    initials: 'VM',
    gradient: 'from-emerald-400 to-teal-600'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) return
    const id = setInterval(() => setIndex(i => (i + 1) % data.length), 6000)
    return () => clearInterval(id)
  }, [pause])

  const prev = () => setIndex(i => (i - 1 + data.length) % data.length)
  const next = () => setIndex(i => (i + 1) % data.length)

  return (
    <section className="relative w-full py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-500/10 dark:bg-amber-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-600 dark:text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-amber-200 dark:to-amber-500">Industry Leaders</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">
            Join 5,000+ businesses who have streamlined their financial compliance with our expert-led tax solutions.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-x-20 -translate-y-1/2 p-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-blue-600 dark:hover:bg-amber-500 hover:text-white dark:hover:text-black transition-all shadow-xl z-20 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 translate-x-20 -translate-y-1/2 p-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-blue-600 dark:hover:bg-amber-500 hover:text-white dark:hover:text-black transition-all shadow-xl z-20 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 bg-white dark:bg-white/[0.03] backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border border-white dark:border-white/10 shadow-2xl shadow-blue-500/5 overflow-hidden"
              >
                {/* Visual Glass Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${data[index].gradient} opacity-10 blur-3xl`} />
                
                <Quote size={100} className="absolute -top-4 -right-4 text-slate-900/5 dark:text-white/5 pointer-events-none" strokeWidth={1} />

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex gap-1 mb-8">
                    {[...Array(data[index].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 leading-snug italic mb-10">
                    "{data[index].text}"
                  </p>

                  <div className="flex flex-col md:flex-row items-center gap-6 pt-10 border-t border-slate-100 dark:border-white/10 w-full">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${data[index].gradient} flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-white dark:ring-slate-900`}>
                      {data[index].initials}
                    </div>
                    <div>
                      <div className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {data[index].name}
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-amber-500 font-bold text-sm uppercase tracking-widest mt-1">
                        <span>{data[index].business}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span>{data[index].service}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-12 flex justify-center items-center gap-3">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === index 
                  ? 'w-12 h-2.5 bg-blue-600 dark:bg-amber-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-800 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button onClick={prev} className="p-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}