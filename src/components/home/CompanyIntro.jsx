import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const pillars = [
  { icon: Zap, title: 'Speed Without Shortcuts', desc: 'We move fast by building right. Clean architecture means faster iterations and fewer bugs over time.' },
  { icon: Shield, title: 'Enterprise-Grade Security', desc: 'ISO 27001 certified. Every system we build is designed with security at the architecture level.' },
  { icon: Users, title: 'Long-Term Partnership', desc: '80% of our business comes from repeat clients. We invest in relationships, not just projects.' },
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
              badge="About Suryaputri"
              title={<>Engineering Partner for <span style={{ color: '#E8622A' }}>Ambitious Companies</span></>}
              subtitle="We are a software development company that works as a true engineering partner — embedded with your team, invested in your outcomes, and built to deliver."
            />
            <Link to="/about" className="btn-secondary mt-2">
              Our Story <ArrowRight size={14} />
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
