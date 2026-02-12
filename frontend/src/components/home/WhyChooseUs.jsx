import { motion } from 'framer-motion'
import { BadgeCheck, Tag, Clock, Shield, Headset, FileCheck } from 'lucide-react'

export default function WhyChooseUs() {
  const items = [
    { icon: BadgeCheck, title: 'Certified Professionals' },
    { icon: Tag, title: 'Transparent Pricing' },
    { icon: Clock, title: 'On-Time Filing Guarantee' },
    { icon: Shield, title: 'Secure Data Handling' },
    { icon: Headset, title: 'Dedicated Support' },
    { icon: FileCheck, title: 'Govt-Compliant Process' }
  ]
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-ink">Why Choose Us</h2>
        <p className="text-ink-soft mt-2">Credible, compliant, and client-focused operations designed for accuracy and clarity.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              className="card card-interactive p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="card-icon-wrap">
                <c.icon className="card-icon" size={20} />
              </div>
              <div className="mt-3 font-semibold text-ink">{c.title}</div>
              <div className="text-ink-soft text-sm mt-1">Engineered for credibility and compliance at scale.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
