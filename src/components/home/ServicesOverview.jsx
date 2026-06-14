import { Link } from 'react-router-dom'
import { ArrowRight, Truck, BarChart3, IndianRupee, Link as LinkIcon, Brain, FileCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const modules = [
  { icon: Truck, title: 'Live Vehicle Tracking', desc: 'Real-time GPS tracking of mining vehicles via Amazon Kinesis. Geofencing, route compliance, and unauthorized movement alerts.', color: '#E8622A', bg: '#FEF3EE', aws: 'Kinesis + Lambda' },
  { icon: BarChart3, title: 'Production Monitoring', desc: 'Material extracted and transported tracked in real-time. Daily production reports and site productivity dashboards via EMR.', color: '#3B6FE0', bg: '#EEF3FD', aws: 'EMR + S3' },
  { icon: IndianRupee, title: 'Royalty Management', desc: 'Automatic royalty calculations based on government mineral rates. AI reads circulars and updates rates instantly.', color: '#E8622A', bg: '#FEF3EE', aws: 'Bedrock + RDS' },
  { icon: LinkIcon, title: 'Blockchain Audit Layer', desc: 'Tamper-proof storage of transport, production, and royalty records on Amazon Managed Blockchain. Zero fraud. Instant audits.', color: '#3B6FE0', bg: '#EEF3FD', aws: 'Managed Blockchain' },
  { icon: Brain, title: 'AI Compliance Engine', desc: 'AI reads government mining circulars, detects policy changes, identifies affected mines, and creates action checklists automatically.', color: '#E8622A', bg: '#FEF3EE', aws: 'Amazon Bedrock' },
  { icon: FileCheck, title: 'Permit & License Management', desc: 'Centralized document store for mining leases, environmental clearances, and vehicle permits. AI sends expiry alerts 90 days in advance.', color: '#3B6FE0', bg: '#EEF3FD', aws: 'S3 + Textract' },
]

export default function ServicesOverview() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Platform Modules"
          title={<>MineChain Core <span style={{ color: '#E8622A' }}>Modules</span></>}
          subtitle="Six integrated modules covering every dimension of mining operations — from GPS tracking to government compliance. All built on AWS-native architecture."
          center
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((s, i) => (
            <div
              key={s.title}
              className="card group cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 80}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: s.bg }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#1A1A2E' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#4A5568' }}>{s.desc}</p>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: s.bg, color: s.color }}
              >
                ☁️ {s.aws}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/minechain" className="btn-secondary">
            View Full Platform <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
