import { Menu, MoreVertical } from 'lucide-react'

export default function MobileTopBar({ onMenu, onInfo }) {
  return (
    <div
      className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-700 pt-safe-top"
      role="banner"
    >
      <div className="h-12 px-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onMenu}
          className="p-2 rounded-md text-slate-900 dark:text-slate-100"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <button
          type="button"
          onClick={onInfo}
          className="p-2 rounded-md text-slate-900 dark:text-slate-100"
          aria-label="Open contact info"
        >
          <MoreVertical size={22} />
        </button>
      </div>
    </div>
  )
}
