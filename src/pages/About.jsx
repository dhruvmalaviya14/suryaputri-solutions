import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { team, timeline } from '../data/team'

function PageHero() {
  return (
    <section
      className="pt-32 pb-20 px-4"
      style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">About Suryaputri</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Built by Engineers,{' '}
          <span style={{ color: '#E8622A' }}>For Builders.</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '560px' }}>
          We started Suryaputri because we believed clients deserved more than vendors — they needed engineering partners who were genuinely invested in outcomes.
        </p>
      </div>
    </section>
  )
}

function Story() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              badge="Our Story"
              title={<>From a 3-Person Team to an Engineering <span style={{ color: '#E8622A' }}>Powerhouse</span></>}
            />
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#4A5568' }}>
              <p>Founded in 2020 by Vijay Savani and Ravi Savani, Suryaputri was started with a simple vision — to help businesses build modern, scalable, and reliable digital solutions with the right technology and engineering approach.</p>
              <p>What began as a small development team focused on web applications quickly evolved into a growing software company delivering solutions across multiple industries and technology stacks.</p>
              <p>Today, Suryaputri works with clients across India and international markets, building web platforms, mobile applications, SaaS products, AI-powered systems, and enterprise-grade software tailored to business needs.</p>
              <p>Our focus remains the same — delivering clean engineering, transparent communication, and long-term value through technology.</p>
            </div>
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {[
              { number: '2020', label: 'Founded' },
              { number: '40+', label: 'Team Members' },
              { number: '25+', label: 'Projects Shipped' },
              { number: '1', label: 'Global Offices' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="card text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.95)',
                  transitionDelay: `${i * 100}ms`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div className="font-display font-bold text-3xl mb-1" style={{ color: '#E8622A' }}>{s.number}</div>
                <div className="text-xs font-medium" style={{ color: '#8A96A3' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Values() {
  const [ref, visible] = useScrollAnimation()
  const values = [
    { title: 'Mission', desc: 'To be the most trusted engineering partner for companies building meaningful digital products — from MVP to enterprise scale.', icon: '🎯' },
    { title: 'Vision', desc: 'A world where every ambitious company has access to senior engineering talent and the processes that consistently deliver great software.', icon: '🔭' },
    { title: 'Integrity', desc: 'We tell clients what they need to hear, not what they want to hear. Honest assessments, transparent pricing, and no surprise changes.', icon: '⚖️' },
    { title: 'Excellence', desc: 'We hold ourselves to a standard of craft — in code, in design, in communication. Good enough is never good enough.', icon: '✦' },
    { title: 'Partnership', desc: 'We do not take projects — we take on missions. When you succeed, we succeed. That alignment drives everything we do.', icon: '🤝' },
    { title: 'Learning', desc: 'Technology moves fast. We invest in continuous learning — conference budgets, internal knowledge shares, and research time.', icon: '📖' },
  ]

  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading badge="Our Foundation" title="Mission, Vision & Values" center />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#1A1A2E' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const [ref, visible] = useScrollAnimation(0.05)
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <SectionHeading badge="Our Journey" title={<>Our Path of <span style={{ color: '#E8622A' }}>Building & Growing</span></>} center />
        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: '#E5E1D8', transform: 'translateX(-50%)' }} />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`flex gap-8 md:gap-0 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: `${i * 100}ms`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10 md:ml-auto'} pl-12 md:pl-0`}>
                  <div className="card p-4">
                    <span className="text-xs font-bold" style={{ color: '#E8622A' }}>{item.year}</span>
                    <h3 className="font-semibold text-sm mt-1 mb-1" style={{ color: '#1A1A2E' }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#4A5568' }}>{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full mt-4 flex-shrink-0" style={{ background: '#E8622A', transform: 'translate(-50%, 0)', border: '2px solid white', boxShadow: '0 0 0 3px rgba(232,98,42,0.2)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading badge="Leadership" title={<>The Team Behind <span style={{ color: '#E8622A' }}>Suryaputri</span></>} center />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="card text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                style={{ background: member.color }}
              >
                {member.avatar}
              </div>
              <h3 className="font-semibold text-base mb-1" style={{ color: '#1A1A2E' }}>{member.name}</h3>
              <p className="text-xs font-medium mb-3" style={{ color: '#E8622A' }}>{member.role}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#4A5568' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  const achievements = [
    '🏆 ISO 27001 Certified (2023)',
    '🌍 Clients in 12+ countries',
    '⭐ 96% client satisfaction rate',
    '🔁 80% repeat business rate',
    '📦 Zero project abandonments since founding',
    '🎓 50+ engineers trained and mentored',
  ]
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#1A1A2E' }}>
      <div className="container-custom">
        <SectionHeading badge="Credentials" title={<>Milestones That <span style={{ color: '#E8622A' }}>Define Us</span></>} center light />
        <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <div
              key={a}
              className="px-5 py-4 rounded-xl text-sm font-medium"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.8)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 80}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero />
      <Story />
      <Values />
      <Timeline />
      <Team />
      <Achievements />
    </>
  )
}
