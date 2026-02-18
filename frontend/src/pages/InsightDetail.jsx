import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ArticleLayout from '../components/layout/ArticleLayout'

export default function InsightDetail() {
    const { id } = useParams()
    const [content, setContent] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function loadData() {
            try {
                const [titleRes, descRes] = await Promise.all([
                    fetch(`/vlogs/${id}/title.txt`),
                    fetch(`/vlogs/${id}/description.txt`)
                ])

                if (!titleRes.ok || !descRes.ok) throw new Error("Failed to load")

                const title = await titleRes.text()
                const descText = await descRes.text()

                setContent({
                    title,
                    paragraphs: descText.split('\n').filter(p => p.trim() !== ''),
                    image: `/vlogs/${id}/thumbnail.png`,
                    date: 'Recently Updated',
                    author: 'FinanceHub Team',
                    readTime: '3 min read'
                })
            } catch (err) {
                setError(true)
            }
        }
        loadData()
    }, [id])

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-ink-soft">
                Insight not found
            </div>
        )
    }

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center text-ink-soft">
                Loading...
            </div>
        )
    }

    return (
        <ArticleLayout
            title={content.title}
            coverImage={content.image}
            author={content.author}
            date={content.date}
            readTime={content.readTime}
        >
            {content.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg leading-relaxed text-ink-soft">
                    {paragraph}
                </p>
            ))}
        </ArticleLayout>
    )
}
