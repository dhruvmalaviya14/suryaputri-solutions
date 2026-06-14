import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const awsServices = [
  { service: 'Amazon Kinesis', purpose: 'GPS Data Streaming', icon: '📡', color: '#FF9900', desc: 'Ingests millions of real-time GPS events from mining vehicles per day' },
  { service: 'AWS Lambda', purpose: 'Event Processing', icon: '⚡', color: '#FF9900', desc: 'Serverless functions validate routes, trigger alerts, and compute royalties per trip' },
  { service: 'Amazon DynamoDB', purpose: 'Live Tracking Store', icon: '⚡', color: '#4053D6', desc: 'Sub-millisecond reads for live vehicle positions and trip status' },
  { service: 'Amazon S3', purpose: 'Document & Data Lake', icon: '🪣', color: '#4053D6', desc: 'Stores production records, permits, and audit documents at any scale' },
  { service: 'Amazon Bedrock', purpose: 'AI Compliance Engine', icon: '🤖', color: '#7B68EE', desc: 'Foundation models read government circulars and generate compliance action checklists' },
  { service: 'Amazon EMR', purpose: 'Large-Scale Analytics', icon: '📊', color: '#FF9900', desc: 'Processes millions of production data points for royalty and compliance reporting' },
  { service: 'Amazon RDS', purpose: 'Royalty Database', icon: '🗄️', color: '#4053D6', desc: 'Relational store for royalty rates, payment records, and operator accounts' },
  { service: 'Amazon Managed Blockchain', purpose: 'Tamper-Proof Audit', icon: '🔗', color: '#7B68EE', desc: 'Immutable ledger for every trip, payment, and permit record — fraud impossible' },
  { service: 'Amazon CloudWatch', purpose: 'Monitoring & Alerts', icon: '👁️', color: '#FF9900', desc: 'Real-time monitoring with automated alerts for compliance violations and system health' },
]

const flowSteps = [
  { label: 'Mining Vehicle GPS', icon: '🚛', color: '#E8622A' },
  { label: 'Amazon Kinesis', icon: '📡', color: '#FF9900' },
  { label: 'AWS Lambda', icon: '⚡', color: '#FF9900' },
  { label: 'DynamoDB + S3', icon: '🗄️', color: '#4053D6' },
  { label: 'Amazon Bedrock AI', icon: '🤖', color: '#7B68EE' },
  { label: 'API Gateway', icon: '🌐', color: '#4053D6' },
  { label: 'MineChain Dashboard', icon: '📊', color: '#10B981' },
]

export default function AWSArchitecture() {
  const [ref, visible] = useScrollAnimation(0.05)

  return (
    <section className="section" style={{ background: '#1A1A2E' }}>
      <div className="container-custom">
        <SectionHeading
          badge="AWS Architecture"
          title={<>Built on <span style={{ color: '#FF9900' }}>AWS-Native</span> Infrastructure</>}
          subtitle="MineChain is designed to leverage the full depth of AWS services — exactly the kind of architecture that drives significant, sustained cloud usage at scale."
          center
          light
        />

        {/* Architecture Flow */}
        <div
          className="mb-12 p-6 rounded-2xl overflow-x-auto"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center justify-start md:justify-center gap-2 min-w-max mx-auto px-4">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: step.color + '20', border: `1px solid ${step.color}40` }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs text-center font-medium" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '80px', lineHeight: '1.3' }}>
                    {step.label}
                  </span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="mb-5 flex-shrink-0" style={{ color: 'rgba(255,153,0,0.6)', fontSize: '18px' }}>→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
              + Amazon Managed Blockchain · Amazon EMR · Amazon RDS · CloudWatch · Amazon SNS · Amazon Textract · Amazon Cognito
            </span>
          </div>
        </div>

        {/* AWS Service Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awsServices.map((s, i) => (
            <div
              key={s.service}
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 60}ms`,
                transition: 'all 0.5s ease',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: s.color + '20', border: `1px solid ${s.color}30` }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#FF9900' }}>{s.service}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.purpose}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            9 AWS services · Designed for millions of daily GPS events · Scales from 10 to 10,000 mine sites without re-engineering
          </p>
        </div>
      </div>
    </section>
  )
}
