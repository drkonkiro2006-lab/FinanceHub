import { useParams, Link } from 'react-router-dom'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'

const content = {
  'itr-update': {
    title: 'ITR Deadlines: Key Updates',
    body:
      'CBDT has issued timelines for ITR filing with structured guidance. Ensure documents and deductions are prepared ahead. Electronic verification is recommended for speed.'
  },
  'gst-reconciliation': {
    title: 'GST Reconciliation Best Practices',
    body:
      'Match purchase and sales ledgers periodically. Use portal data to reconcile variances. Address notices with evidence-backed responses and maintain audit trails.'
  },
  'tax-saving': {
    title: 'Top Tax-Saving Strategies',
    body:
      'Leverage eligible sections and instruments while balancing liquidity and risk. Maintain documentation and plan across the year for optimal outcomes.'
  }
}

export default function NewsDetail() {
  const { id } = useParams()
  const a = content[id]
  if (!a) return <div>Article not found</div>
  return (
    <article className="prose max-w-3xl">
      <img
        src={id === 'itr-update' ? blog1 : id === 'gst-reconciliation' ? blog2 : blog3}
        alt={a.title}
        className="w-full rounded-lg shadow-soft object-cover object-center"
      />
      <h1 className="mt-6 text-3xl font-bold text-ink">{a.title}</h1>
      <p className="mt-3 text-ink-soft">{a.body}</p>
      <div className="mt-6">
        <Link to="/news" className="text-brand">Back to News</Link>
      </div>
    </article>
  )
}
