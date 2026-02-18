import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

// Load thumbnails
const thumbnails = import.meta.glob(
    '/public/vlogs/**/thumbnail.{png,jpg,jpeg,webp}',
    { eager: true, query: '?url', import: 'default' }
)

// Load text files
const texts = import.meta.glob(
    '/public/vlogs/**/{title,description}.txt',
    { eager: true, query: '?raw', import: 'default' }
)

// Load optional attachments
const files = import.meta.glob(
    '/public/vlogs/**/*.{pdf,doc,docx,xls,xlsx}',
    { eager: true, query: '?url', import: 'default' }
)

export default function Insights() {
    const vlogs = useMemo(() => {
        const map = {}

        const getFolder = p => p.split('/').slice(-2, -1)[0]

        // Titles & descriptions
        Object.entries(texts).forEach(([path, content]) => {
            const folder = getFolder(path)
            map[folder] ??= {}
            if (path.includes('title.txt')) map[folder].title = content.trim()
            if (path.includes('description.txt')) map[folder].description = content.trim()
        })

        // Thumbnails
        Object.entries(thumbnails).forEach(([path, url]) => {
            const folder = getFolder(path)
            map[folder] ??= {}
            map[folder].thumbnail = url
        })

        // Attachments
        Object.entries(files).forEach(([path, url]) => {
            const folder = getFolder(path)
            map[folder] ??= {}
            map[folder].file = url
        })

        return Object.entries(map).map(([slug, v]) => ({
            id: slug,
            title: v.title || slug.replace(/-/g, ' '),
            excerpt: v.description || '',
            thumbnail: v.thumbnail || `/vlogs/${slug}/thumbnail.png`, // Fallback to expected path if glob missing
            file: v.file || null,
            type: v.file ? 'document' : 'insight'
        }))
    }, [])

    const handleDocumentClick = (vlog) => {
        if (vlog.file) {
            window.open(vlog.file, '_blank')
        }
    }

    if (vlogs.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center text-ink-soft">
                Loading Insights...
            </div>
        )
    }

    return (
        <>
            <section className="w-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-none">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Insights & Updates</h1>
                    <p className="text-white/80 mt-2">Latest news, reports, and strategic analysis.</p>
                </div>
            </section>
            <section className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vlogs.map((vlog) => (
                            <div key={vlog.id} className="card-glass group flex flex-col h-full overflow-hidden border border-slate-200 dark:border-slate-800">
                                {/* Image section with folder-based path */}
                                <div className="h-52 overflow-hidden relative">
                                    <img
                                        src={vlog.thumbnail}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt={vlog.title}
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    {/* min-h ensures titles don't push content down unevenly */}
                                    <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] line-clamp-2 group-hover:text-brand transition-colors">
                                        {vlog.title}
                                    </h3>

                                    <p className="text-ink-soft text-sm mb-6 line-clamp-3">
                                        {vlog.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        {vlog.type === 'document' ? (
                                            <button
                                                onClick={() => handleDocumentClick(vlog)}
                                                className="flex items-center text-brand font-bold text-sm hover:gap-2 transition-all"
                                            >
                                                View Document <span className="ml-1">{'\u2192'}</span>
                                            </button>
                                        ) : (
                                            <Link
                                                to={`/insights/${vlog.id}`}
                                                className="flex items-center text-brand font-bold text-sm hover:gap-2 transition-all"
                                            >
                                                Read Full Insight <span className="ml-1">{'\u2192'}</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
