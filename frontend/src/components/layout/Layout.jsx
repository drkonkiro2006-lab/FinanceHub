import { useEffect, useState } from 'react'
import InfoStrip from './InfoStrip.jsx'
import MainNav from './MainNav.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export default function Layout({ children }) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 transition-colors duration-200">
        <InfoStrip />
        <AnimatePresence initial={false}>
          <motion.div
            key={stuck ? 'stuck' : 'free'}
            className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-gray-100 dark:border-slate-800 transition-colors duration-200"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <MainNav />
          </motion.div>
        </AnimatePresence>
      </div>
      <main className="w-full">{children}</main>
      <footer className="mt-10 bg-slate-900 text-white">
        <div className="container py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-xl font-semibold">Finance & Tax Services</div>
            <p className="text-white/70 mt-2">
              Trusted professionals for ITR, GST, advisory, and compliance with enterprise-grade standards.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white/70 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-white/70 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-white/70 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white/70 hover:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="/services/itr-filing" className="hover:text-white">ITR Filing</a></li>
              <li><a href="/services/gst-registration" className="hover:text-white">GST Registration</a></li>
              <li><a href="/services/gst-returns" className="hover:text-white">GST Returns</a></li>
              <li><a href="/services/accounting-compliance" className="hover:text-white">Accounting & Compliance</a></li>
              <li><a href="/services/tax-planning" className="hover:text-white">Tax Planning & Advisory</a></li>
              <li><a href="/services/business-consulting" className="hover:text-white">Business & Financial Consulting</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/news" className="hover:text-white">News / Vlog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/login" className="hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal & Contact</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>Kolkata, West Bengal, India</li>
              <li>+91-90000 00000</li>
              <li>support@finfirm.in</li>
              <li>Mon–Sat: 10:00–19:00 IST</li>
              <li><a href="#" className="hover:text-white">Terms</a> • <a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-6 text-sm text-white/70">
            © {new Date().getFullYear()} Finance & Tax Services
          </div>
        </div>
      </footer>
      {(() => {
        const whatsappNumber = '919000000000'
        const message = encodeURIComponent('Hello, I want to know about services and pricing in detail.')
        const href = `https://wa.me/${whatsappNumber}?text=${message}`
        return (
          <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed z-50 md:bottom-6 md:right-6 bottom-5 right-5 w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <div className="w-8 h-8 flex items-center justify-center drop-shadow-[0_0_1.2px_rgba(255,255,255,1)] filter">
            <img src="/src/assets/images/images-removebg-preview.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        </a>
        )
      })()}
    </div>
  )
}
