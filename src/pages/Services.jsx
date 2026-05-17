import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Smartphone, Code2, Palette, Brain, Cloud, ShoppingCart, Layers, Plug, Wrench, ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { services } from '../data/services'

const iconMap = { Globe, Smartphone, Code2, Palette, Brain, Cloud, ShoppingCart, Layers, Plug, Wrench }

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">What We Offer</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Services That Cover the{' '}
          <span style={{ color: '#E8622A' }}>Full Product Lifecycle</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '560px' }}>
          From first-line discovery to post-launch support, we offer every engineering and design service your product needs to succeed.
        </p>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, visible }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = iconMap[service.icon]
  const isOrange = service.color === 'orange'

  return (
    <div
      className="card group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 80}ms`,
        transition: 'all 0.6s ease',
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: isOrange ? '#FEF3EE' : '#EEF3FD' }}
        >
          {Icon && <Icon size={20} style={{ color: isOrange ? '#E8622A' : '#3B6FE0' }} />}
        </div>
        <div>
          <h3 className="font-semibold text-base mb-1" style={{ color: '#1A1A2E' }}>{service.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{service.shortDesc}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.features.slice(0, 3).map(f => (
          <span key={f} className="flex items-center gap-1 text-xs" style={{ color: '#4A5568' }}>
            <CheckCircle size={11} style={{ color: isOrange ? '#E8622A' : '#3B6FE0' }} /> {f}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="mt-2 pt-4 border-t" style={{ borderColor: '#E5E1D8' }}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A5568' }}>{service.description}</p>
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {service.features.map(f => (
              <span key={f} className="flex items-center gap-1.5 text-xs" style={{ color: '#4A5568' }}>
                <span style={{ color: isOrange ? '#E8622A' : '#3B6FE0' }}>·</span> {f}
              </span>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: '#1A1A2E' }}>Process</p>
            <div className="flex flex-wrap gap-2">
              {service.process.map((step, i) => (
                <span key={step} className="flex items-center gap-1 text-xs" style={{ color: '#8A96A3' }}>
                  <span style={{ color: isOrange ? '#E8622A' : '#3B6FE0', fontWeight: 'bold' }}>{i + 1}.</span> {step}
                  {i < service.process.length - 1 && <span style={{ color: '#E5E1D8', marginLeft: '4px' }}>→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold transition-colors"
          style={{ color: isOrange ? '#E8622A' : '#3B6FE0' }}
        >
          {expanded ? '↑ Less detail' : '+ More detail'}
        </button>
        <Link to="/contact" className="text-xs font-semibold flex items-center gap-1" style={{ color: '#8A96A3' }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8622A'}
          onMouseLeave={e => e.currentTarget.style.color = '#8A96A3'}
        >
          Get a Quote <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  )
}

export default function Services() {
  const [ref, visible] = useScrollAnimation(0.05)

  return (
    <>
      <PageHero />
      <section className="section" style={{ background: '#F5F4F0' }}>
        <div className="container-custom">
          <SectionHeading
            badge="Services"
            title="Everything You Need, Under One Roof"
            subtitle="We handle the full engineering spectrum so you do not have to manage multiple vendors."
            center
          />
          <div ref={ref} className="grid md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} visible={visible} />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-3xl p-10 text-center"
            style={{ background: '#1A1A2E' }}
          >
            <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'white', letterSpacing: '-0.02em' }}>Not sure which service you need?</h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>Book a free 30-minute discovery call and we will recommend the right approach for your product.</p>
            <Link to="/contact" className="btn-primary">
              Book Discovery Call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
