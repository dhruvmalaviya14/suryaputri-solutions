import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react'

function LinkedinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function TwitterIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
import SectionHeading from '../components/ui/SectionHeading'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F4F0 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="badge mb-6 mx-auto">Get in Touch</span>
        <h1
          className="font-display font-bold mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1A1A2E', letterSpacing: '-0.03em', lineHeight: '1.1' }}
        >
          Let's Talk About Your{' '}
          <span style={{ color: '#E8622A' }}>Next Project</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed mx-auto" style={{ color: '#4A5568', maxWidth: '540px' }}>
          Whether you have a detailed brief or just an idea — we would love to hear from you. Most projects start with a conversation.
        </p>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please describe your project (min 20 chars)'
    return e
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-bold text-xl mb-2" style={{ color: '#1A1A2E' }}>Message Received!</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
          Thank you for reaching out. A member of our team will be in touch within 1 business day.
        </p>
      </div>
    )
  }

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', half: true },
    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'you@company.com', half: true },
    { id: 'company', label: 'Company (optional)', type: 'text', placeholder: 'Company name', half: true },
    { id: 'service', label: 'Service Needed', type: 'select', placeholder: 'Select a service', half: true, options: [
      'Web Development', 'Mobile App Development', 'MERN Stack', 'UI/UX Design',
      'AI/ML Solutions', 'Cloud & DevOps', 'E-Commerce', 'SaaS Development', 'Other',
    ]},
    { id: 'message', label: 'Tell Us About Your Project', type: 'textarea', placeholder: 'Describe your project, goals, timeline, and any specific requirements...', half: false },
  ]

  return (
    <div className="card p-8">
      <h3 className="font-semibold text-lg mb-6" style={{ color: '#1A1A2E' }}>Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map(f => (
          <div key={f.id} className={f.half ? '' : 'sm:col-span-2'}>
            <label className="block text-xs font-semibold mb-2" style={{ color: '#4A5568' }}>{f.label}</label>
            {f.type === 'textarea' ? (
              <textarea
                rows={5}
                placeholder={f.placeholder}
                className={`input-field resize-none ${errors[f.id] ? 'input-error' : ''}`}
                value={form[f.id]}
                onChange={e => handleChange(f.id, e.target.value)}
                id={`contact-${f.id}`}
              />
            ) : f.type === 'select' ? (
              <select
                className={`input-field ${errors[f.id] ? 'input-error' : ''}`}
                value={form[f.id]}
                onChange={e => handleChange(f.id, e.target.value)}
                id={`contact-${f.id}`}
                style={{ appearance: 'none' }}
              >
                <option value="">{f.placeholder}</option>
                {f.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input
                type={f.type}
                placeholder={f.placeholder}
                className={`input-field ${errors[f.id] ? 'input-error' : ''}`}
                value={form[f.id]}
                onChange={e => handleChange(f.id, e.target.value)}
                id={`contact-${f.id}`}
              />
            )}
            {errors[f.id] && <p className="text-xs mt-1.5" style={{ color: '#E53E3E' }}>{errors[f.id]}</p>}
          </div>
        ))}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center"
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Sending...' : 'Send Message'} <Send size={14} />
          </button>
        </div>
      </form>
    </div>
  )
}

function ContactInfo() {
  const info = [
    { icon: Mail, label: 'Email', value: 'info@suryaputrienterprise.in', href: 'mailto:info@suryaputrienterprise.in' },
    { icon: Phone, label: 'Phone', value: '+91 7405266789', href: 'tel:+917405266789' },
    { icon: MapPin, label: 'Headquarters', value: 'Kamrej-Surat, Gujarat, India 394180.', href: '#' },
    { icon: Clock, label: 'Response Time', value: 'Within 1 business day', href: null },
  ]
  const socials = [
    { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/suryaputri-solutions-834b1940b/', label: 'LinkedIn' },
    { Icon: TwitterIcon, href: 'https://x.com/InfoSuryaputri', label: 'Twitter' },
  ]

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="font-semibold text-base mb-5" style={{ color: '#1A1A2E' }}>Contact Details</h3>
        <div className="space-y-4">
          {info.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="icon-circle w-9 h-9 flex-shrink-0">
                <Icon size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5" style={{ color: '#8A96A3' }}>{label}</p>
                {href && href !== '#' ? (
                  <a href={href} className="text-sm font-medium transition-colors" style={{ color: '#1A1A2E' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#E8622A'}
                    onMouseLeave={e => e.currentTarget.style.color = '#1A1A2E'}
                  >{value}</a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: '#1A1A2E' }}>{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t flex gap-3" style={{ borderColor: '#F5F4F0' }}>
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200"
              style={{ borderColor: '#E5E1D8', color: '#8A96A3' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8622A'; e.currentTarget.style.color = '#E8622A'; e.currentTarget.style.background = '#FEF3EE' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E1D8'; e.currentTarget.style.color = '#8A96A3'; e.currentTarget.style.background = 'transparent' }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ height: '200px', background: 'linear-gradient(135deg, #EDE9E1, #F5F4F0)', border: '1px solid #E5E1D8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}
      >
        <MapPin size={28} style={{ color: '#E8622A' }} />
        <p className="text-sm font-medium" style={{ color: '#4A5568' }}>Koramangala, Bangalore</p>
        <p className="text-xs" style={{ color: '#8A96A3' }}>India — 560034</p>
      </div>
    </div>
  )
}

function FAQ() {
  const faqs = [
    { q: 'How quickly can you start a new project?', a: 'After signing the agreement and initial payment, we can typically start within 1-2 weeks. For urgent projects, we can often accommodate faster starts.' },
    { q: 'Do you work with early-stage startups?', a: 'Absolutely. We work with everyone from pre-seed startups building MVPs to enterprise companies modernizing systems. Our engagement models are flexible for different stages.' },
    { q: 'What does your pricing model look like?', a: 'We offer both fixed-price (for well-defined projects) and time-and-materials (for evolving projects) models. All pricing is transparent and agreed upfront — no surprise invoices.' },
    { q: 'Who will I work with day-to-day?', a: 'You will have a dedicated project manager as your main point of contact, plus direct access to the engineers and designers working on your project via Slack.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance and support plans after launch. We also ensure thorough handover with documentation, deployment guides, and knowledge transfer sessions.' },
    { q: 'Do you sign NDAs?', a: 'Yes, we sign NDAs as a standard part of our engagement process. Client confidentiality and data security are taken very seriously by our team.' },
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container-custom max-w-3xl">
        <SectionHeading badge="FAQ" title="Common Questions" center />
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                borderColor: openIndex === i ? 'rgba(232,98,42,0.25)' : '#E5E1D8',
                background: 'white',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-medium text-sm"
                style={{ color: '#1A1A2E' }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  size={16}
                  style={{ flexShrink: 0, transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', color: '#8A96A3' }}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed border-t" style={{ color: '#4A5568', borderColor: '#F5F4F0', paddingTop: '12px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  const [ref, visible] = useScrollAnimation(0.05)

  return (
    <>
      <PageHero />
      <section className="section" style={{ background: '#F5F4F0' }}>
        <div className="container-custom">
          <div
            ref={ref}
            className="grid lg:grid-cols-5 gap-8"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}
          >
            <div className="lg:col-span-3"><ContactForm /></div>
            <div className="lg:col-span-2"><ContactInfo /></div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  )
}
