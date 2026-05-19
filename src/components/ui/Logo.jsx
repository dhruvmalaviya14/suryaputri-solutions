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
      {/* ── Icon mark (original favicon) ── */}
      <img
        src="/favicon.jpeg"
        alt="Suryaputri Logo"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          borderRadius: '11px',
          display: 'block',
          flexShrink: 0,
        }}
      />

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
