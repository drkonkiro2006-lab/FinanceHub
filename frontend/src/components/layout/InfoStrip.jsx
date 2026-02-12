import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Search } from 'lucide-react'

export default function InfoStrip() {
  return (
    <div className="info-strip hidden lg:block">
      <div className="info-strip-container">
        <div className="info-strip-content text-sm">
          <div className="social-icons">
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

          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} /> <span>+91-90000 00000</span>
            </div>
            <div className="contact-item">
              <Mail size={16} /> <span>support@finfirm.in</span>
            </div>
            <div className="contact-item contact-item-md">
              <MapPin size={16} /> <span>Kolkata, India</span>
            </div>
            <div className="contact-item contact-item-lg">
              <Clock size={16} /> <span>Mon-Sat 10:00-19:00 IST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

