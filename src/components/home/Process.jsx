import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const steps = [
  { number: '01', title: 'Discovery & Strategy', desc: 'We start with deep discovery sessions — understanding your goals, users, constraints, and technical landscape before writing a line of code.' },
  { number: '02', title: 'Architecture & Design', desc: 'Our architects design the system blueprint and our designers craft the user experience — creating a solid foundation for everything that follows.' },
  { number: '03', title: 'Agile Development', desc: 'We build in 2-week sprints with regular demos and reviews. You see real progress every two weeks — not just status updates.' },
  { number: '04', title: 'QA & Testing', desc: 'Every release goes through unit tests, integration tests, and manual QA. We maintain a 95%+ test coverage target on all critical paths.' },
  { number: '05', title: 'Launch & Deployment', desc: 'We manage CI/CD pipelines, production deployment, and go-live support — ensuring a smooth, zero-downtime launch.' },
  { number: '06', title: 'Ongoing Support', desc: 'Post-launch, we provide monitoring, maintenance, and iterative improvements. The relationship does not end at deployment.' },
]

export default function Process() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading
          badge="How We Work"
          title={<>A Process Built for <span style={{ color: '#E8622A' }}>Predictability</span></>}
          subtitle="Uncertainty kills projects. Our structured process keeps everyone aligned, reduces surprises, and consistently delivers on schedule."
          center
        />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden"
              style={{
                background: 'white',
                borderColor: '#E5E1D8',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,98,42,0.25)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E5E1D8'
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              <div className="text-5xl font-display font-bold mb-4" style={{ color: 'rgba(232,98,42,0.12)', letterSpacing: '-0.04em' }}>
                {step.number}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#1A1A2E' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
