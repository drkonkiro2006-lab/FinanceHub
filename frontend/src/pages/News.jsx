import { Link } from 'react-router-dom'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'

const articles = [
  {
    id: 'itr-update',
    title: 'ITR Deadlines: Key Updates',
    excerpt: 'CBDT issues latest timelines and guidance for FY 2025–26.',
    image: blog1
  },
  {
    id: 'gst-reconciliation',
    title: 'GST Reconciliation Best Practices',
    excerpt: 'Improve accuracy and reduce notices with systematic reconciliation.',
    image: blog2
  },
  {
    id: 'tax-saving',
    title: 'Top Tax-Saving Strategies',
    excerpt: 'Leverage sections and planning for optimized outcomes.',
    image: blog3
  }
]

export default function News() {
  return (
    <>
      <section className="w-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-none">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white">News & Vlog</h1>
          <p className="text-white/80 mt-2">Insights and updates on finance and taxation.</p>
        </div>
      </section>
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map(a => (
              <Link
                key={a.id}
                to={`/news/${a.id}`}
                className="rounded-xl border bg-white shadow-soft hover:shadow-elevate transition"
              >
                <img src={a.image} alt={a.title} className="w-full h-40 object-cover rounded-t-xl" />
                <div className="p-4">
                  <div className="text-lg font-semibold text-ink">{a.title}</div>
                  <p className="text-ink-soft mt-1">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
