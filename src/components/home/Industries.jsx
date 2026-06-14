import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const customers = [
  { emoji: '⛏️', name: 'Mining Operators', desc: 'Stone quarries, coal mines, sand & gravel extractors.' },
  { emoji: '🏛️', name: 'State Mining Depts.', desc: 'Gujarat, Rajasthan, Maharashtra mining departments.' },
  { emoji: '🚛', name: 'Transport Fleet Owners', desc: 'Mining haul truck & tipper fleet operators.' },
  { emoji: '📋', name: 'Royalty Auditors', desc: 'Government & private royalty verification agencies.' },
  { emoji: '🌿', name: 'Environmental Officers', desc: 'PCB & mining lease environmental compliance teams.' },
  { emoji: '📄', name: 'Mining Lease Holders', desc: 'Companies with active mineral extraction leases.' },
  { emoji: '🔍', name: 'Compliance Officers', desc: 'Internal mining company regulatory & legal teams.' },
  { emoji: '🏦', name: 'Mining Financiers', desc: 'Banks & NBFCs financing mining operations & fleets.' },
]

export default function Industries() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: '#FAFAF8' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Target Customers"
          title={<>Who MineChain <span style={{ color: '#E8622A' }}>Serves</span></>}
          subtitle="MineChain addresses every stakeholder in the mining value chain — from operators managing daily extractions to state governments monitoring jurisdiction-wide compliance."
          center
        />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customers.map((c, i) => (
            <div
              key={c.name}
              className="card text-center group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 60}ms`,
                transition: 'all 0.6s ease',
              }}
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#1A1A2E' }}>{c.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#8A96A3' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
