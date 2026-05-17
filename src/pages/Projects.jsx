import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'

const filterTabs = ['All', 'Web', 'Mobile', 'AI', 'SaaS']

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">Portfolio</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Projects We Are{' '}
          <span style={{ color: '#E8622A' }}>Proud Of</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '540px' }}>
          A curated selection of production systems we have engineered — from FinTech payment platforms to AI-powered SaaS products.
        </p>
      </div>
    </section>
  )
}

const projectEmojis = { 1: '💳', 2: '🏥', 3: '🛍️', 4: '📱', 5: '🤖', 6: '📦' }

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden border transition-all duration-300 relative group"
      style={{
        background: 'white',
        borderColor: hovered ? `${project.accent}33` : '#E5E1D8',
        boxShadow: hovered ? `0 8px 40px rgba(0,0,0,0.10)` : '0 1px 3px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-4px)' : visible ? 'translateY(0)' : 'translateY(24px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div
        className={`h-40 flex items-center justify-center relative bg-gradient-to-br ${project.color}`}
        style={{ borderBottom: '1px solid #E5E1D8' }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
        >
          {projectEmojis[project.id]}
        </div>
        <div className="absolute top-3 right-3 flex gap-1">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.85)', color: '#4A5568' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-semibold text-base mb-2" style={{ color: '#1A1A2E' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A5568' }}>{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Outcomes */}
        <div className="pt-4 border-t" style={{ borderColor: '#F5F4F0' }}>
          <p className="text-xs font-semibold mb-2" style={{ color: '#8A96A3' }}>Key Outcomes</p>
          <div className="space-y-1.5">
            {project.outcomes.map(outcome => (
              <div key={outcome} className="flex items-center gap-2 text-xs font-medium" style={{ color: '#10B981' }}>
                <span>✓</span> {outcome}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [ref, visible] = useScrollAnimation(0.05)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <>
      <PageHero />
      <section className="section" style={{ background: '#F5F4F0' }}>
        <div className="container-custom">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: activeFilter === tab ? '#E8622A' : 'white',
                    color: activeFilter === tab ? 'white' : '#4A5568',
                    border: `1px solid ${activeFilter === tab ? '#E8622A' : '#E5E1D8'}`,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="text-sm" style={{ color: '#8A96A3' }}>{filtered.length} project{filtered.length !== 1 ? 's' : ''}</p>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} visible={visible} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <p className="text-sm mb-4" style={{ color: '#8A96A3' }}>Interested in working with us?</p>
            <a href="/contact" className="btn-primary inline-flex">Start a Conversation →</a>
          </div>
        </div>
      </section>
    </>
  )
}
