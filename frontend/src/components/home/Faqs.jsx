import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Faqs() {
  const items = [
    { q: 'Is my data secure?', a: 'Yes. We use secure intake, encrypted storage, and compliant processes.' },
    { q: 'What documents are required?', a: 'Depends on service. Typically Form 16, invoices, ledgers, and proofs.' },
    { q: 'How long does filing take?', a: 'Standard filings complete within 2–5 business days after document review.' },
    { q: 'Do you provide post-filing support?', a: 'Yes. We handle clarifications, notices, and follow-up guidance.' }
  ]
  const [open, setOpen] = useState(null)
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-ink">FAQs</h2>
        <p className="text-ink-soft mt-2">Short, clear answers for quick decisions.</p>
        <div className="mt-4 card divide-y divide-[var(--color-card-border)]">
          {items.map((it, idx) => {
            const isOpen = open === idx
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 focus-ring"
                >
                  <span className="font-medium text-ink">{it.q}</span>
                  <ChevronDown className={`text-ink-soft transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <div className="px-4 pb-4 text-ink-soft">{it.a}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
