import { Link } from 'react-router-dom'
import itrImg from '../assets/images/service-itr.jpg'
import gstRegImg from '../assets/images/service-gst-registration.jpg'
import gstRetImg from '../assets/images/service-gst-returns.jpg'
import taxPlanImg from '../assets/images/service-tax-planning.jpg'
import accountingImg from '../assets/images/service-accounting.jpg'
import consultingImg from '../assets/images/service-business-consulting.jpg'

const services = [
  {
    slug: 'itr-filing',
    title: 'Income Tax Return Filing',
    image: itrImg,
    desc: 'Accurate filing with deduction optimization and e-verification.',
    features: ['Form selection', 'Document review', 'Deduction mapping', 'E-verification'],
    price: '₹1,499'
  },
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    image: gstRegImg,
    desc: 'Complete registration with validation and ARN tracking.',
    features: ['GSTIN application', 'Document verification', 'GST portal support', 'ARN tracking'],
    price: '₹2,999'
  },
  {
    slug: 'gst-returns',
    title: 'GST Returns',
    image: gstRetImg,
    desc: 'Monthly/quarterly filing with reconciliation and compliance.',
    features: ['GSTR-1/3B filing', 'Reconciliation', 'Late fee tracking', 'Compliance updates'],
    price: '₹1,999'
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Advisory',
    image: taxPlanImg,
    desc: 'Proactive planning to minimize liabilities within regulations.',
    features: ['Personalized strategy', 'Investment advisory', 'Regulatory guidance', 'Periodic review'],
    price: '₹4,999'
  },
  {
    slug: 'accounting-compliance',
    title: 'Accounting & Compliance',
    image: accountingImg,
    desc: 'Books, reconciliations, and filings for compliant operations.',
    features: ['Bookkeeping', 'Bank reconciliation', 'Year-end closure', 'Regulatory filings'],
    price: '₹3,999'
  },
  {
    slug: 'business-consulting',
    title: 'Business & Financial Consulting',
    image: consultingImg,
    desc: 'Strategic insight for growth, profitability, and risk.',
    features: ['Business diagnosis', 'Financial models', 'Risk mitigation', 'Board presentations'],
    price: '₹7,999'
  }
]

export default function Services() {
  return (
    <div className="transition-colors duration-200">
      <h1 className="text-3xl font-bold text-ink dark:text-white">Services</h1>
      <p className="text-ink-soft dark:text-slate-300 mt-2">
        Comprehensive offerings tailored for compliance, efficiency, and growth.
      </p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.slug} className="rounded-lg border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft hover:shadow-elevate transition">
            <img src={s.image} alt={s.title} className="w-full h-40 object-cover object-center rounded-t-lg" />
            <div className="p-4">
              <div className="text-lg font-semibold text-ink dark:text-white">{s.title}</div>
              <p className="text-ink-soft dark:text-slate-300 mt-1">{s.desc}</p>
              <ul className="mt-3 text-sm text-ink-soft dark:text-slate-300 list-disc pl-5">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className="mt-3 font-semibold text-ink dark:text-white">{s.price}</div>
              <div className="mt-4 flex items-center justify-between">
                <Link to={`/services/${s.slug}`} className="text-brand">Learn More →</Link>
                <Link to="/contact" className="btn-outline">Request Service</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
