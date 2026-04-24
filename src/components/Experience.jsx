import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    company: 'Brown University Levari Lab',
    role: 'Research Assistant',
    location: 'Providence, RI',
    dates: 'Jan 2026 – Present',
    grad: 'linear-gradient(135deg, #C084FC 0%, #9333EA 100%)',
    shadowColor: 'rgba(192,132,252,0.25)',
    bgColor: 'rgba(250,245,255,0.9)',
    icon: null, iconEmoji: '🔬',
    bullets: [
      'Engineered 7 Python behavioral experiment games for Dr. David Levari\'s psychology lab, replacing physical experiments and reducing data collection time by 63%',
      'Architected an end-to-end data pipeline spanning event logging, validation, cleaning, and feature engineering across 22 sessions and 3,300+ datapoints',
    ],
    tags: ['Python', 'Data Pipelines', 'Behavioral Research', 'PostgreSQL'],
  },
  {
    company: 'Fullstack at Brown',
    role: 'Fullstack Software Engineer',
    location: 'Providence, RI',
    dates: 'Aug 2025 – Present',
    grad: 'linear-gradient(135deg, #4DC9F6 0%, #0EA5E9 100%)',
    shadowColor: 'rgba(77,201,246,0.25)',
    bgColor: 'rgba(240,251,255,0.9)',
    icon: '/fullstack.png', iconEmoji: null,
    bullets: [
      'Developed 5 production pages for Brown\'s Graduate Engineering Council, serving 300+ graduate users and accelerating manual deploys by 67% through a CI/CD pipeline',
      'Built a dual-layer caching system combining Redis server-side caching with CDN edge caching, scaling to 10,000+ page visits with significantly reduced latency and server load',
      'Collaborated with engineering team through Agile/Scrum workflows across sprint planning and code reviews, shipping account authentication, and cutting integration bugs by 40%',
    ],
    tags: ['React', 'Node.js', 'Redis', 'CDN', 'PostgreSQL', 'CI/CD'],
  },
  {
    company: 'Beats By Dre',
    role: 'Software Engineering Extern',
    location: 'Chicago, IL',
    dates: 'May 2025 – Aug 2025',
    grad: 'linear-gradient(135deg, #FF6EB4 0%, #E91E8C 100%)',
    shadowColor: 'rgba(255,110,180,0.25)',
    bgColor: 'rgba(255,240,248,0.9)',
    icon: '/beats-logo.png', iconEmoji: null,
    bullets: [
      'Built and automated a Python pipeline processing 2,000+ consumer reviews with NLP analysis, achieving 98% sentiment accuracy and saving 40+ hours of manual work per cycle',
      'Designed a Tableau/Plotly dashboard translating raw sentiment data into an interpretable scoring system, enabling non-technical stakeholders to independently action consumer insights',
    ],
    tags: ['Python', 'NLP', 'Tableau', 'Plotly', 'Automation'],
  },
]

function ExperienceCard({ exp, delay }) {
  const [open, setOpen] = useState(true)
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
          background: exp.bgColor,
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.9)',
          borderRadius: '20px',
          boxShadow: `0 8px 32px ${exp.shadowColor}, 0 1px 0 rgba(255,255,255,0.8) inset`,
          overflow: 'hidden',
        }}
      >
        {/* Gradient top bar */}
        <div style={{ height: '4px', background: exp.grad }} />

        {/* Header */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.75rem',
            cursor: 'pointer',
            borderBottom: open ? '1px solid rgba(0,0,0,0.06)' : 'none',
          }}
          onClick={() => setOpen(!open)}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: exp.icon ? '#fff' : exp.grad,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: `0 4px 14px ${exp.shadowColor}`,
              flexShrink: 0,
              overflow: 'hidden',
              border: exp.icon ? '1px solid rgba(0,0,0,0.08)' : 'none',
              padding: exp.icon ? '6px' : '0',
            }}>
              {exp.icon
                ? <img src={exp.icon} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                : exp.iconEmoji
              }
            </div>
            <div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1.1rem',
                letterSpacing: '-0.3px', color: '#111827',
              }}>
                {exp.company}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#6B7280' }}>
                {exp.role} · {exp.location}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              fontSize: '0.78rem', fontWeight: 600, color: '#6B7280',
              background: 'rgba(0,0,0,0.05)',
              padding: '4px 12px', borderRadius: '100px',
            }}>
              {exp.dates}
            </span>
            <div style={{
              width: '28px', height: '28px', borderRadius: '8px',
              background: `${exp.grad}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '0.7rem',
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.25s ease',
              flexShrink: 0,
            }}>
              ▼
            </div>
          </div>
        </div>

        {/* Expandable body */}
        <div style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}>
          <div style={{ padding: '1.5rem 1.75rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.25rem' }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '10px',
                  fontSize: '0.875rem', fontWeight: 400, color: '#374151', lineHeight: 1.7,
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: exp.grad,
                    flexShrink: 0, marginTop: '8px',
                  }} />
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.75rem', fontWeight: 600,
                  padding: '4px 12px', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  color: '#374151',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="experience" style={{
      background: 'linear-gradient(180deg, #f0fbff 0%, #fafafa 100%)',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(77,201,246,0.07) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: '#0EA5E9', marginBottom: '12px',
            textShadow: '0 1px 3px rgba(14,165,233,0.2)',
          }}>
            — Work History —
          </span>
          <h2 style={{
            fontFamily: 'Syne, Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px', color: '#111827',
            textShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            Experience
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginTop: '8px' }}>
            Click any card to collapse or expand details
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
