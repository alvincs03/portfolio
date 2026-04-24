import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    category: 'Languages',
    color: '#FF6EB4',
    grad: 'linear-gradient(135deg, #FF6EB4 0%, #E91E8C 100%)',
    shadowColor: 'rgba(255,110,180,0.2)',
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
    category: 'Frameworks & Libraries',
    color: '#4DC9F6',
    grad: 'linear-gradient(135deg, #4DC9F6 0%, #0EA5E9 100%)',
    shadowColor: 'rgba(77,201,246,0.2)',
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
    color: '#FBBF24',
    grad: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    shadowColor: 'rgba(251,191,36,0.2)',
    skills: [
      { name: 'AWS Lambda',  icon: 'λ' },
      { name: 'AWS ECS',     icon: '📦' },
      { name: 'AWS S3',      icon: '🪣' },
      { name: 'DynamoDB',    icon: '🗃️' },
      { name: 'Vercel',      icon: '▲' },
      { name: 'Supabase',    icon: '⚡' },
      { name: 'Docker',      icon: '🐳' },
      { name: 'Firebase',    icon: '🔥' },
      { name: 'CDN',         icon: '🌏' },
    ],
  },
  {
    category: 'Tools',
    color: '#4ADE80',
    grad: 'linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)',
    shadowColor: 'rgba(74,222,128,0.2)',
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

function SkillCard({ skill, color }) {
  return (
    <div
      className="skill-icon"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
        padding: '12px 6px',
        background: 'rgba(255,255,255,0.9)',
        border: '1.5px solid rgba(255,255,255,0.9)',
        borderRadius: '14px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'
        e.currentTarget.style.boxShadow = `0 10px 28px ${color}40`
        e.currentTarget.style.borderColor = color
        e.currentTarget.style.background = `${color}12`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
      }}
    >
      <div style={{
        width: '42px', height: '42px', borderRadius: '12px',
        background: `${color}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: typeof skill.icon === 'string' && skill.icon.length <= 2 ? '0.9rem' : '1.5rem',
        fontWeight: 800,
        fontFamily: 'Space Grotesk, sans-serif',
        color: typeof skill.icon === 'string' && skill.icon.length <= 2 ? color : undefined,
        transition: 'background 0.2s ease',
      }}>
        {skill.icon}
      </div>
      <span style={{
        fontSize: '0.7rem', fontWeight: 600, color: '#374151',
        textAlign: 'center', lineHeight: 1.3,
        maxWidth: '64px',
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
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255,255,255,0.9)',
        borderRadius: '24px',
        boxShadow: `0 6px 30px ${group.shadowColor}`,
        overflow: 'hidden',
      }}>
        {/* Gradient bar */}
        <div style={{ height: '4px', background: group.grad }} />

        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem 0',
          display: 'flex', alignItems: 'center', gap: '12px',
          marginBottom: '1.25rem',
        }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: group.grad,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 3px 10px ${group.shadowColor}`,
          }}>
            <span style={{ color: '#fff', fontSize: '1rem' }}>
              {group.category === 'Languages' ? '🖥️' :
               group.category === 'Frameworks & Libraries' ? '⚙️' :
               group.category === 'Cloud & DevOps' ? '☁️' : '🛠️'}
            </span>
          </div>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700, fontSize: '1rem',
            letterSpacing: '-0.3px', color: '#111827',
          }}>
            {group.category}
          </h3>
        </div>

        {/* Skill 3×3 grid */}
        <div style={{
          padding: '0 1.25rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
        }}>
          {group.skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} color={group.color} grad={group.grad} />
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
      background: 'linear-gradient(180deg, #f0fdf4 0%, #fafafa 50%, #fff0f8 100%)',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-60px', left: '-60px',
        width: '400px', height: '400px', borderRadius: '50%',
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
            — Tech Stack —
          </span>
          <h2 style={{
            fontFamily: 'Syne, Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px', color: '#111827',
            textShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            Skills
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }} className="skills-2col">
          {skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} delay={`${i * 0.1}s`} />
          ))}
        </div>
        <style>{`
          @media (max-width: 680px) {
            .skills-2col { grid-template-columns: 1fr !important; }
          }
        `}</style>

      </div>
    </section>
  )
}
