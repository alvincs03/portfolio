import { useScrollReveal } from '../hooks/useScrollReveal'

const clubs = [
  {
    name: 'Fullstack @ Brown',
    role: 'Fullstack Software Engineer',
    dates: 'Aug 2025 – Present',
    grad: 'linear-gradient(135deg, #4DC9F6 0%, #0EA5E9 100%)',
    shadowColor: 'rgba(77,201,246,0.2)',
    logo: '/fullstack.png',
    description: "Brown's top software engineering club. Ships production apps for clients across campus through Agile sprints and code reviews.",
    tags: ['React', 'Node.js', 'Agile', 'CI/CD'],
  },
  {
    name: 'FinTech @ Brown',
    role: 'Research Analyst',
    dates: 'Fall 2024 – Present',
    grad: 'linear-gradient(135deg, #C084FC 0%, #9333EA 100%)',
    shadowColor: 'rgba(192,132,252,0.2)',
    logo: '/fintech.png',
    description: 'Analyze companies in the financial technology sector, create detailed reports on market trends, and present findings to club members and industry professionals.',
    tags: ['Finance', 'Stocks', 'Data Analysis'],
  },
  {
    name: 'Tempo Performance Co.',
    role: 'Director',
    dates: 'Fall 2024 – Present',
    grad: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    shadowColor: 'rgba(251,191,36,0.2)',
    logo: '/tempologo.png',
    description: 'Weekly dance team at Brown. Lead rehearsals, choreograph routines, and organize performances for campus events.',
    tags: ['Dance', 'Leadership', 'Teamwork'],
  }
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
        className="hover-scale"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.9)',
          borderRadius: '20px',
          boxShadow: `0 6px 30px ${club.shadowColor}`,
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Gradient top bar */}
        <div style={{ height: '4px', background: club.grad }} />

        {/* Header */}
        <div style={{ padding: '1.5rem 1.5rem 0' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 4px 14px ${club.shadowColor}`,
              flexShrink: 0,
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
              padding: '6px',
            }}>
              <img src={club.logo} alt={club.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1rem',
                letterSpacing: '-0.3px', color: '#111827',
                lineHeight: 1.2, marginBottom: '2px',
              }}>
                {club.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 500 }}>
                {club.dates}
              </div>
            </div>
          </div>

          <span style={{
            display: 'inline-block',
            fontSize: '0.72rem', fontWeight: 600,
            padding: '3px 12px', borderRadius: '100px',
            background: club.grad, color: '#fff',
            marginBottom: '1rem',
            boxShadow: `0 2px 8px ${club.shadowColor}`,
          }}>
            {club.role}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '0 1.5rem 1.5rem', flex: 1 }}>
          <p style={{
            fontSize: '0.875rem', fontWeight: 400,
            color: '#4B5563', lineHeight: 1.7,
            marginBottom: '1.25rem',
          }}>
            {club.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {club.tags.map(t => (
              <span key={t} style={{
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '8px',
                padding: '3px 10px',
                fontSize: '0.72rem', fontWeight: 600, color: '#6B7280',
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
      background: 'linear-gradient(180deg, #fff0f8 0%, #faf5ff 50%, #f0fdf4 100%)',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: '#16A34A', marginBottom: '12px',
            textShadow: '0 1px 3px rgba(22,163,74,0.2)',
          }}>
            — Campus Life —
          </span>
          <h2 style={{
            fontFamily: 'Syne, Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px', color: '#111827',
            textShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            Extracurriculars
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {clubs.map((club, i) => (
            <ClubCard key={i} club={club} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
