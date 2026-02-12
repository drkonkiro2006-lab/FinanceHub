export default function MobileBottomCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 px-4 py-3 pb-safe-bottom flex gap-3">
      <a
        href="tel:+919000000000"
        className="flex-1 bg-green-600 text-white py-3 rounded-xl text-center font-medium"
      >
        Call
      </a>
      <a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-green-500 text-white py-3 rounded-xl text-center font-medium"
      >
        WhatsApp
      </a>
    </div>
  )
}
