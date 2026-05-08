import { useScrollReveal } from '../hooks/useScrollReveal'

const clubs = [
  {
    name: 'Fullstack @ Brown',
    role: 'Fullstack Software Engineer',
    dates: 'Aug 2025 – Present',
    accentColor: '#22d3ee',
    logo: `${import.meta.env.BASE_URL}fullstack.png`,
    description: "Brown's top software engineering club. Ships production apps for clients across campus through Agile sprints and code reviews.",
    tags: ['React', 'Node.js', 'Agile', 'CI/CD'],
  },
  {
    name: 'FinTech @ Brown',
    role: 'Research Analyst',
    dates: 'Fall 2024 – Present',
    accentColor: '#f472b6',
    logo: `${import.meta.env.BASE_URL}fintech.png`,
    description: 'Analyze companies in the financial technology sector, create detailed reports on market trends, and present findings to club members and industry professionals.',
    tags: ['Finance', 'Stocks', 'Data Analysis'],
  },
  {
    name: 'Tempo Performance Co.',
    role: 'Director',
    dates: 'Fall 2024 – Present',
    accentColor: '#22d3ee',
    logo: `${import.meta.env.BASE_URL}tempologo.png`,
    description: 'Weekly dance team at Brown. Lead rehearsals, choreograph routines, and organize performances for campus events.',
    tags: ['Dance', 'Leadership', 'Teamwork'],
  },
]

function ClubCard({ club, delay }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div
        style={{
          background: '#0e1628',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '18px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color 220ms ease',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = club.accentColor === '#22d3ee'
          ? 'rgba(34,211,238,0.3)'
          : 'rgba(244,114,182,0.3)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
      >
        {/* Header */}
        <div style={{ padding: '1.5rem 1.5rem 0' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              overflow: 'hidden',
              border: `1px solid ${club.accentColor === '#22d3ee'
                ? 'rgba(34,211,238,0.2)'
                : 'rgba(244,114,182,0.2)'}`,
              padding: '6px',
            }}>
              <img src={club.logo} alt={club.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1rem',
                color: '#f1f5f9',
                lineHeight: 1.2, marginBottom: '2px',
              }}>
                {club.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 500 }}>
                {club.dates}
              </div>
            </div>
          </div>

          {/* Role badge — solid border/text, no gradient background */}
          <span style={{
            display: 'inline-block',
            fontSize: '0.7rem', fontWeight: 700,
            padding: '3px 11px',
            borderRadius: '6px',
            background: club.accentColor === '#22d3ee'
              ? 'rgba(34,211,238,0.1)'
              : 'rgba(244,114,182,0.1)',
            border: `1px solid ${club.accentColor === '#22d3ee'
              ? 'rgba(34,211,238,0.28)'
              : 'rgba(244,114,182,0.28)'}`,
            color: club.accentColor,
            marginBottom: '1rem',
            fontFamily: 'Space Grotesk, sans-serif',
          }}>
            {club.role}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '0 1.5rem 1.5rem', flex: 1 }}>
          <p style={{
            fontSize: '0.875rem', fontWeight: 400,
            color: '#64748b', lineHeight: 1.7,
            marginBottom: '1.25rem',
          }}>
            {club.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {club.tags.map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '3px 9px',
                fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8',
                fontFamily: 'Space Grotesk, sans-serif',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Extracurriculars() {
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="extracurriculars" style={{
      background: '#080d1a',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">Campus Life</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px', color: '#f1f5f9',
            lineHeight: 1,
          }}>
            Beyond the code.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {clubs.map((club, i) => (
            <ClubCard key={i} club={club} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
