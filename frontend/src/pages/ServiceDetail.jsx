import { useParams, Link } from 'react-router-dom'
import itrImg from '../assets/images/service-itr.jpg'
import gstRegImg from '../assets/images/service-gst-registration.jpg'
import gstRetImg from '../assets/images/service-gst-returns.jpg'
import taxPlanImg from '../assets/images/service-tax-planning.jpg'
import accountingImg from '../assets/images/service-accounting.jpg'
import consultingImg from '../assets/images/service-business-consulting.jpg'

const map = {
  'itr-filing': {
    title: 'Income Tax Return Filing',
    image: itrImg,
    narrative:
      'Accurate filing backed by expert review. We map deductions, validate documents, and file on time.',
    steps: [
      'Profile and document intake',
      'Deduction and income mapping',
      'Draft computation and review',
      'E-filing and e-verification'
    ],
    compliance: ['Income Tax Act', 'CBDT guidelines', 'EVC/OTP verification'],
    faqs: [
      { q: 'What documents are required?', a: 'Form 16, bank statements, investment proofs, etc.' },
      { q: 'Can you help with late filings?', a: 'Yes, with applicable penalties addressed.' }
    ],
    price: '₹1,499'
  },
  'gst-registration': {
    title: 'GST Registration',
    image: gstRegImg,
    narrative:
      'Seamless GSTIN registration with document verification and portal support.',
    steps: ['Document collection', 'GST portal application', 'Verification follow-up', 'ARN and GSTIN issuance'],
    compliance: ['CGST Act', 'GSTN portal procedures'],
    faqs: [
      { q: 'How long does it take?', a: 'Typically 3–7 working days depending on verification.' },
      { q: 'Do you assist with amendments?', a: 'Yes, post-registration updates are supported.' }
    ],
    price: '₹2,999'
  },
  'gst-returns': {
    title: 'GST Returns',
    image: gstRetImg,
    narrative:
      'Monthly or quarterly filing with reconciliations to maintain compliance.',
    steps: ['Sales/Purchase data intake', 'Reconciliation', 'Return preparation', 'Filing on portal'],
    compliance: ['GSTR-1', 'GSTR-3B', 'GST notifications'],
    faqs: [
      { q: 'Do you handle notices?', a: 'Yes, we assist with notices and clarifications.' },
      { q: 'Can you automate data import?', a: 'Yes, via spreadsheet or APIs.' }
    ],
    price: '₹1,999'
  },
  'tax-planning': {
    title: 'Tax Planning & Advisory',
    image: taxPlanImg,
    narrative:
      'Strategic advice tailored to goals, ensuring regulatory compliance and efficiency.',
    steps: ['Financial profiling', 'Strategy formulation', 'Implementation roadmap', 'Periodic review'],
    compliance: ['Income Tax rules', 'SEBI and RBI guidance where applicable'],
    faqs: [
      { q: 'Is this suitable for salaried?', a: 'Yes, across salaried, business, and professionals.' },
      { q: 'Can you advise on investments?', a: 'Yes, with risk and regulation in focus.' }
    ],
    price: '₹4,999'
  },
  'accounting-compliance': {
    title: 'Accounting & Compliance',
    image: accountingImg,
    narrative:
      'End-to-end bookkeeping, reconciliations, and statutory filings.',
    steps: ['Books setup', 'Periodic posting', 'Reconciliation', 'Statutory filings'],
    compliance: ['Companies Act', 'Accounting standards', 'Tax rules'],
    faqs: [
      { q: 'Do you provide MIS?', a: 'Yes, monthly MIS and dashboards.' },
      { q: 'Can you coordinate audits?', a: 'Yes, audit readiness and support.' }
    ],
    price: '₹3,999'
  },
  'business-consulting': {
    title: 'Business & Financial Consulting',
    image: consultingImg,
    narrative:
      'Insightful advisory for growth, profitability, and risk management.',
    steps: ['Discovery', 'Data analysis', 'Modeling', 'Board-ready recommendations'],
    compliance: ['Industry regulations', 'Best-practice frameworks'],
    faqs: [
      { q: 'Do you make financial models?', a: 'Yes, tailored projections and scenarios.' },
      { q: 'Is fundraising advisory included?', a: 'Available on request.' }
    ],
    price: '₹7,999'
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = map[slug]
  if (!s) return <div>Service not found</div>
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src={s.image} alt={s.title} className="w-full rounded-lg shadow-soft object-cover object-center" />
        <div>
          <h1 className="text-3xl font-bold text-ink">{s.title}</h1>
          <p className="text-ink-soft mt-2">{s.narrative}</p>
          <div className="mt-4 font-semibold text-ink">Starting at {s.price}</div>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <Link to="/services" className="btn-outline">Back to Services</Link>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-4">
          <div className="text-lg font-semibold text-ink">How It Works</div>
          <ol className="mt-3 list-decimal pl-5 text-ink-soft">
            {s.steps.map(step => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-lg font-semibold text-ink">Compliance</div>
          <ul className="mt-3 list-disc pl-5 text-ink-soft">
            {s.compliance.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-lg font-semibold text-ink">FAQs</div>
          <ul className="mt-3 space-y-3 text-ink-soft">
            {s.faqs.map(f => (
              <li key={f.q}>
                <div className="font-medium text-ink">{f.q}</div>
                <div>{f.a}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
