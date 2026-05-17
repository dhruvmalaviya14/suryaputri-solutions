import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const industries = [
  { emoji: '🏦', name: 'FinTech', desc: 'Payment systems, wallets, and financial platforms.' },
  { emoji: '🏥', name: 'Healthcare', desc: 'EHR systems, telehealth, and medical SaaS.' },
  { emoji: '🛒', name: 'E-Commerce', desc: 'D2C stores, marketplaces, and commerce APIs.' },
  { emoji: '🎓', name: 'EdTech', desc: 'LMS platforms, assessments, and learning tools.' },
  { emoji: '🏭', name: 'Manufacturing', desc: 'ERP systems, supply chain, and IoT dashboards.' },
  { emoji: '🚚', name: 'Logistics', desc: 'Fleet management, tracking, and routing systems.' },
  { emoji: '🏢', name: 'Enterprise SaaS', desc: 'Multi-tenant B2B platforms and internal tools.' },
  { emoji: '🤖', name: 'AI / Automation', desc: 'ML pipelines, intelligent workflows, and data products.' },
]

export default function Industries() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#FAFAF8' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Industries"
          title={<>Expertise Across <span style={{ color: '#E8622A' }}>Multiple Domains</span></>}
          subtitle="We bring domain context to every project. Our team has shipped production systems across eight key industries."
          center
        />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="card text-center group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 60}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div className="text-3xl mb-3">{ind.emoji}</div>
              <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#1A1A2E' }}>{ind.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#8A96A3' }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
