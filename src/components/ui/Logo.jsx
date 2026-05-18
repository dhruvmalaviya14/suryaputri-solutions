/**
 * Logo – shared brand component for Suryaputri Solutions
 *
 * Props:
 *  dark  {boolean} – use white wordmark for dark backgrounds (footer, hero)
 *  size  {number}  – icon size in px (default 38)
 */
export default function Logo({ dark = false, size = 38 }) {
  const textPrimary   = dark ? '#FFFFFF'   : '#1A1A2E'
  const textSecondary = dark ? '#FCA882'   : '#E8622A'
  const subColor      = dark ? 'rgba(255,255,255,0.45)' : '#8A96A3'

  return (
    <span className="flex items-center gap-2.5 select-none">
      {/* ── Icon mark ── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded background square */}
        <rect width="40" height="40" rx="11" fill="#E8622A" />

        {/* Subtle inner gradient sheen */}
        <rect width="40" height="40" rx="11" fill="url(#logoSheen)" />

        {/* Rising sun arc — top half-circle */}
        <path
          d="M20 10 C14.477 10 10 14.477 10 20 L30 20 C30 14.477 25.523 10 20 10 Z"
          fill="white"
          fillOpacity="0.95"
        />

        {/* Sun rays — 5 short lines radiating upward */}
        <line x1="20" y1="8"  x2="20" y2="5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8"/>
        <line x1="26.5" y1="10.2" x2="28.2" y2="8.2"  stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8"/>
        <line x1="13.5" y1="10.2" x2="11.8" y2="8.2"  stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8"/>
        <line x1="30.5" y1="15"   x2="33"   y2="14"   stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.6"/>
        <line x1="9.5"  y1="15"   x2="7"    y2="14"   stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.6"/>

        {/* Horizon base bar */}
        <rect x="8" y="21.5" width="24" height="3.5" rx="1.75" fill="white" fillOpacity="0.9" />

        {/* Lower tagline dot — "solutions" indicator */}
        <rect x="8"  y="27.5" width="13" height="3.5" rx="1.75" fill="white" fillOpacity="0.55" />
        <circle cx="31" cy="29.25" r="2.25" fill="white" fillOpacity="0.85" />

        {/* Gradient def for sheen */}
        <defs>
          <linearGradient id="logoSheen" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="white" stopOpacity="0.18" />
            <stop offset="100%" stopColor="white" stopOpacity="0"    />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Wordmark ── */}
      <span style={{ lineHeight: 1 }}>
        <span
          style={{
            display: 'block',
            fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: '1.05rem',
            letterSpacing: '-0.025em',
            color: textPrimary,
          }}
        >
          Surya<span style={{ color: textSecondary }}>putri</span>
        </span>
        <span
          style={{
            display: 'block',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: '0.62rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: subColor,
            marginTop: '1px',
          }}
        >
          Enterprise
        </span>
      </span>
    </span>
  )
}
