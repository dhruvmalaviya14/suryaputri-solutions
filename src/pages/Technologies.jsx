import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { technologies } from '../data/technologies'

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">Tech Stack</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Modern, Battle-Tested{' '}
          <span style={{ color: '#E8622A' }}>Technologies</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '540px' }}>
          We work with carefully selected technologies — chosen for performance, community support, and long-term viability. No chasing trends; just proven tools.
        </p>
      </div>
    </section>
  )
}

function TechCategory({ category, data, index, visible }) {
  const isOrange = data.color === 'orange'

  return (
    <div
      className="card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 100}ms`,
        transition: 'all 0.6s ease',
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
          style={{
            background: isOrange ? '#FEF3EE' : '#EEF3FD',
            color: isOrange ? '#E8622A' : '#3B6FE0',
          }}
        >
          {data.label}
        </div>
      </div>
      <div className="space-y-3">
        {data.items.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium" style={{ color: '#1A1A2E' }}>{item.name}</span>
              <span className="text-xs font-semibold" style={{ color: isOrange ? '#E8622A' : '#3B6FE0' }}>{item.level}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#F5F4F0' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: visible ? `${item.level}%` : '0%',
                  background: isOrange
                    ? 'linear-gradient(90deg, #E8622A, #D9551E)'
                    : 'linear-gradient(90deg, #3B6FE0, #2557C7)',
                  transitionDelay: `${index * 100 + 300}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Technologies() {
  const [ref, visible] = useScrollAnimation(0.05)
  const [activeTab, setActiveTab] = useState('all')

  const categories = Object.keys(technologies)
  const tabs = ['all', ...categories]
  const filteredCats = activeTab === 'all'
    ? Object.entries(technologies)
    : Object.entries(technologies).filter(([key]) => key === activeTab)

  return (
    <>
      <PageHero />
      <section className="section" style={{ background: '#F5F4F0' }}>
        <div className="container-custom">
          <SectionHeading
            badge="Stack Overview"
            title="What We Build With"
            subtitle="Deep expertise across the modern web, mobile, cloud, and AI ecosystem."
            center
          />

          {/* Tab filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize"
                style={{
                  background: activeTab === tab ? '#E8622A' : 'white',
                  color: activeTab === tab ? 'white' : '#4A5568',
                  border: `1px solid ${activeTab === tab ? '#E8622A' : '#E5E1D8'}`,
                }}
              >
                {tab === 'all' ? 'All' : technologies[tab]?.label || tab}
              </button>
            ))}
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCats.map(([key, data], i) => (
              <TechCategory key={key} category={key} data={data} index={i} visible={visible} />
            ))}
          </div>

          {/* Philosophy note */}
          <div
            className="mt-12 p-8 rounded-3xl"
            style={{ background: 'white', border: '1px solid #E5E1D8' }}
          >
            <h3 className="font-semibold text-lg mb-3" style={{ color: '#1A1A2E' }}>Our Technology Philosophy</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#4A5568', maxWidth: '640px' }}>
              We do not chase every new framework. We adopt technologies when they are mature, well-supported, and genuinely solve problems. When we recommend a stack, it is because we have used it in production at scale — not because it was trending on Hacker News last month.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
