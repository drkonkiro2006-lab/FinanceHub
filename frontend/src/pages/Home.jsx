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

import itrBg from '../assets/images/services/itr.png'
import gstRegBg from '../assets/images/services/gst-registration.png'
import gstReturnBg from '../assets/images/services/gst-returns.png'
import taxPlanningBg from '../assets/images/services/tax-planning.png'

const serviceList = [
  {
      slug: 'Tax-Calculation',
      title: 'Income Tax Calculator',
      bg: itrBg,
      desc: 'Calculate your tax with free of cost',
      price: '₹0'
    },
  {
    slug: 'itr-filing',
    title: 'Income Tax Return Filing',
    desc: 'Accurate, compliant ITR filing with expert guidance.',
    price: '₹1,499',
    bg: itrBg
  },
  // {
  //   slug: 'gst-registration',
  //   title: 'GST Registration',
  //   desc: 'Fast, error-free GST registration with documentation.',
  //   price: '₹2,999',
  //   bg: gstRegBg
  // },
  {
    slug: 'gst-returns',
    title: 'GST Returns',
    desc: 'Monthly/quarterly GST returns filing and reconciliation.',
    price: '₹1,999',
    bg: gstReturnBg
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Advisory',
    desc: 'Optimize taxes with proactive advisory and strategy.',
    price: '₹4,999',
    bg: taxPlanningBg
  }
]

export default function Home() {
  return (
    <div className="space-y-20 bg-background theme-transition-surface">
      <Hero />
      <Stats />

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink">
              Popular Services
            </h2>
            <Link to="/services" className="text-brand font-medium">
              View all
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceList.map((s) => (
              <motion.div
                key={s.slug}
                className="relative rounded-xl overflow-hidden shadow-soft hover:shadow-elevate transition group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.bg})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />

                {/* Content */}
                <div className="relative p-6 h-72 flex flex-col justify-end text-white">
                  <div className="text-lg font-semibold">
                    {s.title}
                  </div>
                  <p className="text-white/80 mt-2 text-sm">
                    {s.desc}
                  </p>
                  <div className="mt-3 font-semibold text-[rgb(220,182,101)]">
                    {s.price}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-[rgb(220,182,101)] font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                    <Link
                      to="/contact"
                      className="px-3 py-1.5 rounded-md text-sm font-medium bg-[rgb(29,56,132)] hover:bg-[rgb(220,182,101)] transition"
                    >
                      Get Started
                    </Link>
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
