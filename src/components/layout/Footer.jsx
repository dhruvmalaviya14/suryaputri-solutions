import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../ui/Logo'

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


function FooterLogo() {
  return (
    <Link to="/" aria-label="Suryaputri Solutions – Home">
      <Logo dark={true} size={38} />
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
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/suryaputri-solutions-834b1940b/', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://x.com/InfoSuryaputri', label: 'Twitter' },
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
            <FooterLogo />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px' }}>
              A modern software development company building scalable digital products and IT solutions for clients across industries and geographies.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="mailto:hello@suryaputri.com" className="flex items-center gap-2.5 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8622A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <Mail size={14} /> info@suryaputrienterprise.in
              </a>
              <a href="tel:+918012345678" className="flex items-center gap-2.5 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8622A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <Phone size={14} /> +91 7405266789
              </a>
              <p className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" /> Kamrej-Surat, Gujarat, India 394180.
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
                target="_blank"
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
