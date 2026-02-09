import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section aria-label="Key statistics" className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          <motion.div
            className="rounded-lg border bg-white/70 backdrop-blur p-5 text-center shadow-soft"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-3xl font-bold text-ink">10,000+</div>
            <div className="mt-1 text-ink-soft">Returns Filed</div>
          </motion.div>
          <motion.div
            className="rounded-lg border bg-white/70 backdrop-blur p-5 text-center shadow-soft"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="text-3xl font-bold text-ink">₹500Cr+</div>
            <div className="mt-1 text-ink-soft">Transactions Managed</div>
          </motion.div>
          <motion.div
            className="rounded-lg border bg-white/70 backdrop-blur p-5 text-center shadow-soft"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-ink">99.8%</div>
            <div className="mt-1 text-ink-soft">Filing Accuracy</div>
          </motion.div>
          <motion.div
            className="rounded-lg border bg-white/70 backdrop-blur p-5 text-center shadow-soft"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="text-3xl font-bold text-ink">7+ Years</div>
            <div className="mt-1 text-ink-soft">Experience</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
