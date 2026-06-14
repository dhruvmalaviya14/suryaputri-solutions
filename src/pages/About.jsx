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
              <p>Founded in 2020 by Vijay Savani and Ravi Savani, Suryaputri began with a clear mission — to solve real, high-impact problems with technology. After working with clients across industries, the founders identified one sector where digitization was critically missing: mining.</p>
              <p>India's mining industry — worth lakhs of crores in annual royalty — still operates on paper challans, manual royalty ledgers, and phone-call coordination. Fraud, compliance failures, and illegal extraction cost state governments hundreds of crores every year.</p>
              <p>In 2023, Suryaputri began building <strong>MineChain</strong> — an AWS-native platform combining real-time GPS tracking, AI-powered compliance, automatic royalty calculation, and blockchain audit trails into one integrated system for mining operators and government departments.</p>
              <p>Today, MineChain is in active development with prototypes live and pilot operators being onboarded across Gujarat, Rajasthan, and Maharashtra. The platform is built on 9 AWS services and designed to scale to national level.</p>
            </div>
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {[
              { number: '2020', label: 'Founded' },
              { number: '9+', label: 'AWS Services Used' },
              { number: '80+', label: 'Mines Addressable' },
              { number: '3', label: 'Target States' },
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
    { title: 'Mission', desc: 'To digitize India\'s mining industry with an AI-powered platform that makes compliance automatic, royalty transparent, and fraud structurally impossible.', icon: '🎯' },
    { title: 'Vision', desc: 'A future where every mine in India operates on tamper-proof digital records, AI reads regulatory changes the same day they are issued, and government departments have real-time visibility.', icon: '🔭' },
    { title: 'Integrity', desc: 'Blockchain-backed transparency is not just a product feature — it is how we operate. Honest assessments, clear pricing, and no hidden changes.', icon: '⚖️' },
    { title: 'Industry Focus', desc: 'We chose mining specifically because it is underserved, high-impact, and critical to India\'s infrastructure. Deep domain expertise drives better software decisions.', icon: '⛏️' },
    { title: 'AWS-First Engineering', desc: 'Every MineChain module is built on AWS-native services — Kinesis, Bedrock, Managed Blockchain, EMR — for true enterprise scalability and reliability.', icon: '☁️' },
    { title: 'Government Partnership', desc: 'We believe the government dashboard is where MineChain becomes transformational. State mining departments need better tools. We are building them.', icon: '🏛️' },
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
    '🏆 AWS-Native Architecture — 9 Services',
    '🛰️ GPS Tracking Prototype: Live',
    '🤖 AI Compliance Engine: In Development',
    '🔗 Amazon Managed Blockchain: Integrated',
    '📊 80+ Mines Addressable Market (Phase 1)',
    '🌍 3 States: Gujarat, Rajasthan, Maharashtra',
    '💰 ₹150 Cr+ Annual Royalty Trackable',
    '🏛️ Government Dashboard: Planned',
    '📦 8 Platform Modules in MineChain',
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
