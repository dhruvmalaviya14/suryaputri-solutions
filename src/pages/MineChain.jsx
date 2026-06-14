import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function PageHero() {
  return (
    <section
      className="pt-32 pb-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #1E2D3D 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(232,98,42,0.06) 0%, transparent 60%)' }}
      />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          style={{ background: 'rgba(232,98,42,0.15)', color: '#E8622A', border: '1px solid rgba(232,98,42,0.2)' }}
        >
          ⛏️ MineChain Platform
        </span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'white', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          India's Mining Compliance,
          <br />
          <span style={{ color: '#E8622A' }}>Royalty & Intelligence Platform</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '640px' }}>
          MineChain is an end-to-end digital operating system for mining companies — combining real-time GPS tracking, AI compliance, automatic royalty management, and blockchain audit trails on a single AWS-native platform.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link to="/contact" className="btn-primary">
            Request a Pilot Demo <ArrowRight size={15} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
          >
            View All Modules
          </Link>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '9+', label: 'AWS Services' },
            { value: '80+', label: 'Mines Addressable' },
            { value: '₹150 Cr+', label: 'Royalty Trackable/yr' },
            { value: '3', label: 'Launch States' },
          ].map(s => (
            <div
              key={s.label}
              className="p-4 rounded-2xl text-center"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="font-display font-bold text-2xl mb-1" style={{ color: '#E8622A' }}>{s.value}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading
          badge="The Problem"
          title={<>India's Mining Industry Runs on <span style={{ color: '#E8622A' }}>Paper & Phone Calls</span></>}
          subtitle="Fraud, illegal extraction, and compliance failures cost state governments hundreds of crores every year. The root cause? Zero real-time visibility."
          center
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-5">
          {[
            { icon: '📋', title: 'Paper Challans', desc: 'Every trip is recorded on physical paper challans — easily altered, easily lost, and impossible to audit in real time. GPS vendor data and royalty records never match.' },
            { icon: '💸', title: 'Manual Royalty Errors', desc: 'Royalty rates change frequently via government circulars. Companies manually track these changes — leading to errors, underpayments, and penalty disputes that drag through courts for years.' },
            { icon: '🚛', title: 'No Real-Time Visibility', desc: 'Neither mine operators nor government departments know where vehicles are, what is being extracted, or whether extraction is within permitted quantities — until a physical inspection.' },
          ].map((p, i) => (
            <div
              key={p.title}
              className="card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 100}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#1A1A2E' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const [ref, visible] = useScrollAnimation()
  const modules = [
    { num: '01', title: 'Live Vehicle Tracking', aws: 'Kinesis + Lambda', icon: '🛰️', desc: 'Real-time GPS streams for every mining vehicle. Route geofencing, unauthorized movement alerts, driver analytics.' },
    { num: '02', title: 'Production Monitoring', aws: 'EMR + S3', icon: '📊', desc: 'Material extracted and transported tracked in real-time. Daily production reports and site productivity dashboards.' },
    { num: '03', title: 'Royalty Management', aws: 'Bedrock + RDS', icon: '💰', desc: 'Automatic royalty calculations. AI reads government circulars and updates rates. Payment reminders and audit records.' },
    { num: '04', title: 'Blockchain Audit Layer', aws: 'Managed Blockchain', icon: '🔗', desc: 'Tamper-proof records for every trip, production log, and royalty payment. Zero fraud. Instant government verification.' },
    { num: '05', title: 'AI Compliance Engine', aws: 'Amazon Bedrock', icon: '🤖', desc: 'Reads new government mining circulars automatically. Detects policy changes. Identifies affected mines. Creates action checklists.' },
    { num: '06', title: 'Permit Management', aws: 'S3 + Textract', icon: '📄', desc: 'All mining leases, environmental clearances, and vehicle permits centralized. AI sends expiry alerts 90 days ahead.' },
    { num: '07', title: 'AI Predictive Analytics', aws: 'SageMaker + EMR', icon: '📈', desc: 'Predict vehicle breakdowns, production delays, royalty obligations, and illegal movement patterns before they occur.' },
    { num: '08', title: 'Government Dashboard', aws: 'API Gateway + QuickSight', icon: '🏛️', desc: 'State mining departments monitor all active mines, royalty collection, and compliance across their jurisdiction in real-time.' },
  ]

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <SectionHeading
          badge="The Solution"
          title={<>8 Integrated Modules. <span style={{ color: '#E8622A' }}>One Platform.</span></>}
          subtitle="MineChain replaces paper challans, manual spreadsheets, and disconnected GPS trackers with an integrated, AWS-native intelligence system."
          center
        />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((m, i) => (
            <div
              key={m.num}
              className="p-5 rounded-2xl border transition-all duration-300"
              style={{
                borderColor: '#E5E1D8',
                background: '#FAFAF8',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 60}ms`,
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8622A'; e.currentTarget.style.background = '#FEF9F6' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E1D8'; e.currentTarget.style.background = '#FAFAF8' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{m.icon}</span>
                <span className="text-xs font-bold" style={{ color: '#E8622A' }}>{m.num}</span>
              </div>
              <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#1A1A2E' }}>{m.title}</h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#4A5568' }}>{m.desc}</p>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded"
                style={{ background: '#FFF8F0', color: '#FF9900' }}
              >
                ☁️ {m.aws}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AWSSection() {
  const [ref, visible] = useScrollAnimation(0.05)
  const services = [
    { name: 'Amazon Kinesis', use: 'GPS Data Streaming', color: '#FF9900' },
    { name: 'AWS Lambda', use: 'Event Processing', color: '#FF9900' },
    { name: 'Amazon DynamoDB', use: 'Live Data Store', color: '#4053D6' },
    { name: 'Amazon S3', use: 'Data Lake & Documents', color: '#4053D6' },
    { name: 'Amazon Bedrock', use: 'AI Compliance Engine', color: '#7B68EE' },
    { name: 'Amazon EMR', use: 'Big Data Analytics', color: '#FF9900' },
    { name: 'Amazon RDS', use: 'Royalty Database', color: '#4053D6' },
    { name: 'Amazon Managed Blockchain', use: 'Audit Trail', color: '#7B68EE' },
    { name: 'Amazon CloudWatch', use: 'Monitoring & Alerts', color: '#FF9900' },
  ]

  return (
    <section className="section" style={{ background: '#1A1A2E' }}>
      <div className="container-custom">
        <SectionHeading
          badge="AWS Architecture"
          title={<>Powered by <span style={{ color: '#FF9900' }}>9 AWS Services</span></>}
          subtitle="MineChain's architecture is designed to drive significant, sustained cloud usage — the kind that scales from a single pilot mine to a national government deployment."
          center
          light
        />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="p-4 rounded-xl flex items-center gap-3"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: `${i * 60}ms`,
                transition: 'all 0.5s ease',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm"
                style={{ background: s.color + '20', border: `1px solid ${s.color}30` }}
              >
                ☁️
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: '#FF9900' }}>{s.name}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketSection() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Market Opportunity"
          title={<>A Platform, <span style={{ color: '#E8622A' }}>Not Just a SaaS Tool</span></>}
          subtitle="The mining compliance market in India is massive, underserved, and ripe for digital disruption."
          center
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '⛏️', title: 'Mining Operators', value: '80+', desc: 'Active quarry & mine operators in Gujarat, Rajasthan, Maharashtra targeted in Phase 1. Each operates 5–15+ vehicles daily.', color: '#E8622A' },
            { icon: '🏛️', title: 'Government Departments', value: '3', desc: 'State mining departments in Phase 1 states — Gujarat, Rajasthan, Maharashtra — as potential government SaaS customers.', color: '#3B6FE0' },
            { icon: '💰', title: 'Annual Royalty Volume', value: '₹2,500 Cr+', desc: 'Mineral royalty collected annually across Gujarat, Rajasthan & Maharashtra combined. The MineChain SaaS fee on tracked royalty is the core revenue model.', color: '#10B981' },
          ].map((m, i) => (
            <div
              key={m.title}
              className="card text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 100}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-display font-bold text-2xl mb-1" style={{ color: m.color }}>{m.value}</div>
              <h3 className="font-semibold text-sm mb-2" style={{ color: '#1A1A2E' }}>{m.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#4A5568' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompetitiveSection() {
  const items = [
    { label: 'GPS Vehicle Tracking', current: true, minechain: true },
    { label: 'Royalty Management', current: false, minechain: true },
    { label: 'AI Compliance Engine', current: false, minechain: true },
    { label: 'Blockchain Audit Trail', current: false, minechain: true },
    { label: 'Permit & License Management', current: false, minechain: true },
    { label: 'AI Predictive Analytics', current: false, minechain: true },
    { label: 'Government Dashboard', current: false, minechain: true },
    { label: 'Real-Time Production Monitoring', current: false, minechain: true },
  ]
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom max-w-3xl">
        <SectionHeading
          badge="Competitive Advantage"
          title={<>What Current GPS Vendors <span style={{ color: '#E8622A' }}>Can't Do</span></>}
          center
        />
        <div ref={ref} className="rounded-2xl overflow-hidden border" style={{ borderColor: '#E5E1D8' }}>
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-semibold" style={{ background: '#F5F4F0', color: '#8A96A3' }}>
            <div>Feature</div>
            <div className="text-center">Current GPS Vendors</div>
            <div className="text-center" style={{ color: '#E8622A' }}>MineChain</div>
          </div>
          {items.map((item, i) => (
            <div
              key={item.label}
              className="grid grid-cols-3 px-6 py-3.5 border-t text-sm"
              style={{
                borderColor: '#F5F4F0',
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 60}ms`,
                transition: 'all 0.4s ease',
              }}
            >
              <div className="font-medium" style={{ color: '#1A1A2E' }}>{item.label}</div>
              <div className="text-center text-lg">{item.current ? '✅' : '❌'}</div>
              <div className="text-center text-lg">{item.minechain ? '✅' : '❌'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4" style={{ background: '#1A1A2E' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="badge mx-auto mb-6" style={{ background: 'rgba(232,98,42,0.15)', color: '#E8622A' }}>
          Phase 1 Pilot — Now Open
        </div>
        <h2
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', letterSpacing: '-0.03em', lineHeight: '1.2' }}
        >
          Ready to digitize your<br />
          <span style={{ color: '#E8622A' }}>mining operations?</span>
        </h2>
        <p className="text-sm mb-10 mx-auto" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '440px', lineHeight: '1.7' }}>
          We are onboarding 10 pilot mining operators across Gujarat, Rajasthan, and Maharashtra. Early adopters get priority onboarding and preferential platform pricing.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Apply for Pilot Programme <ArrowRight size={15} />
          </Link>
          <a
            href="mailto:admin@suryaputrienterprise.in"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
          >
            admin@suryaputrienterprise.in
          </a>
        </div>
      </div>
    </section>
  )
}

export default function MineChain() {
  return (
    <>
      <PageHero />
      <ProblemSection />
      <SolutionSection />
      <AWSSection />
      <MarketSection />
      <CompetitiveSection />
      <CTASection />
    </>
  )
}
