import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { projects } from '../../data/projects'

export default function FeaturedProjects() {
  const [ref, visible] = useScrollAnimation()
  const featured = projects.slice(0, 3)

  return (
    <section className="section" style={{ background: '#F5F4F0' }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Our Work"
            title={<>Projects That <span style={{ color: '#E8622A' }}>Drive Results</span></>}
            subtitle="A selection of products and platforms we have engineered for clients across industries."
          />
          <Link to="/projects" className="btn-secondary flex-shrink-0 self-start md:self-auto">
            All Projects <ArrowRight size={14} />
          </Link>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className="card group overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              {/* Project header */}
              <div
                className={`h-32 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.color}`}
                style={{ border: '1px solid #E5E1D8' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: project.accent + '18', border: `1px solid ${project.accent}22` }}
                >
                  <span className="text-2xl">
                    {project.id === 1 ? '🍽️' : project.id === 2 ? '💇' : project.id === 3 ? '🛒' : '📱'}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="badge-gray text-xs">{tag}</span>
                ))}
              </div>

              <h3 className="font-semibold text-base mb-2" style={{ color: '#1A1A2E' }}>{project.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A5568' }}>{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 4).map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Outcomes */}
              <div className="pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: '#E5E1D8' }}>
                {project.outcomes.slice(0, 2).map(o => (
                  <span key={o} className="text-xs font-medium" style={{ color: '#10B981' }}>✓ {o}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
