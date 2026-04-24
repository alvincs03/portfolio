import { useScrollReveal } from '../hooks/useScrollReveal'

const contacts = [
  { label: 'Email', value: 'alvin_chen@brown.edu',    href: 'mailto:alvin_chen@brown.edu',      logo: '/gmail.png',    color: '#FF6EB4', grad: 'linear-gradient(135deg, #FF6EB4, #E91E8C)' },
  { label: 'LinkedIn', value: 'linkedin.com/in/alv1nchen', href: 'https://linkedin.com/in/alv1nchen', logo: '/linkedin.jpeg', color: '#4DC9F6', grad: 'linear-gradient(135deg, #4DC9F6, #0EA5E9)' },
  { label: 'GitHub', value: 'github.com/alvincs03',    href: 'https://github.com/alvincs03',      logo: '/github.png',   color: '#C084FC', grad: 'linear-gradient(135deg, #C084FC, #9333EA)' },
  { label: 'Phone', value: '312-868-3270',             href: 'tel:3128683270',                    logo: '/phone.jpeg',   color: '#4ADE80', grad: 'linear-gradient(135deg, #4ADE80, #22C55E)' },
]

export default function Contact() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [leftRef, leftVisible] = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()

  return (
    <section id="contact" style={{
      background: 'linear-gradient(160deg, #0f0c29 0%, #1a1040 40%, #24243e 100%)',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      {[
        { top: '10%', left: '5%', size: 350, color: 'rgba(255,110,180,0.08)' },
        { bottom: '10%', right: '5%', size: 400, color: 'rgba(77,201,246,0.07)' },
        { top: '40%', left: '40%', size: 300, color: 'rgba(192,132,252,0.06)' },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: orb.size, height: orb.size,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          top: orb.top, bottom: orb.bottom, left: orb.left, right: orb.right,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: '#FF6EB4', marginBottom: '12px',
          }}>
            — Let's Connect —
          </span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1px', color: '#fff',
          }}>
            Contact
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginTop: '8px' }}>
            Open to internships, research, and cool side projects
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start',
        }} className="two-col">
          {/* Left: Message + CTA */}
          <div
            ref={leftRef}
            className={`reveal-left${leftVisible ? ' visible' : ''}`}
          >
            {/* Glass message card */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px',
              padding: '2rem',
              marginBottom: 0,
              boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
              position: 'relative',
            }}>
              {/* Gradient border top */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, #FF6EB4, #C084FC, #4DC9F6)',
                borderRadius: '24px 24px 0 0',
              }} />
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem', fontWeight: 400,
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}>
                Whether you're a recruiter, friend, or a fellow builder,
                I'd love to connect. 
              </p>
              <p style={{
                fontSize: '0.875rem', fontWeight: 400,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
              }}>
                Currently looking for <strong style={{ color: '#FF6EB4', fontWeight: 600 }}>Summer 2026 internships</strong> in
                full-stack, AI/ML, and backend engineering.
              </p>
            </div>

          </div>

          {/* Right: Contact cards */}
          <div
            ref={rightRef}
            className={`reveal-right${rightVisible ? ' visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
          >
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03) translateX(6px)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.11)'
                  e.currentTarget.style.boxShadow = `0 8px 24px ${c.color}30`
                  e.currentTarget.style.borderColor = `${c.color}44`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 14px ${c.color}40`,
                  flexShrink: 0,
                  overflow: 'hidden',
                  padding: '7px',
                }}>
                  <img src={c.logo} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: c.color, marginBottom: '1px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                    {c.value}
                  </div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
