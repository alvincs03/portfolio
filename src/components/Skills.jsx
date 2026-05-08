import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    category: 'Languages',
    accentColor: '#22d3ee',
    skills: [
      { name: 'Python',     icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'C',          icon: '⚙️' },
      { name: 'Java',       icon: '☕' },
      { name: 'SQL',        icon: '🗄️' },
      { name: 'MATLAB',     icon: '📊' },
      { name: 'HTML/CSS',   icon: '🌐' },
      { name: 'Assembly',   icon: '🔩' },
    ],
  },
  {
    category: 'Frameworks',
    accentColor: '#f472b6',
    skills: [
      { name: 'React',        icon: '⚛️' },
      { name: 'Next.js',      icon: '▲' },
      { name: 'Flask',        icon: '🌶️' },
      { name: 'FastAPI',      icon: '🚀' },
      { name: 'Node.js',      icon: '🟩' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'scikit-learn', icon: '🤖' },
      { name: 'Pandas',       icon: '🐼' },
      { name: 'NumPy',        icon: '🔢' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    accentColor: '#22d3ee',
    skills: [
      { name: 'AWS Lambda', icon: 'λ' },
      { name: 'AWS ECS',    icon: '📦' },
      { name: 'AWS S3',     icon: '🪣' },
      { name: 'DynamoDB',   icon: '🗃️' },
      { name: 'Vercel',     icon: '▲' },
      { name: 'Supabase',   icon: '⚡' },
      { name: 'Docker',     icon: '🐳' },
      { name: 'Firebase',   icon: '🔥' },
      { name: 'CDN',        icon: '🌏' },
    ],
  },
  {
    category: 'Tools',
    accentColor: '#f472b6',
    skills: [
      { name: 'Git',        icon: '🌿' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis',      icon: '🔴' },
      { name: 'Postman',    icon: '📮' },
      { name: 'Tableau',    icon: '📈' },
      { name: 'Plotly',     icon: '📉' },
      { name: 'VS Code',    icon: '💻' },
      { name: 'Linux',      icon: '🐧' },
      { name: 'Bash',       icon: '$_' },
    ],
  },
]

function SkillCard({ skill, accentColor }) {
  return (
    <div
      className="skill-icon"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
        padding: '12px 6px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = accentColor === '#22d3ee'
          ? 'rgba(34,211,238,0.08)'
          : 'rgba(244,114,182,0.08)'
        e.currentTarget.style.borderColor = accentColor === '#22d3ee'
          ? 'rgba(34,211,238,0.3)'
          : 'rgba(244,114,182,0.3)'
        e.currentTarget.style.boxShadow = accentColor === '#22d3ee'
          ? '0 8px 20px rgba(34,211,238,0.12)'
          : '0 8px 20px rgba(244,114,182,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '10px',
        background: accentColor === '#22d3ee'
          ? 'rgba(34,211,238,0.1)'
          : 'rgba(244,114,182,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: typeof skill.icon === 'string' && skill.icon.length <= 2 ? '0.85rem' : '1.3rem',
        fontWeight: 800,
        fontFamily: 'Space Grotesk, sans-serif',
        color: typeof skill.icon === 'string' && skill.icon.length <= 2 ? accentColor : undefined,
      }}>
        {skill.icon}
      </div>
      <span style={{
        fontSize: '0.67rem', fontWeight: 600, color: '#64748b',
        textAlign: 'center', lineHeight: 1.3,
        maxWidth: '62px',
      }}>
        {skill.name}
      </span>
    </div>
  )
}

function SkillGroup({ group, delay }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div style={{
        background: '#0e1628',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
      }}>
        {/* Thin accent bar — aqua or pink, NOT rainbow */}
        <div style={{
          height: '2px',
          background: group.accentColor,
        }} />

        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem 0',
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '1.25rem',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: group.accentColor,
            boxShadow: group.accentColor === '#22d3ee'
              ? '0 0 8px rgba(34,211,238,0.5)'
              : '0 0 8px rgba(244,114,182,0.5)',
          }} />
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700, fontSize: '0.9rem',
            color: '#94a3b8',
            letterSpacing: '-0.2px',
          }}>
            {group.category}
          </h3>
        </div>

        {/* 3×3 grid */}
        <div style={{
          padding: '0 1.25rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.45rem',
        }}>
          {group.skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} accentColor={group.accentColor} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="skills" style={{
      background: '#0d1529',
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
          <span className="section-label">Tech Stack</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px', color: '#f1f5f9',
            lineHeight: 1,
          }}>
            What I build with.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
        }} className="skills-2col">
          {skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .skills-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
