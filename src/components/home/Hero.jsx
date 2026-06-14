import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'AWS-Native Architecture',
  '9 AWS Services Integrated',
  'Mining Compliance Focus',
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 60%, #EDE9E1 100%)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-100 pointer-events-none" />

      {/* Subtle geometric decorations */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,98,42,0.08) 0%, transparent 70%)', transform: 'translate(30%, -20%)' }}
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,111,224,0.10) 0%, transparent 70%)', transform: 'translate(-30%, 20%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="badge mb-6 animate-fade-in">
              ⛏️ &nbsp;Mining Intelligence Platform
            </div>

            <h1
              className="font-display font-bold leading-none mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.03em', color: '#1A1A2E' }}
            >
              India's Mining
              {' '}
              <span style={{ color: '#E8622A' }}>Compliance &</span>
              {' '}
              Intelligence Platform.
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#4A5568', maxWidth: '480px' }}>
              Suryaputri is building <strong>MineChain</strong> — an AI-powered platform for mining operators and state governments to manage GPS tracking, royalty compliance, blockchain audit trails, and regulatory intelligence in one system.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map(h => (
                <span
                  key={h}
                  className="flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: '#4A5568' }}
                >
                  <CheckCircle size={14} style={{ color: '#E8622A' }} />
                  {h}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/minechain" className="btn-primary">
                Explore MineChain <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Right visual — Live MineChain Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-3xl p-8"
                style={{
                  background: 'white',
                  border: '1px solid #E5E1D8',
                  boxShadow: '0 8px 48px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF6058' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                  <div className="flex-1 mx-4 h-7 rounded-lg flex items-center px-3" style={{ background: '#F5F4F0' }}>
                    <span style={{ fontSize: '10px', color: '#8A96A3', fontFamily: 'monospace' }}>minechain.suryaputrienterprise.in</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Active Vehicles', value: '62', color: '#E8622A', icon: '🚛' },
                    { label: 'Royalty This Month', value: '₹28 L', color: '#3B6FE0', icon: '💰' },
                    { label: 'Compliance Score', value: '97.4%', color: '#10B981', icon: '✅' },
                    { label: 'AI Alerts Today', value: '2 New', color: '#F59E0B', icon: '🤖' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between p-3 rounded-xl" style={{ background: '#F5F4F0' }}>
                      <span className="text-sm font-medium flex items-center gap-2" style={{ color: '#4A5568' }}>
                        <span>{item.icon}</span>{item.label}
                      </span>
                      <span className="text-base font-bold font-display" style={{ color: item.color }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 rounded-2xl" style={{ background: '#FEF3EE', border: '1px solid rgba(232,98,42,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#E8622A' }}>
                      <span className="text-white text-lg font-bold">🤖</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#E8622A' }}>AI COMPLIANCE ALERT</p>
                      <p className="text-sm font-semibold" style={{ color: '#1A1A2E' }}>New Gujarat royalty rate — 3 mines affected</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — Blockchain */}
              <div
                className="absolute -bottom-5 -left-8 px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{
                  background: 'white',
                  border: '1px solid #E5E1D8',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#EEF3FD' }}>
                  <span style={{ fontSize: '16px' }}>🔗</span>
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#1A1A2E' }}>Blockchain Verified</p>
                  <p className="text-xs" style={{ color: '#8A96A3' }}>318 records today</p>
                </div>
              </div>

              {/* Floating tech tags */}
              <div
                className="absolute -top-6 -right-6 px-4 py-2 rounded-xl"
                style={{ background: '#1E2D3D', boxShadow: '0 4px 16px rgba(30,45,61,0.25)' }}
              >
                <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#E8622A' }}>Kinesis</span> · <span style={{ color: '#60A5FA' }}>Bedrock</span> · <span style={{ color: '#10B981' }}>Blockchain</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t"
          style={{ borderColor: '#E5E1D8' }}
        >
          {[
            { number: '80+', label: 'Mines Addressable' },
            { number: '9+', label: 'AWS Services Used' },
            { number: '₹150 Cr+', label: 'Royalty Tracked Annually' },
            { number: '3', label: 'Target States (Phase 1)' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-display font-bold text-3xl md:text-4xl" style={{ color: '#E8622A', letterSpacing: '-0.03em' }}>
                {stat.number}
              </div>
              <div className="text-sm mt-1" style={{ color: '#8A96A3' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
