import { Link } from 'react-router-dom'
import { ArrowRight, Satellite, Shield, BarChart3 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const pillars = [
  { icon: Satellite, title: 'Real-Time GPS Intelligence', desc: 'Every mining vehicle tracked live via Amazon Kinesis streams. Geofencing, route compliance, and unauthorized movement alerts in real-time.' },
  { icon: Shield, title: 'Regulatory Compliance, Automated', desc: 'AI reads government circulars, detects policy changes, and generates action checklists — so operators are never caught by a new regulation.' },
  { icon: BarChart3, title: 'Blockchain-Backed Audit Trail', desc: 'Every trip, production record, and royalty payment immutably stored on Amazon Managed Blockchain. Zero fraud. Instant government audits.' },
]

export default function CompanyIntro() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#FAFAF8' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeading
              badge="About MineChain"
              title={<>The Operating System for <span style={{ color: '#E8622A' }}>India's Mining Industry</span></>}
              subtitle="MineChain is Suryaputri's flagship product — an end-to-end digital platform that connects mining operators, transport fleets, royalty departments, and state governments on a single, AWS-native intelligence layer."
            />
            <Link to="/minechain" className="btn-secondary mt-2">
              See How It Works <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right pillars */}
          <div ref={ref} className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="card flex items-start gap-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(24px)',
                  transitionDelay: `${i * 120}ms`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div className="icon-circle flex-shrink-0">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: '#1A1A2E' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
