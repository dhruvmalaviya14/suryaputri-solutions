import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 px-4" style={{ background: '#F5F4F0', borderTop: '1px solid #E5E1D8' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#E8622A' }}>Stay Updated</p>
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-3" style={{ color: '#1A1A2E', letterSpacing: '-0.02em' }}>
          Engineering Insights, Monthly
        </h3>
        <p className="text-sm mb-8" style={{ color: '#8A96A3' }}>
          Architecture decisions, tech deep-dives, and company updates — directly from our engineering team. No spam.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl" style={{ background: '#F0FDF4', border: '1px solid #86EFAC' }}>
            <span className="text-xl">✓</span>
            <p className="text-sm font-semibold" style={{ color: '#166534' }}>You are on the list! Expect our next issue soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className={`input-field ${error ? 'input-error' : ''}`}
                id="newsletter-email"
              />
              {error && <p className="text-xs mt-1.5 text-left" style={{ color: '#E53E3E' }}>{error}</p>}
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe <Send size={13} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
