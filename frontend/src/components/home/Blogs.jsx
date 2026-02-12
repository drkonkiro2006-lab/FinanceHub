import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import blog1 from '../../assets/images/blog1.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'

const blogs = [
  { id: 'itr-update', title: 'ITR Deadlines: Key Updates', image: blog1, tag: 'ITR', time: '5 min' },
  { id: 'gst-reconciliation', title: 'GST Reconciliation Best Practices', image: blog2, tag: 'GST', time: '7 min' },
  { id: 'tax-saving', title: 'Top Tax-Saving Strategies', image: blog3, tag: 'Startup', time: '6 min' }
]

export default function Blogs() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-ink">Latest Insights</h2>
        <p className="text-ink-soft mt-2">Finance updates and guidance from our team.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {blogs.map(b => (
            <motion.div key={b.id} className="card card-interactive overflow-hidden">
              <div className="relative h-40">
                <motion.img
                  src={b.image}
                  alt={b.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 card-chip">
                  {b.tag} {'\u2022'} {b.time}
                </span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-ink">{b.title}</div>
                <Link to={`/news/${b.id}`} className="text-brand text-sm mt-2 inline-block">Read {'\u2192'}</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
