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

const courseColors = ['#FF6EB4', '#C084FC', '#4DC9F6', '#4ADE80', '#FBBF24', '#FB923C', '#FF6EB4']

export default function Education() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [leftRef, leftVisible] = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()

  return (
    <section id="education" style={{
      background: 'linear-gradient(180deg, #fafafa 0%, #fff0f8 50%, #f0fbff 100%)',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,110,180,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: '#E91E8C', marginBottom: '12px',
            textShadow: '0 1px 3px rgba(233,30,140,0.2)',
          }}>
            — Background —
          </span>
          <h2 style={{
            fontFamily: 'Syne, Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px',
            color: '#111827',
            textShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            Education
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start',
        }} className="two-col">
          {/* Left: University card */}
          <div
            ref={leftRef}
            className={`hover-scale reveal-left${leftVisible ? ' visible' : ''}`}
            style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,110,180,0.15)',
              borderRadius: '24px',
              boxShadow: '0 8px 40px rgba(255,110,180,0.10)',
              overflow: 'hidden',
            }}
          >
            {/* Gradient top bar */}
            <div style={{
              height: '5px',
              background: 'linear-gradient(90deg, #FF6EB4, #C084FC, #4DC9F6)',
            }} />

            <div style={{ padding: '2rem' }}>
              {/* Brown logo */}
              <div style={{
                width: '60px', height: '60px', borderRadius: '16px',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
                border: '1.5px solid rgba(255,110,180,0.15)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                padding: '6px',
              }}>
                <img src="/brownlogo.png" alt="Brown University" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '-0.5px',
                color: '#111827',
                marginBottom: '4px',
              }}>
                Brown University
              </div>

              <div style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 500, marginBottom: '1.25rem' }}>
                Providence, Rhode Island
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #fff0f8, #fce7f3)',
                border: '1px solid rgba(255,110,180,0.2)',
                borderRadius: '14px',
                padding: '12px 16px',
                marginBottom: '1.25rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#374151',
              }}>
                B.S. in Computer Science & Applied Mathematics
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Expected May 2028', color: '#FF6EB4' },
                  { label: 'GPA: 3.82 / 4.0', color: '#C084FC' },
                ].map(badge => (
                  <span key={badge.label} style={{
                    background: `${badge.color}18`,
                    border: `1.5px solid ${badge.color}44`,
                    borderRadius: '100px',
                    padding: '5px 14px',
                    fontWeight: 600, fontSize: '0.8rem',
                    color: badge.color,
                  }}>
                    {badge.label}
                  </span>
                ))}
              </div>

              {/* Decorative gradient bar */}
              <div style={{
                height: '4px', borderRadius: '2px',
                background: 'linear-gradient(90deg, #FF6EB4 0%, #C084FC 50%, #4DC9F6 100%)',
              }} />
            </div>
          </div>

          {/* Right: Coursework */}
          <div
            ref={rightRef}
            className={`reveal-right${rightVisible ? ' visible' : ''}`}
            style={{
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(77,201,246,0.15)',
              borderRadius: '24px',
              boxShadow: '0 8px 40px rgba(77,201,246,0.10)',
              overflow: 'hidden',
            }}
          >
            <div style={{
              height: '5px',
              background: 'linear-gradient(90deg, #4DC9F6, #4ADE80)',
            }} />

            <div style={{ padding: '2rem' }}>
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '-0.3px',
                marginBottom: '1.25rem',
                color: '#111827',
              }}>
                Relevant Coursework
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {courses.map((course, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      background: 'rgba(255,255,255,0.9)',
                      border: `1px solid ${courseColors[i]}22`,
                      borderLeft: `3px solid ${courseColors[i]}`,
                      borderRadius: '12px',
                      padding: '10px 14px',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#374151',
                      cursor: 'default',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.02) translateX(4px)'
                      e.currentTarget.style.boxShadow = `0 4px 16px ${courseColors[i]}20`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <span style={{
                      width: '26px', height: '26px', borderRadius: '8px',
                      background: `${courseColors[i]}18`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700, fontSize: '0.7rem',
                      color: courseColors[i],
                      flexShrink: 0,
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
      </div>
    </section>
  )
}
