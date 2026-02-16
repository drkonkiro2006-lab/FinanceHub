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
      <section className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(a => (
              <Link
                key={a.id}
                to={`/news/${a.id}`}
                className="card-glass card-glass-interactive flex flex-col h-full group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={a.image} 
                    alt={a.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-ink-soft text-sm leading-relaxed mb-4 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-brand font-semibold text-sm">
                    Read Article 
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      {'\u2192'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
