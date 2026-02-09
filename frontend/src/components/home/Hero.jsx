import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import hero from '../../assets/images/hero.jpg'
import { ShieldCheck, BadgeCheck, Lock, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-900 to-slate-900 rounded-none">
      <div className="relative">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Precision Finance & Tax for Individuals and Businesses
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Compliant filings, proactive advisory, and streamlined accounting delivered by certified experts.
            </p>
            <div className="mt-6 flex gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white text-blue-900 px-5 py-2.5 font-medium shadow-soft hover:shadow-elevate transition">
                  Book Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-white/50 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">
                  Explore Services
                </Link>
              </motion.div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: 'Govt-Compliant' },
                { icon: Lock, label: 'Secure Data' },
                { icon: Award, label: 'Certified Experts' },
                { icon: BadgeCheck, label: 'Trusted by 5,000+' }
              ].map((t, i) => (
                <motion.div
                  key={t.label}
                  className="rounded-xl bg-white/15 backdrop-blur border border-white/20 text-white p-4 flex items-center gap-3 shadow-soft"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <t.icon size={20} />
                  <div className="text-sm">{t.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.img
            src={hero}
            alt="Professional finance consulting"
            className="w-full rounded-xl shadow-elevate object-cover object-center"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  )
}
