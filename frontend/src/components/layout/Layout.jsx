import { useEffect, useState } from 'react'
import DesktopNav from './DesktopNav.jsx'
import MobileTopBar from './MobileTopBar.jsx'
import MobileMenu from './MobileMenu.jsx'
import MobileInfoPanel from './MobileInfoPanel.jsx'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import logo from "../../../src/assets/images/mybrand.png";

export default function Layout({ children }) {
  const [stuck, setStuck] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200 flex flex-col">
      <MobileTopBar
        onMenu={() => {
          setInfoOpen(false)
          setMenuOpen(true)
        }}
        onInfo={() => {
          setMenuOpen(false)
          setInfoOpen(true)
        }}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileInfoPanel open={infoOpen} onClose={() => setInfoOpen(false)} />
      <div className="lg:hidden h-[calc(3rem+env(safe-area-inset-top))]" />

      <DesktopNav stuck={stuck} />

      <main className="w-full flex-1">{children}</main>

      {/* Modern Gradient Footer with Same Text */}
      <footer className="mt-10 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 border-t border-gray-200 dark:border-slate-800">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-teal-400">
              Finance & Tax Services
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Trusted professionals for ITR, GST, advisory, and compliance with enterprise-grade standards.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.linkedin.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">Services</div>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="/services/itr-filing" className="hover:text-blue-600 dark:hover:text-teal-400 transition">ITR Filing</a></li>
              <li><a href="/services/gst-registration" className="hover:text-blue-600 dark:hover:text-teal-400 transition">GST Registration</a></li>
              <li><a href="/services/gst-returns" className="hover:text-blue-600 dark:hover:text-teal-400 transition">GST Returns</a></li>
              <li><a href="/services/accounting-compliance" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Accounting & Compliance</a></li>
              <li><a href="/services/tax-planning" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Tax Planning & Advisory</a></li>
              <li><a href="/services/business-consulting" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Business & Financial Consulting</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">Quick Links</div>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="/" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600 dark:hover:text-teal-400 transition">About Us</a></li>
              <li><a href="/gallery" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Gallery</a></li>
              <li><a href="/news" className="hover:text-blue-600 dark:hover:text-teal-400 transition">News / Vlog</a></li>
              <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Contact</a></li>
              <li><a href="/login" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Login</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">Legal & Contact</div>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Kolkata, West Bengal, India</li>
              <li>+91-90000 00000</li>
              <li>support@finfirm.in</li>
              <li>Mon–Sat: 10:00–19:00 IST</li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Terms</a> •{" "}
                <a href="#" className="hover:text-blue-600 dark:hover:text-teal-400 transition">Privacy</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-slate-700">
          © {new Date().getFullYear()} Finance & Tax Services
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
            <div className="w-8 h-8 flex items-center justify-center drop-shadow-[0_0_1.2px_rgba(255,255,255,1)]">
              <img src="/src/assets/images/images-removebg-preview.png" alt="WhatsApp" className="w-full h-full object-contain" />
            </div>
          </a>
        )
      })()}
    </div>
  )
}
