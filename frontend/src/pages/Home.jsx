import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.jsx'
import Stats from '../components/home/Stats.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import Pricing from '../components/home/Pricing.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import Faqs from '../components/home/Faqs.jsx'
import Blogs from '../components/home/Blogs.jsx'
import FinalCta from '../components/home/FinalCta.jsx'
import Partners from '../components/home/Partners.jsx'

const serviceList = [
  {
    slug: 'itr-filing',
    title: 'Income Tax Return Filing',
    desc: 'Accurate, compliant ITR filing with expert guidance.',
    price: '₹1,499'
  },
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    desc: 'Fast, error-free GST registration with documentation.',
    price: '₹2,999'
  },
  {
    slug: 'gst-returns',
    title: 'GST Returns',
    desc: 'Monthly/quarterly GST returns filing and reconciliation.',
    price: '₹1,999'
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Advisory',
    desc: 'Optimize taxes with proactive advisory and strategy.',
    price: '₹4,999'
  }
]

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Stats />

      

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink">Popular Services</h2>
            <Link to="/services" className="text-brand">View all</Link>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceList.map(s => (
              <motion.div
                key={s.slug}
                className="rounded-lg border bg-white shadow-soft hover:shadow-elevate transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-4">
                  <div className="text-lg font-semibold text-ink">{s.title}</div>
                  <p className="text-ink-soft mt-2">{s.desc}</p>
                  <div className="mt-3 text-ink font-semibold">{s.price}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={`/services/${s.slug}`} className="text-brand">Learn More →</Link>
                    <Link to="/contact" className="btn-outline">Get Started</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <HowItWorks />

      <Pricing />

      <Testimonials />

      <Faqs />

      <Blogs />

      <FinalCta />

      <Partners />
    </div>
  )
}
