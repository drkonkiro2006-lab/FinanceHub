import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import gallery3 from '../assets/images/gallery3.jpg'
import kolkata from '../assets/images/kolkata.jpg'

const images = [gallery1, gallery2, gallery3, kolkata]

export default function Gallery() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="w-full rounded-none">
        <div className="relative h-[70vh] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Showcase"
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-brand' : 'bg-gray-300'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-ink">Gallery</h1>
          <p className="text-ink-soft mt-2">Professional imagery showcasing our work and environment.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-56 object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
