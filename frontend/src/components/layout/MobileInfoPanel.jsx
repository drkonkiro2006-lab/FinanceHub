import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Twitter } from 'lucide-react'

const social = [
  { href: 'https://www.linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
  { href: 'https://facebook.com', label: 'Facebook', Icon: Facebook },
  { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram }
]

export default function MobileInfoPanel({ open, onClose }) {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute inset-y-0 right-0 w-full bg-white dark:bg-slate-900 p-6 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close info panel"
          className="mb-6 text-lg text-slate-900 dark:text-slate-100"
        >
          ✕
        </button>

        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-4">
            {social.map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label} className="hover:text-slate-900 dark:hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} /> <span>+91-90000 00000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> <span>support@finfirm.in</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> <span>Kolkata, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> <span>Mon-Sat 10:00-19:00 IST</span>
          </div>
        </div>
      </div>
    </div>
  )
}
