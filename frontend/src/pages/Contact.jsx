import { useState } from 'react'
import { motion } from 'framer-motion'
import { postContact } from '../services/api.js'
import kolkata from '../assets/images/kolkata.jpg'
import logoEmailPng from '../assets/images/download-removebg-preview.png'
import logoLinkedinPng from '../assets/images/linkedin-logo.png'
import logoGooglemapsPng from '../assets/images/Google_Maps_icon_(2020).svg.png'
import logoWhatsappPng from '../assets/images/images-removebg-preview.png'

const init = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(init)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const onChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name || form.name.length < 2) errs.name = 'Enter a valid name'
    if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!/^\+?\d{10,14}$/.test(form.phone)) errs.phone = 'Enter a valid phone'
    if (!form.subject || form.subject.length < 3) errs.subject = 'Enter a valid subject'
    if (!form.message || form.message.length < 10) errs.message = 'Message is too short'
    return errs
  }

  const submit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setResult({ ok: false, message: 'Fix errors and try again' })
      return
    }
    setLoading(true)
    setResult(null)
    try {
      const { data } = await postContact(form)
      setResult({ ok: true, message: data.message || 'Submitted' })
      setForm(init)
    } catch (err) {
      setResult({ ok: false, message: 'Submission failed' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-ink dark:text-white transition-colors duration-200">Contact</h1>
              <p className="text-ink-soft dark:text-slate-300 mt-2 transition-colors duration-200">
                Kolkata, West Bengal, India • +91-90000 00000 • support@finfirm.in
              </p>
              <div className="mt-6 rounded-lg overflow-hidden border">
                <img
                  src={kolkata}
                  alt="Kolkata business district"
                  className="w-full h-48 object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {/* Email */}
                <a 
                  href="mailto:support@finfirm.in" 
                  className="flex flex-col items-center gap-2 group" 
                  aria-label="Email"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img src={logoEmailPng} alt="Email" className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Email</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/finfirm" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex flex-col items-center gap-2 group" 
                  aria-label="LinkedIn"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img src={logoLinkedinPng} alt="LinkedIn" className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">LinkedIn</span>
                </a>

                {/* Visit Office */}
                <a 
                  href="https://maps.google.com/?q=Kolkata,India" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex flex-col items-center gap-2 group" 
                  aria-label="Visit Office"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img src={logoGooglemapsPng} alt="Visit Office" className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Visit Office</span>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/919000000000" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex flex-col items-center gap-2 group" 
                  aria-label="WhatsApp"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img src={logoWhatsappPng} alt="WhatsApp" className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">WhatsApp</span>
                </a>
              </div>
            </div>
            <motion.form
              onSubmit={submit}
              className="rounded-lg border bg-white dark:bg-slate-800 dark:border-slate-700 p-6 shadow-soft transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-ink-soft">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-1 w-full rounded border px-3 py-2"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-soft">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 w-full rounded border px-3 py-2"
                    placeholder="name@email.com"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-soft">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-1 w-full rounded border px-3 py-2"
                    placeholder="+91XXXXXXXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-soft">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className="mt-1 w-full rounded border px-3 py-2"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-ink-soft">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="mt-1 w-full rounded border px-3 py-2 h-32"
                    placeholder="Share details"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-6" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
              {result && (
                <div className={`mt-3 ${result.ok ? 'text-success' : 'text-danger'}`}>{result.message}</div>
              )}
            </motion.form>
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-100 dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Kolkata,India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
