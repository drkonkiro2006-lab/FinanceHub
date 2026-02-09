import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Search } from 'lucide-react'

export default function InfoStrip() {
  return (
    <div className="border-b bg-white">
      <div className="container h-10 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4 text-ink-soft">
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-ink">
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-ink">
            <Twitter size={16} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-ink">
            <Facebook size={16} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-ink">
            <Instagram size={16} />
          </a>
          <button className="ml-2 text-ink-soft hover:text-ink" aria-label="Search">
            <Search size={16} />
          </button>
        </div>
        <div className="flex items-center gap-6 text-ink-soft">
          <div className="flex items-center gap-1">
            <Phone size={16} /> <span>+91-90000 00000</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} /> <span>support@finfirm.in</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <MapPin size={16} /> <span>Kolkata, India</span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <Clock size={16} /> <span>Mon–Sat • 10:00–19:00 IST</span>
          </div>
        </div>
      </div>
    </div>
  )
}
