import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const clients = [
  'NovaPay Financial',
  'Apollo Medical',
  'ShopSphere',
  'LogiFlow',
  'IntelliRecruit',
  'MediTrack',
  'FieldPulse',
  'DataVault Inc.',
]

export default function TrustedBy() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-14 px-4" style={{ background: 'white', borderTop: '1px solid #E5E1D8', borderBottom: '1px solid #E5E1D8' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <p
          className={`text-xs font-semibold uppercase tracking-widest text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#8A96A3' }}
        >
          Trusted by growing companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {clients.map((client, i) => (
            <div
              key={client}
              className="transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-default"
                style={{ background: '#F5F4F0', color: '#8A96A3', border: '1px solid #E5E1D8' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#E8622A'
                  e.currentTarget.style.borderColor = 'rgba(232,98,42,0.25)'
                  e.currentTarget.style.background = '#FEF3EE'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#8A96A3'
                  e.currentTarget.style.borderColor = '#E5E1D8'
                  e.currentTarget.style.background = '#F5F4F0'
                }}
              >
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
