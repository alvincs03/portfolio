import { useScrollReveal } from '../hooks/useScrollReveal'

const contacts = [
  { label: 'Email',    value: 'alvin_chen@brown.edu',       href: 'mailto:alvin_chen@brown.edu',      logo: `${import.meta.env.BASE_URL}gmail.png`,    accentColor: '#f472b6' },
  { label: 'LinkedIn', value: 'linkedin.com/in/alv1nchen',  href: 'https://linkedin.com/in/alv1nchen', logo: `${import.meta.env.BASE_URL}linkedin.jpeg`, accentColor: '#22d3ee' },
  { label: 'GitHub',   value: 'github.com/alvincs03',       href: 'https://github.com/alvincs03',      logo: `${import.meta.env.BASE_URL}github.png`,   accentColor: '#f472b6' },
  { label: 'Phone',    value: '312-868-3270',                href: 'tel:3128683270',                    logo: `${import.meta.env.BASE_URL}phone.jpeg`,   accentColor: '#22d3ee' },
]

export default function Contact() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [leftRef,  leftVisible]  = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()

  return (
    <section id="contact" style={{
      background: '#080d1a',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Aqua glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Pink glow */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">Contact</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px', color: '#f1f5f9',
            lineHeight: 1,
          }}>
            Let's build something.
          </h2>
          <p style={{ color: '#475569', fontSize: '0.875rem', marginTop: '0.75rem' }}>
            Open to internships, research, and interesting projects
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start',
        }} className="two-col">

          {/* Left: message */}
          <div
            ref={leftRef}
            className={`reveal-left${leftVisible ? ' visible' : ''}`}
          >
            <div style={{
              background: '#0e1628',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2rem',
            }}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem', fontWeight: 400,
                color: '#94a3b8',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}>
                Whether you're a recruiter, friend, or a fellow builder, I'd love to connect.
              </p>
              <p style={{
                fontSize: '0.875rem', fontWeight: 400,
                color: '#475569',
                lineHeight: 1.7,
              }}>
                Currently looking for{' '}
                <strong style={{ color: '#f472b6', fontWeight: 600 }}>Summer 2026 internships</strong>
                {' '}in full-stack, AI/ML, and backend engineering.
              </p>
            </div>
          </div>

          {/* Right: contact cards */}
          <div
            ref={rightRef}
            className={`reveal-right${rightVisible ? ' visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="btn-press"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: '#0e1628',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 180ms ease, background 180ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = c.accentColor === '#22d3ee'
                    ? 'rgba(34,211,238,0.35)'
                    : 'rgba(244,114,182,0.35)'
                  e.currentTarget.style.background = c.accentColor === '#22d3ee'
                    ? 'rgba(34,211,238,0.05)'
                    : 'rgba(244,114,182,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = '#0e1628'
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                  padding: '6px',
                }}>
                  <img src={c.logo} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 700,
                    color: c.accentColor,
                    marginBottom: '1px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8' }}>
                    {c.value}
                  </div>
                </div>
                <span style={{ marginLeft: 'auto', color: '#475569', fontSize: '0.85rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
