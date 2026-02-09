import { NavLink, Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { slug: 'itr-filing', name: 'ITR Filing' },
  { slug: 'gst-registration', name: 'GST Registration' },
  { slug: 'gst-returns', name: 'GST Returns' },
  { slug: 'tax-planning', name: 'Tax Planning & Advisory' },
  { slug: 'accounting-compliance', name: 'Accounting & Compliance' },
  { slug: 'business-consulting', name: 'Business & Financial Consulting' }
]

export default function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded bg-brand" />
        <div className="text-xl font-semibold text-ink">FinFirm</div>
      </Link>
      <nav className="flex items-center gap-6">
        <NavLink to="/" className="text-ink-soft hover:text-ink">Home</NavLink>
        <div className="relative">
          <button
            className="flex items-center gap-1 text-ink-soft hover:text-ink"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span>Services</span>
            <ChevronDown size={16} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-full mt-2 w-80 rounded-lg border bg-white shadow-soft p-2 z-50"
              >
                <div className="grid grid-cols-1">
                  {services.map(s => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="px-3 py-2 rounded hover:bg-gray-50 text-ink-soft hover:text-ink"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavLink to="/about" className="text-ink-soft hover:text-ink">About Us</NavLink>
        <NavLink to="/gallery" className="text-ink-soft hover:text-ink">Gallery</NavLink>
        <NavLink to="/news" className="text-ink-soft hover:text-ink">News / Vlog</NavLink>
        <NavLink to="/contact" className="text-ink-soft hover:text-ink">Contact</NavLink>
      </nav>
      <div className="flex items-center gap-3">
        <Link to="/contact" className="btn-outline">Book Consultation</Link>
      </div>
    </div>
  )
}
