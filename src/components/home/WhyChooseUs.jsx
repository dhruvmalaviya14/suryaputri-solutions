import SectionHeading from '../ui/SectionHeading'
import { CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const reasons = [
  { title: 'Senior Engineers on Every Project', desc: 'No bait-and-switch. You get senior engineers assigned to your project from day one — not juniors supervised from a distance.' },
  { title: 'Transparent Communication', desc: 'Daily standups, weekly demos, and a dedicated Slack channel. You always know exactly where your project stands.' },
  { title: 'Fixed-Price & Time-Material Options', desc: 'We offer both engagement models with clear, upfront pricing. No surprise invoices.' },
  { title: 'Domain-Aware Development', desc: 'We study your industry before we start. Financial compliance, healthcare data regulations, e-commerce patterns — we bring domain knowledge to the table.' },
  { title: 'Code You Own Completely', desc: 'All intellectual property is transferred to you at project completion. Full source code, documentation, and deployment guides.' },
  { title: 'Proven Track Record', desc: '96% client satisfaction. 80% repeat business rate. 50+ projects delivered since 2017 with zero project abandonments.' },
]

export default function WhyChooseUs() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            badge="Why Suryaputri"
            title={<>What Makes Us Different From the Rest</>}
            subtitle="The software industry is full of agencies. We are a product engineering partner — and that distinction matters."
          />
          <div ref={ref} className="space-y-5">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="flex items-start gap-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(20px)',
                  transitionDelay: `${i * 80}ms`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle size={18} style={{ color: '#E8622A' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: '#1A1A2E' }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
