import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = (nextIndex) => {
    setFading(true)
    setTimeout(() => {
      setActive(nextIndex)
      setFading(false)
    }, 180)
  }

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((active + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="section" style={{ background: '#FAFAF8' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Client Stories"
          title={<>What Our <span style={{ color: '#E8622A' }}>Clients Say</span></>}
          subtitle="Real feedback from the businesses we have built for."
          center
        />

        <div className="max-w-3xl mx-auto">
          <div
            className="card p-8 md:p-10 text-center relative overflow-hidden"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.08)', border: '1px solid #E5E1D8' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #E8622A, #F59E0B, #E8622A)' }}
            />

            <div
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? 'translateY(8px)' : 'translateY(0)',
                transition: 'opacity 0.18s ease, transform 0.18s ease',
              }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#E8622A" style={{ color: '#E8622A' }} />
                ))}
              </div>

              <blockquote className="text-base md:text-lg leading-relaxed mb-8 font-medium" style={{ color: '#1A1A2E' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md"
                  style={{ background: t.color || '#E8622A' }}
                >
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm" style={{ color: '#1A1A2E' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#8A96A3' }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
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
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === active ? 20 : 8,
                    height: 8,
                    background: i === active ? '#E8622A' : '#E5E1D8',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
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
