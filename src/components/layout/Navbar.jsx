import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/projects', label: 'Projects' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
]

function NavLogo() {
  return (
    <Link to="/" aria-label="Suryaputri Solutions – Home">
      <Logo dark={false} size={38} />
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,250,248,0.95)' : 'rgba(250,250,248,0.80)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #E5E1D8' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <NavLogo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-charcoal bg-cream-100 font-semibold'
                        : 'text-gray-500 hover:text-charcoal hover:bg-cream-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA  */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Start a Project
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#1A1A2E' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(26,26,46,0.4)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#FAFAF8', borderLeft: '1px solid #E5E1D8' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: '#E5E1D8' }}>
          <NavLogo />
          <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-cream-100" style={{ color: '#1A1A2E' }}>
            <X size={20} />
          </button>
        </div>
        <nav className="px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-50 text-orange-450 font-semibold'
                    : 'text-gray-600 hover:bg-cream-100 hover:text-charcoal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-4 pt-4 border-t" style={{ borderColor: '#E5E1D8' }}>
            <Link to="/contact" className="btn-primary w-full justify-center">
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
