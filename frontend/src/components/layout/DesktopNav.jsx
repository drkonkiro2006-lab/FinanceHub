import InfoStrip from './InfoStrip.jsx'
import MainNav from './MainNav.jsx'
import { AnimatePresence, motion } from 'framer-motion'

export default function DesktopNav({ stuck }) {
  return (
    <div className="hidden lg:block bg-white dark:bg-slate-900 transition-colors duration-200">
      <InfoStrip />
      <AnimatePresence initial={false}>
        <motion.div
          key={stuck ? 'stuck' : 'free'}
          className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-gray-100 dark:border-slate-800 transition-colors duration-200"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <MainNav />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
