import { NavLink, Link } from 'react-router-dom'
import { ChevronDown, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext.jsx'
import logo from '../../../src/assets/images/mybrand 2.png'

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
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className="h-20 flex items-center justify-between px-8 shadow-md"
      style={{
        background: 'linear-gradient(90deg, rgba(39, 26, 87, 0.85), rgba(221, 183, 100, 0.73))'
      }}
    >
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Brand Logo"
          className="h-16 md:h-20 w-auto object-contain"
        />
      </Link>

      <nav className="flex items-center gap-8">
        <NavLink
          to="/"
          className="text-Black font-medium hover:text-[rgb(29,56,132)] hover:bg-white px-3 py-2 rounded-md transition"
        >
          Home
        </NavLink>

        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="flex items-center gap-1 text-Black font-medium hover:text-[rgb(29,56,132)] hover:bg-white px-3 py-2 rounded-md transition">
            <span>Services</span>
            <ChevronDown size={16} />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-2 w-80 rounded-xl shadow-xl p-3 z-50"
                style={{ backgroundColor: 'rgb(29,56,132)' }}
              >
                <div className="grid grid-cols-1 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="px-4 py-2 rounded-md text-white hover:bg-[rgb(244,244,190)] hover:text-[rgb(29,56,132)] transition"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink
          to="/about"
          className="text-Black font-medium hover:text-[rgb(29,56,132)] hover:bg-white px-3 py-2 rounded-md transition"
        >
          About Us
        </NavLink>

        <NavLink
          to="/gallery"
          className="text-Black font-medium hover:text-[rgb(29,56,132)] hover:bg-white px-3 py-2 rounded-md transition"
        >
          Gallery
        </NavLink>

        <NavLink
          to="/news"
          className="text-Black font-medium hover:text-[rgb(29,56,132)] hover:bg-white px-3 py-2 rounded-md transition"
        >
          News / Vlog
        </NavLink>

        <NavLink
          to="/contact"
          className="text-Black font-medium hover:text-[rgb(29,56,132)] hover:bg-white px-3 py-2 rounded-md transition"
        >
          Contact
        </NavLink>
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition"
          style={{ color: 'rgb(29,56,132)' }}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link
          to="/contact"
          className="px-5 py-2 rounded-lg font-semibold transition shadow-md"
          style={{
            backgroundColor: 'rgb(29,56,132)',
            color: 'white'
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = 'rgb(220,182,101)')
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = 'rgb(29,56,132)')
          }
        >
          Book Consultation
        </Link>
      </div>
    </div>
  )
}
