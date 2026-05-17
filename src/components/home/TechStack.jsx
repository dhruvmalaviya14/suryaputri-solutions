import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stacks = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Expo'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
  { category: 'AI/ML', items: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch'] },
]

export default function TechStack() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Tech Stack"
          title="Built on Modern, Proven Technologies"
          subtitle="We work with carefully selected technologies that are battle-tested, widely supported, and optimal for the scale your product needs."
          center
        />
        <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {stacks.map((stack, i) => (
            <div
              key={stack.category}
              className="card-flat rounded-2xl p-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#E8622A' }}>{stack.category}</p>
              <div className="flex flex-wrap gap-2">
                {stack.items.map(item => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
