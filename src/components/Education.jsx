import { useScrollReveal } from '../hooks/useScrollReveal'

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Computer Systems',
  'Discrete Structures',
  'Applied Cryptography',
  'Computational Probability & Statistics',
  'Linear Algebra',
]

export default function Education() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [leftRef,  leftVisible]  = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()

  return (
    <section id="education" style={{
      background: '#0d1529',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">Education</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px',
            color: '#f1f5f9',
            lineHeight: 1,
          }}>
            Where I learned to build.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          alignItems: 'start',
        }} className="two-col">

          {/* Left: University card */}
          <div
            ref={leftRef}
            className={`reveal-left${leftVisible ? ' visible' : ''}`}
            style={{
              background: '#0e1628',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            {/* Single aqua top accent — 2px, not rainbow */}
            <div style={{ height: '2px', background: '#22d3ee' }} />

            <div style={{ padding: '2rem' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                padding: '8px',
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}brownlogo.png`}
                  alt="Brown University"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '-0.5px',
                color: '#f1f5f9',
                marginBottom: '4px',
              }}>
                Brown University
              </div>

              <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500, marginBottom: '1.5rem' }}>
                Providence, Rhode Island
              </div>

              <div style={{
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.18)',
                borderRadius: '10px',
                padding: '11px 14px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#94a3b8',
              }}>
                B.S. Computer Science + Applied Mathematics
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Expected May 2028', accent: '#22d3ee' },
                  { label: 'GPA: 3.82 / 4.0',  accent: '#f472b6' },
                ].map(badge => (
                  <span key={badge.label} style={{
                    background: badge.accent === '#22d3ee'
                      ? 'rgba(34,211,238,0.1)'
                      : 'rgba(244,114,182,0.1)',
                    border: `1px solid ${badge.accent === '#22d3ee'
                      ? 'rgba(34,211,238,0.28)'
                      : 'rgba(244,114,182,0.28)'}`,
                    borderRadius: '8px',
                    padding: '5px 12px',
                    fontWeight: 600, fontSize: '0.78rem',
                    color: badge.accent,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Coursework */}
          <div
            ref={rightRef}
            className={`reveal-right${rightVisible ? ' visible' : ''}`}
            style={{
              background: '#0e1628',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '3px', height: '14px',
                background: '#f472b6',
                borderRadius: '2px',
              }} />
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#475569',
                fontFamily: 'DM Sans, sans-serif',
              }}>
                Relevant Coursework
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {courses.map((course, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#94a3b8',
                    cursor: 'default',
                    transition: 'border-color 150ms ease, color 150ms ease, background 150ms ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
                    e.currentTarget.style.color = '#f1f5f9'
                    e.currentTarget.style.background = 'rgba(34,211,238,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = '#94a3b8'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#22d3ee',
                    fontFamily: 'Space Grotesk, sans-serif',
                    minWidth: '22px',
                    opacity: 0.75,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
