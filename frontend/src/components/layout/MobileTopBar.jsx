import { Menu, MoreVertical } from 'lucide-react'
import logo from '../../assets/images/mybrand.png'

export default function MobileTopBar({ onMenu, onInfo }) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/70 dark:border-slate-700/70 pt-safe-top">
      <div className="relative h-12 px-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open navigation menu"
          className="p-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Menu size={22} />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <img
            src={logo}
            alt="Brand Logo"
            className="h-11 w-auto max-w-[180px] object-contain"
          />
        </div>
        <button
          type="button"
          onClick={onInfo}
          aria-label="Open info panel"
          className="p-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <MoreVertical size={22} />
        </button>
      </div>
    </div>
  )
}
