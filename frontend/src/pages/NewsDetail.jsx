import { useParams } from 'react-router-dom'
import ArticleLayout from '../components/layout/ArticleLayout'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'

const content = {
  'itr-update': {
    title: 'ITR Deadlines: Key Updates',
    date: 'Oct 12, 2025',
    author: 'Tax Team',
    readTime: '5',
    image: blog1,
    body: [
      'The Central Board of Direct Taxes (CBDT) has recently issued new timelines for Income Tax Return (ITR) filing, aiming to streamline the process for the upcoming financial year. These updates are crucial for individual taxpayers and businesses alike to ensure compliance and avoid late fees.',
      'One of the key changes involves the standardization of the filing window. The department has emphasized the importance of early filing to facilitate faster processing of refunds. Taxpayers are advised to collate all necessary documents, including Form 16, interest certificates, and capital gains statements, well in advance.',
      'Furthermore, the new guidance clarifies deductions under the new tax regime versus the old regime. It is highly recommended to perform a comparative analysis before selecting the regime that offers maximum tax efficiency for your specific financial situation.',
      'Electronic verification (e-verification) continues to be the preferred mode for validating returns. The turnaround time for ITR-V receipt at CPC Bengaluru has been strictly reduced, making Aadhaar OTP or net-banking based verification the fastest route to completion.'
    ]
  },
  'gst-reconciliation': {
    title: 'GST Reconciliation Best Practices',
    date: 'Oct 10, 2025',
    author: 'Compliance Desk',
    readTime: '7',
    image: blog2,
    body: [
      'Goods and Services Tax (GST) reconciliation is a critical periodic activity that ensures your claimed Input Tax Credit (ITC) matches the data available on the government portal (GSTR-2A/2B). Discrepancies here can lead to demand notices and interest penalties.',
      'To improve accuracy, businesses should adopt a monthly reconciliation cycle rather than waiting for the annual filing. Automated tools can help match purchase ledgers with the auto-populated GSTR-2B data, highlighting mismatched invoice numbers, dates, or tax amounts instantly.',
      'Common issues include vendor non-compliance, where suppliers fail to upload invoices on time. In such cases, it is vital to communicate with vendors immediately and hold payments if necessary until compliance is met. Maintaining a robust audit trail of these communications can serve as evidence during departmental audits.'
    ]
  },
  'tax-saving': {
    title: 'Top Tax-Saving Strategies',
    date: 'Oct 05, 2025',
    author: 'Finance Advisor',
    readTime: '6',
    image: blog3,
    body: [
      'Strategic tax planning is legitimate and essential for wealth creation. The goal is to maximize post-tax income by leveraging the various provisions available under the Income Tax Act.',
      'Section 80C remains the most popular avenue, covering investments in PPF, ELSS, and insurance premiums. However, taxpayers often overlook Section 80D (Health Insurance) and Section 80CCD(1B) (NPS), which offer additional deductions over and above the ₹1.5 lakh limit.',
      'For salaried employees, restructuring the salary components can also yield significant savings. Opting for allowances that are exempt from tax, such as HRA (if living in rented accommodation) or LTA, can reduce the taxable income base.',
      'Remember, tax saving should align with your financial goals. Do not invest in lock-in products solely for tax benefits if it compromises your liquidity needs.'
    ]
  }
}

export default function NewsDetail() {
  const { id } = useParams()
  const a = content[id]

  if (!a) {
    return (
      <div className="min-h-screen flex items-center justify-center text-ink-soft">
        Article not found
      </div>
    )
  }

  return (
    <ArticleLayout
      title={a.title}
      coverImage={a.image}
      author={a.author}
      date={a.date}
      readTime={a.readTime}
    >
      {a.body.map((paragraph, index) => (
        <p key={index} className="mb-6">
          {paragraph}
        </p>
      ))}
    </ArticleLayout>
  )
}
