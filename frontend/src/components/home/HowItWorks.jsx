import { motion } from 'framer-motion'
import { FileCheck, Upload, UserCheck, ClipboardCheck, ShieldCheck } from 'lucide-react'
import gallery1 from '../../assets/images/gallery1.jpg'
import blog1 from '../../assets/images/blog1.jpg'
import aboutTeam from '../../assets/images/about-team.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'

export default function HowItWorks() {
  const steps = [
    { icon: FileCheck, image: gallery1, title: 'Choose Service', text: 'ITR, GST, Compliance, Advisory' },
    { icon: Upload, image: blog1, title: 'Upload Documents', text: 'Encrypted & secure intake' },
    { icon: UserCheck, image: aboutTeam, title: 'Expert Review', text: 'Certified professionals validate' },
    { icon: ClipboardCheck, image: blog2, title: 'Filing & Submission', text: 'Filed on portals with checks' },
    { icon: ShieldCheck, image: blog3, title: 'Confirmation & Support', text: 'Success receipt and guidance' }
  ]
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-ink">How It Works</h2>
        <p className="text-ink-soft mt-2">A connected, visual process tailored for smooth, compliant outcomes.</p>
        <div className="mt-6 relative">
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: 'left' }}
          />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="rounded-xl border bg-white/70 backdrop-blur shadow-soft p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-brand-light flex items-center justify-center">
                  <s.icon className="text-brand" size={22} />
                </div>
                <img src={s.image} alt={s.title} className="mt-3 h-24 w-full object-cover object-center rounded-md" />
                <div className="mt-3 font-semibold text-ink">{s.title}</div>
                <div className="text-ink-soft text-sm">{s.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
