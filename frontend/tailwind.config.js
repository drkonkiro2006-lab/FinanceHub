export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b5fff',
          dark: '#0a3fcc',
          light: '#e6f0ff'
        },
        ink: {
          DEFAULT: '#101828',
          soft: '#667085'
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444'
      },
      boxShadow: {
        soft: '0 8px 20px rgba(16,24,40,0.08)',
        elevate: '0 12px 28px rgba(16,24,40,0.12)'
      }
    }
  },
  plugins: []
}
