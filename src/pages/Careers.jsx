import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, MapPin, Clock, Briefcase, DollarSign, Heart, BookOpen, Home, Coffee, TrendingUp, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { openPositions, benefits } from '../data/careers'

const benefitIcons = { DollarSign, Heart, BookOpen, Home, Coffee, TrendingUp }

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">Careers</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Work on Problems That{' '}
          <span style={{ color: '#E8622A' }}>Actually Matter</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '560px' }}>
          Join a team of engineers and designers who care deeply about craft — and build systems that real people depend on every day.
        </p>
      </div>
    </section>
  )
}

function Benefits() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <SectionHeading badge="Why Join Us" title={<>More Than a <span style={{ color: '#E8622A' }}>Job</span></>} center />
        <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = benefitIcons[b.icon]
            return (
              <div
                key={b.title}
                className="card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 80}ms`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div className="icon-circle mb-4">
                  {Icon && <Icon size={18} />}
                </div>
                <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#1A1A2E' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PositionAccordion({ position, index, visible }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        borderColor: open ? 'rgba(232,98,42,0.25)' : '#E5E1D8',
        background: 'white',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-semibold text-base" style={{ color: '#1A1A2E' }}>{position.title}</h3>
            <span className="badge-blue">{position.department}</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-1">
            <span className="flex items-center gap-1 text-xs" style={{ color: '#8A96A3' }}>
              <Briefcase size={12} /> {position.type}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#8A96A3' }}>
              <MapPin size={12} /> {position.location}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#8A96A3' }}>
              <Clock size={12} /> {position.experience}
            </span>
          </div>
        </div>
        <ChevronDown
          size={18}
          style={{ color: '#8A96A3', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', marginTop: '2px' }}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: '#F5F4F0' }}>
          <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color: '#4A5568' }}>{position.description}</p>
          <p className="text-xs font-semibold mb-2" style={{ color: '#1A1A2E' }}>Requirements</p>
          <ul className="space-y-1.5 mb-5">
            {position.requirements.map(req => (
              <li key={req} className="flex items-start gap-2 text-sm" style={{ color: '#4A5568' }}>
                <span style={{ color: '#E8622A', marginTop: '1px' }}>·</span> {req}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary text-sm">
            Apply for This Role <ArrowRight size={13} />
          </Link>
        </div>
      )}
    </div>
  )
}

function OpenPositions() {
  const [ref, visible] = useScrollAnimation(0.05)
  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Open Roles"
          title={<>Current <span style={{ color: '#E8622A' }}>Openings</span></>}
          subtitle="We are growing across engineering, design, and infrastructure. Every role offers real ownership and impact."
        />
        <div ref={ref} className="space-y-3 max-w-3xl">
          {openPositions.map((pos, i) => (
            <PositionAccordion key={pos.id} position={pos} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HiringProcess() {
  const steps = [
    { step: '01', title: 'Application Review', desc: 'We review every application within 3 business days. No ghosting.' },
    { step: '02', title: 'Intro Call', desc: '30-minute conversation with a team lead to understand your background and goals.' },
    { step: '03', title: 'Technical Assessment', desc: 'A focused take-home or live coding challenge — designed to take 2-3 hours max.' },
    { step: '04', title: 'Team Interview', desc: 'Meet the people you will work with. We assess fit both ways — you interview us too.' },
    { step: '05', title: 'Offer & Onboarding', desc: 'Competitive offer, signed within days. Structured 30-day onboarding plan from day one.' },
  ]
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <SectionHeading badge="Hiring Process" title="Straightforward. Respectful. Fast." center />
        <div ref={ref} className="flex flex-col md:flex-row gap-0 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ background: '#E5E1D8' }} />
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="flex-1 relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 100}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div className="flex flex-col items-center text-center px-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 font-bold text-sm relative z-10"
                  style={{ background: '#FEF3EE', color: '#E8622A', border: '3px solid white' }}
                >
                  {s.step}
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#1A1A2E' }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#4A5568' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Careers() {
  return (
    <>
      <PageHero />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
    </>
  )
}
