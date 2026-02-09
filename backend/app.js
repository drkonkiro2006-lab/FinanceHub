import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()
const app = express()

const allowed = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(s => s.trim())

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowed.includes(origin)) return cb(null, true)
      return cb(new Error('Not allowed by CORS'))
    }
  })
)
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'finance-tax-backend' })
})

app.use('/api/contact', contactRoutes)

export default app
