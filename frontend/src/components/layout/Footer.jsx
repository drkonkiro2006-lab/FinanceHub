import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
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
  )
}
