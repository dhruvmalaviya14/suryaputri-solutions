import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="section" style={{ background: '#FAFAF8' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Client Stories"
          title={<>What Our <span style={{ color: '#E8622A' }}>Clients Say</span></>}
          subtitle="Real feedback from the teams we have built with."
          center
        />

        <div className="max-w-3xl mx-auto">
          {/* Main testimonial card */}
          <div
            className="card p-8 md:p-10 text-center"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#E8622A" style={{ color: '#E8622A' }} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base md:text-lg leading-relaxed mb-8 font-medium" style={{ color: '#1A1A2E' }}>
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: '#E8622A' }}
              >
                {t.avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm" style={{ color: '#1A1A2E' }}>{t.name}</p>
                <p className="text-xs" style={{ color: '#8A96A3' }}>{t.role} · {t.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 border"
              style={{ borderColor: '#E5E1D8', color: '#4A5568', background: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8622A'; e.currentTarget.style.color = '#E8622A' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E1D8'; e.currentTarget.style.color = '#4A5568' }}
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{ background: i === active ? '#E8622A' : '#E5E1D8', transform: i === active ? 'scale(1.3)' : 'scale(1)' }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 border"
              style={{ borderColor: '#E5E1D8', color: '#4A5568', background: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8622A'; e.currentTarget.style.color = '#E8622A' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E1D8'; e.currentTarget.style.color = '#4A5568' }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
