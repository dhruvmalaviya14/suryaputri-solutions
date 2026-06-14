import SectionHeading from '../ui/SectionHeading'
import { CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const reasons = [
  { title: 'Only End-to-End Mining Platform in India', desc: 'Competitors offer vehicle tracking only. MineChain combines GPS, royalty management, blockchain audit, AI compliance, and government dashboards — the complete stack.' },
  { title: 'AWS-Native Architecture from Day One', desc: 'Built on Amazon Kinesis, Bedrock, Managed Blockchain, EMR, and DynamoDB — MineChain naturally scales to thousands of mines and millions of daily GPS events.' },
  { title: 'AI That Reads Government Circulars', desc: 'Powered by Amazon Bedrock, the compliance engine parses new government mining notifications automatically, identifies affected operators, and generates action checklists in minutes.' },
  { title: 'Tamper-Proof Blockchain Audit Trail', desc: 'Every trip, production record, and royalty payment is immutably stored on Amazon Managed Blockchain — eliminating the fraud and data manipulation that plagues the industry.' },
  { title: 'Government as a Future Customer', desc: 'The Government Monitoring Dashboard positions MineChain as a B2G product too — state mining departments can monitor entire jurisdictions, making this a platform play, not just a SaaS tool.' },
  { title: 'Scalable to National Level', desc: 'Phase 1 targets Gujarat, Rajasthan, and Maharashtra. The AWS architecture supports all 28 states without re-engineering. One platform, national scale.' },
]

export default function WhyChooseUs() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            badge="Why MineChain Wins"
            title={<>What Makes MineChain Different from Everything Else</>}
            subtitle="The mining industry has GPS trackers. It has manual royalty ledgers. It has paper permits. MineChain replaces all of them with one intelligent, AWS-powered operating system."
          />
          <div ref={ref} className="space-y-5">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="flex items-start gap-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(20px)',
                  transitionDelay: `${i * 80}ms`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle size={18} style={{ color: '#E8622A' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: '#1A1A2E' }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
