import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News / Vlog' },
  { to: '/contact', label: 'Contact' }
]

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute inset-y-0 left-0 w-full bg-white dark:bg-slate-900 p-6 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="mb-6 text-lg text-slate-900 dark:text-slate-100"
        >
          ✕
        </button>

        <nav className="space-y-4 text-lg font-medium text-slate-900 dark:text-slate-100">
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} onClick={onClose} className="block">
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={onClose}
            className="mt-6 block w-full bg-blue-600 text-white py-3 rounded-xl text-center font-semibold"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </div>
  )
}
