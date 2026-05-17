import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function SectionHeading({ badge, title, subtitle, center = false, light = false }) {
  const [ref, visible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-700 ${center ? 'text-center' : ''} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {badge && (
        <span className={`badge mb-4 ${center ? 'mx-auto' : ''}`}>
          {badge}
        </span>
      )}
      <h2
        className="section-title"
        style={{ color: light ? 'white' : undefined }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle mt-4 ${center ? 'mx-auto' : ''}`}
          style={{ color: light ? 'rgba(255,255,255,0.65)' : undefined }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
