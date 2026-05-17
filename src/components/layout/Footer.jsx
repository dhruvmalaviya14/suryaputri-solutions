import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

// Inline SVG social icons (lucide-react v1 removed social icons)
function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function TwitterIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function YoutubeIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="10" fill="#E8622A" />
        <path d="M10 13C10 11.3431 11.3431 10 13 10H23C24.6569 10 26 11.3431 26 13C26 14.6569 24.6569 16 23 16H13C11.3431 16 10 14.6569 10 13Z" fill="white" />
        <path d="M10 23C10 21.3431 11.3431 20 13 20H20C21.6569 20 23 21.3431 23 23C23 24.6569 21.6569 26 20 26H13C11.3431 26 10 24.6569 10 23Z" fill="white" fillOpacity="0.6" />
        <circle cx="26" cy="23" r="3" fill="white" fillOpacity="0.9" />
      </svg>
      <span className="font-display font-bold text-base" style={{ color: 'white', letterSpacing: '-0.02em' }}>
        Surya<span style={{ color: '#FCA882' }}>putri</span>
      </span>
    </Link>
  )
}

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Insights', to: '/insights' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Web Development', to: '/services' },
    { label: 'Mobile Apps', to: '/services' },
    { label: 'UI/UX Design', to: '/services' },
    { label: 'AI/ML Solutions', to: '/services' },
    { label: 'Cloud & DevOps', to: '/services' },
  ],
  Solutions: [
    { label: 'SaaS Development', to: '/services' },
    { label: 'E-Commerce', to: '/services' },
    { label: 'MERN Stack', to: '/services' },
    { label: 'API Integrations', to: '/services' },
    { label: 'Maintenance', to: '/services' },
  ],
}

const socials = [
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: GithubIcon, href: '#', label: 'GitHub' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#141E2B' }}>
      {/* CTA strip */}
      <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#E8622A' }}>Ready to build?</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl" style={{ color: 'white', letterSpacing: '-0.02em' }}>
              Let's turn your idea into a product.
            </h3>
          </div>
          <Link to="/contact" className="btn-primary whitespace-nowrap flex-shrink-0">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px' }}>
              A modern software development company building scalable digital products and IT solutions for clients across industries and geographies.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="mailto:hello@suryaputri.com" className="flex items-center gap-2.5 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8622A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <Mail size={14} /> hello@suryaputri.com
              </a>
              <a href="tel:+918012345678" className="flex items-center gap-2.5 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8622A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <Phone size={14} /> +91 80 1234 5678
              </a>
              <p className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" /> Koramangala, Bangalore — 560034, India
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Suryaputri Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(232,98,42,0.2)'
                  e.currentTarget.style.color = '#E8622A'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
