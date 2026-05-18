import AnimatedCounter from '../ui/AnimatedCounter'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { end: 40, suffix: '+', label: 'Engineers & Designers', desc: 'Across Bangalore and Hyderabad' },
  { end: 25, suffix: '+', label: 'Projects Delivered', desc: 'Since 2017, zero abandonments' },
  { end: 96, suffix: '%', label: 'Client Satisfaction', desc: 'Measured post-project' },
  { end: 4, suffix: '+', label: 'Years Experience', desc: 'Enterprise to startup' },
]

export default function Stats() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 px-4" style={{ background: '#1E2D3D' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-center mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Company at a glance
        </p>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 100}ms`,
                transition: 'all 0.7s ease',
              }}
            >
              <div
                className="font-display font-bold text-5xl md:text-6xl mb-2"
                style={{ color: '#E8622A', letterSpacing: '-0.04em' }}
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-sm mb-1" style={{ color: 'white' }}>{stat.label}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
