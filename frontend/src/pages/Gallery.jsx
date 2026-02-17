import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 1. Updated Glob Syntax for Vite 5.x/6.x
const imageModules = import.meta.glob('../assets/Gallery/**/*.{jpg,jpeg,png,webp,svg}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const textModules = import.meta.glob('../assets/Gallery/**/*.txt', { 
  eager: true, 
  query: '?raw', 
  import: 'default' 
});

export default function Gallery() {
  const [index, setIndex] = useState(0)

  // 2. Organize data by folder structure
  const galleryData = useMemo(() => {
    const folders = {};

    // Process Images: path format is usually "../assets/Gallery/FolderName/image.jpg"
    Object.keys(imageModules).forEach((path) => {
      const parts = path.split('/');
      const folderName = parts[parts.length - 2]; 
      
      if (!folders[folderName]) {
        folders[folderName] = { 
          title: folderName.replace(/-/g, ' '), // Default title from folder name
          images: [] 
        };
      }
      folders[folderName].images.push(imageModules[path]);
    });

    // Process Descriptions from .txt files
    Object.keys(textModules).forEach((path) => {
      const parts = path.split('/');
      const folderName = parts[parts.length - 2];
      if (folders[folderName]) {
        // Update title with text file content
        folders[folderName].title = textModules[path].trim();
      }
    });

    return Object.values(folders);
  }, []);

  // 3. Flatten all images for the Hero Slider
  const allImages = useMemo(() => galleryData.flatMap(f => f.images), [galleryData]);

  useEffect(() => {
    if (allImages.length === 0) return;
    const id = setInterval(() => {
      setIndex(i => (i + 1) % allImages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [allImages]);

  if (galleryData.length === 0) {
    return <div className="p-20 text-center text-gray-500">No folders found in assets/Gallery</div>;
  }

  return (
    <div className="bg-white">
      {/* HERO SECTION (Top Slider) */}
     {/* HERO SECTION (Top Slider) */}
<section className="w-full relative h-[75vh] md:h-[90vh] bg-black overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.img
      key={allImages[index]}
      src={allImages[index]}
      alt="Hero Gallery"
      // Increased initial scale from 1.1 to 1.25 for a bigger "zoom-in" feel
      initial={{ opacity: 0, scale: 1.25 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 1.8, // Slightly slower for a more cinematic feel
        ease: "easeOut" 
      }}
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
  </AnimatePresence>
  
  {/* Overlay Text - Larger and more dramatic */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <motion.h1 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-white text-6xl md:text-9xl font-black tracking-tighter drop-shadow-2xl italic uppercase"
    >
      Visuals
    </motion.h1>
  </div>

  {/* Progress Indicators - Adjusted for the larger section */}
  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
    {allImages.slice(0, 8).map((_, i) => (
      <div 
        key={i} 
        className={`h-1.5 transition-all duration-700 rounded-full ${
          i === index % 8 ? 'w-12 bg-white' : 'w-3 bg-white/30'
        }`}
      />
    ))}
  </div>
</section>

      {/* INDIVIDUAL FOLDER SECTIONS */}
      {galleryData.map((folder, folderIdx) => (
        <section key={folderIdx} className="py-16 px-6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{folder.title}</h2>
            <div className="h-1.5 w-16 bg-brand rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {folder.images.map((img, imgIdx) => (
              <motion.div
                key={imgIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg bg-gray-100"
              >
                <img
                  src={img}
                  alt={`${folder.title} ${imgIdx}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}