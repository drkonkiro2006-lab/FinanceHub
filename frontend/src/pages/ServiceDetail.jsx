import { useParams, Link } from "react-router-dom"
import { useState } from "react"

import itrImg from "../assets/images/service-itr.jpg"
import gstRegImg from "../assets/images/service-gst-registration.jpg"
import gstRetImg from "../assets/images/service-gst-returns.jpg"
import taxPlanImg from "../assets/images/service-tax-planning.jpg"
import accountingImg from "../assets/images/service-accounting.jpg"
import consultingImg from "../assets/images/service-business-consulting.jpg"

/* =========================
   TAX CALCULATION UTIL
   ========================= */

const toNumber = (val) => Number(val) || 0

const computeTax = (form) => {
  const salary = toNumber(form.salary)
  const otherIncome = toNumber(form.otherIncome)

  let grossIncome = salary + otherIncome

  // =========================
  // STANDARD DEDUCTION
  // =========================
  if (form.regime === "new") {
    grossIncome -= 75000
  } else {
    grossIncome -= 50000
  }

  grossIncome = Math.max(0, grossIncome)

  let taxableIncome = grossIncome

  // =========================
  // OLD REGIME DEDUCTIONS
  // =========================
  if (form.regime === "old") {
    const deductions =
      toNumber(form.deductions80C) +
      toNumber(form.deductions80D) +
      toNumber(form.hra) +
      toNumber(form.homeLoanInterest) +
      toNumber(form.nps)

    taxableIncome -= deductions
  }

  taxableIncome = Math.max(0, taxableIncome)

  let tax = 0

  // =================================================
  // NEW REGIME (Budget 2026 Slabs)
  // =================================================
  if (form.regime === "new") {

    if (taxableIncome <= 400000) tax = 0
    else if (taxableIncome <= 800000)
      tax = (taxableIncome - 400000) * 0.05
    else if (taxableIncome <= 1200000)
      tax = 20000 + (taxableIncome - 800000) * 0.10
    else if (taxableIncome <= 1600000)
      tax = 60000 + (taxableIncome - 1200000) * 0.15
    else if (taxableIncome <= 2000000)
      tax = 120000 + (taxableIncome - 1600000) * 0.20
    else if (taxableIncome <= 2400000)
      tax = 200000 + (taxableIncome - 2000000) * 0.25
    else
      tax = 300000 + (taxableIncome - 2400000) * 0.30

    // 87A REBATE (New Regime)
    if (taxableIncome <= 1200000) {
      tax = Math.max(0, tax - 60000)
    }
  }

  // =================================================
  // OLD REGIME
  // =================================================
  else {

    let basicExemption = 250000

    if (form.age === "60to80") basicExemption = 300000
    if (form.age === "above80") basicExemption = 500000

    if (taxableIncome <= basicExemption) tax = 0
    else if (taxableIncome <= 500000)
      tax = (taxableIncome - basicExemption) * 0.05
    else if (taxableIncome <= 1000000)
      tax =
        (500000 - basicExemption) * 0.05 +
        (taxableIncome - 500000) * 0.20
    else
      tax =
        (500000 - basicExemption) * 0.05 +
        500000 * 0.20 +
        (taxableIncome - 1000000) * 0.30

    // 87A REBATE (Old Regime)
    if (taxableIncome <= 500000) {
      tax = Math.max(0, tax - 12500)
    }
  }

  // =================================================
  // SURCHARGE
  // =================================================
  let surchargeRate = 0

  if (taxableIncome > 50000000) { // Above 5 Cr
    surchargeRate = form.regime === "old" ? 0.37 : 0.25
  }
  else if (taxableIncome > 20000000) { // 2Cr – 5Cr
    surchargeRate = 0.25
  }
  else if (taxableIncome > 10000000) { // 1Cr – 2Cr
    surchargeRate = 0.15
  }
  else if (taxableIncome > 5000000) { // 50L – 1Cr
    surchargeRate = 0.10
  }

  const surcharge = tax * surchargeRate
  const taxWithSurcharge = tax + surcharge

  // =================================================
  // CESS (4%)
  // =================================================
  const cess = taxWithSurcharge * 0.04

  const totalTax = taxWithSurcharge + cess

  return {
    grossIncome,
    taxableIncome,
    tax,
    surcharge,
    cess,
    totalTax,
  }
}



/* =========================
   TAX CALCULATOR PAGE
   ========================= */

function IncomeTaxCalculator() {
  const [form, setForm] = useState({
    regime: "new",
    age: "below60",
    salary: "",
    otherIncome: "",
    deductions80C: "",
    deductions80D: "",
    hra: "",
    homeLoanInterest: "",
    nps: "",
  })

  const result = computeTax(form)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-lg border p-6 shadow-soft">
          <h1 className="text-3xl font-bold text-ink">
            Income Tax Calculator (FY 2024-25)
          </h1>

          <div className="mt-6 space-y-4">
            <select
              name="regime"
              value={form.regime}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="new">New Regime</option>
              <option value="old">Old Regime</option>
            </select>

            {form.regime === "old" && (
              <select
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="below60">Below 60</option>
                <option value="60to80">60 – 80</option>
                <option value="above80">Above 80</option>
              </select>
            )}

            <input type="number" name="salary" placeholder="Annual Salary" onChange={handleChange} className="w-full border rounded p-2" />
            <input type="number" name="otherIncome" placeholder="Other Income" onChange={handleChange} className="w-full border rounded p-2" />

            {form.regime === "old" && (
              <>
                <input type="number" name="deductions80C" placeholder="80C Investment" onChange={handleChange} className="w-full border rounded p-2" />
                <input type="number" name="deductions80D" placeholder="80D Medical Insurance" onChange={handleChange} className="w-full border rounded p-2" />
                <input type="number" name="hra" placeholder="HRA Exemption" onChange={handleChange} className="w-full border rounded p-2" />
                <input type="number" name="homeLoanInterest" placeholder="Home Loan Interest" onChange={handleChange} className="w-full border rounded p-2" />
                <input type="number" name="nps" placeholder="NPS (80CCD)" onChange={handleChange} className="w-full border rounded p-2" />
              </>
            )}
          </div>
        </div>

        <div className="rounded-lg border p-6 shadow-soft bg-gray-50">
          <h2 className="text-2xl font-semibold text-ink">Tax Summary</h2>
          <div className="mt-4 space-y-2 text-ink-soft">
            <div>Gross Income: ₹ {result.grossIncome.toLocaleString()}</div>
            <div>Taxable Income: ₹ {result.taxableIncome.toLocaleString()}</div>
            <div>Income Tax: ₹ {result.tax.toLocaleString()}</div>
            <div>Health & Education Cess (4%): ₹ {result.cess.toLocaleString()}</div>
            <div className="font-bold text-ink text-lg">
              Total Tax Payable: ₹ {result.totalTax.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================
   SERVICE MAP
   ========================= */

const map = {
  "Tax-Calculation": { title: "Income Tax Calculator" },
  "itr-filing": {
    title: "Income Tax Return Filing",
    image: itrImg,
    narrative:
      "Accurate filing backed by expert review. We map deductions, validate documents, and file on time.",
    steps: [
      "Profile and document intake",
      "Deduction and income mapping",
      "Draft computation and review",
      "E-filing and e-verification",
    ],
    compliance: ["Income Tax Act", "CBDT guidelines", "EVC/OTP verification"],
    faqs: [
      { q: "What documents are required?", a: "Form 16, bank statements, investment proofs, etc." },
      { q: "Can you help with late filings?", a: "Yes, with applicable penalties addressed." },
    ],
    price: "₹1,499",
  },
  "gst-registration": {
    title: "GST Registration",
    image: gstRegImg,
    narrative: "Seamless GSTIN registration with document verification and portal support.",
    steps: ["Document collection", "GST portal application", "Verification follow-up", "ARN and GSTIN issuance"],
    compliance: ["CGST Act", "GSTN portal procedures"],
    faqs: [
      { q: "How long does it take?", a: "Typically 3–7 working days." },
      { q: "Do you assist with amendments?", a: "Yes, supported." },
    ],
    price: "₹2,999",
  },
}

/* =========================
   SERVICE DETAIL PAGE
   ========================= */

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = map[slug]

  if (!s) return <div>Service not found</div>

  if (slug === "Tax-Calculation") {
    return <IncomeTaxCalculator />
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src={s.image} alt={s.title} className="w-full rounded-lg shadow-soft object-cover object-center" />
        <div>
          <h1 className="text-3xl font-bold text-ink">{s.title}</h1>
          <p className="text-ink-soft mt-2">{s.narrative}</p>
          <div className="mt-4 font-semibold text-ink">Starting at {s.price}</div>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <Link to="/services" className="btn-outline">Back to Services</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
