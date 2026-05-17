import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 px-4" style={{ background: '#1A1A2E' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="badge mx-auto mb-6" style={{ background: 'rgba(232,98,42,0.15)', color: '#E8622A' }}>
          Let's Build Together
        </div>
        <h2
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Have a product idea?<br />
          <span style={{ color: '#E8622A' }}>Let's make it real.</span>
        </h2>
        <p className="text-base md:text-lg mb-10 mx-auto" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', lineHeight: '1.7' }}>
          Whether you are a startup building your MVP or an enterprise modernizing legacy systems — we have the team and experience to deliver.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Start a Project <ArrowRight size={15} />
          </Link>
          <a
            href="mailto:hello@suryaputri.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.8)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
          >
            <Calendar size={15} /> Schedule a Call
          </a>
        </div>
      </div>
    </section>
  )
}
