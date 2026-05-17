import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Smartphone, Code2, Palette, Brain, Cloud } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const services = [
  { icon: Globe, title: 'Web Development', desc: 'High-performance web apps built with React, Next.js, and Node.js. From SPAs to enterprise platforms.', color: '#E8622A', bg: '#FEF3EE' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform React Native and Flutter apps with native-quality performance on iOS and Android.', color: '#3B6FE0', bg: '#EEF3FD' },
  { icon: Code2, title: 'MERN Stack', desc: 'End-to-end JavaScript solutions with MongoDB, Express, React, and Node.js — our core expertise.', color: '#E8622A', bg: '#FEF3EE' },
  { icon: Palette, title: 'UI/UX Design', desc: 'User research, wireframing, and pixel-perfect Figma designs grounded in usability principles.', color: '#3B6FE0', bg: '#EEF3FD' },
  { icon: Brain, title: 'AI/ML Solutions', desc: 'Custom ML models, LLM integrations, and AI-powered product features that create real business value.', color: '#E8622A', bg: '#FEF3EE' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'AWS, GCP, Docker, Kubernetes — reliable infrastructure and CI/CD pipelines for seamless delivery.', color: '#3B6FE0', bg: '#EEF3FD' },
]

export default function ServicesOverview() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading
          badge="What We Do"
          title={<>Services Built for <span style={{ color: '#E8622A' }}>Real Impact</span></>}
          subtitle="We offer end-to-end software development services that cover the full product lifecycle — from strategy and design to engineering and operations."
          center
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
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
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
