import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    company: 'Brown University Levari Lab',
    role: 'Research Assistant',
    location: 'Providence, RI',
    dates: 'Jan 2026 – Present',
    accentColor: '#f472b6',
    icon: null,
    iconEmoji: '🔬',
    bullets: [
      "Engineered 7 Python behavioral experiment games for Dr. David Levari's psychology lab, replacing physical experiments and reducing data collection time by 63%",
      'Architected an end-to-end data pipeline spanning event logging, validation, cleaning, and feature engineering across 22 sessions and 3,300+ datapoints',
    ],
    tags: ['Python', 'Data Pipelines', 'Behavioral Research', 'PostgreSQL'],
  },
  {
    company: 'Fullstack at Brown',
    role: 'Fullstack Software Engineer',
    location: 'Providence, RI',
    dates: 'Aug 2025 – Present',
    accentColor: '#22d3ee',
    icon: `${import.meta.env.BASE_URL}fullstack.png`,
    iconEmoji: null,
    bullets: [
      "Developed 5 production pages for Brown's Graduate Engineering Council, serving 300+ graduate users and accelerating manual deploys by 67% through a CI/CD pipeline",
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
    accentColor: '#f472b6',
    icon: `${import.meta.env.BASE_URL}beats-logo.png`,
    iconEmoji: null,
    bullets: [
      'Built and automated a Python pipeline processing 2,000+ consumer reviews with NLP analysis, achieving 98% sentiment accuracy and saving 40+ hours of manual work per cycle',
      'Designed a Tableau/Plotly dashboard translating raw sentiment data into an interpretable scoring system, enabling non-technical stakeholders to independently action consumer insights',
    ],
    tags: ['Python', 'NLP', 'Tableau', 'Plotly', 'Automation'],
  },
]

function ExperienceCard({ exp, delay }) {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div style={{
        background: '#0e1628',
        border: `1px solid ${open
          ? (exp.accentColor === '#22d3ee' ? 'rgba(34,211,238,0.4)' : 'rgba(244,114,182,0.4)')
          : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '18px',
        overflow: 'hidden',
        transition: 'border-color 250ms cubic-bezier(0.23,1,0.32,1)',
      }}>
        {/* Header row */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.75rem',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(!open)}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: exp.icon ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem',
              flexShrink: 0,
              overflow: 'hidden',
              border: `1px solid ${exp.accentColor === '#22d3ee'
                ? 'rgba(34,211,238,0.25)'
                : 'rgba(244,114,182,0.25)'}`,
              padding: exp.icon ? '6px' : '0',
            }}>
              {exp.icon
                ? <img src={exp.icon} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                : exp.iconEmoji}
            </div>
            <div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1.05rem',
                color: '#f1f5f9',
                letterSpacing: '-0.2px',
              }}>
                {exp.company}
              </div>
              <div style={{ fontSize: '0.83rem', fontWeight: 500, color: exp.accentColor }}>
                {exp.role} · {exp.location}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              fontSize: '0.75rem', fontWeight: 500, color: '#475569',
              fontFamily: 'Space Grotesk, sans-serif',
            }}>
              {exp.dates}
            </span>
            <div style={{
              width: '26px', height: '26px', borderRadius: '7px',
              background: exp.accentColor === '#22d3ee'
                ? 'rgba(34,211,238,0.12)'
                : 'rgba(244,114,182,0.12)',
              border: `1px solid ${exp.accentColor === '#22d3ee'
                ? 'rgba(34,211,238,0.25)'
                : 'rgba(244,114,182,0.25)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: exp.accentColor, fontSize: '0.6rem',
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 220ms cubic-bezier(0.23,1,0.32,1)',
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
          transition: 'max-height 0.35s cubic-bezier(0.23,1,0.32,1)',
        }}>
          <div style={{
            padding: '0 1.75rem 1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <ul style={{
              listStyle: 'none',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              marginTop: '1.25rem', marginBottom: '1.25rem',
            }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '10px',
                  fontSize: '0.875rem', fontWeight: 400,
                  color: '#94a3b8', lineHeight: 1.7,
                }}>
                  <span style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: exp.accentColor,
                    flexShrink: 0, marginTop: '10px',
                  }} />
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.72rem', fontWeight: 600,
                  padding: '3px 10px', borderRadius: '6px',
                  background: exp.accentColor === '#22d3ee'
                    ? 'rgba(34,211,238,0.08)'
                    : 'rgba(244,114,182,0.08)',
                  border: `1px solid ${exp.accentColor === '#22d3ee'
                    ? 'rgba(34,211,238,0.22)'
                    : 'rgba(244,114,182,0.22)'}`,
                  color: exp.accentColor,
                  fontFamily: 'Space Grotesk, sans-serif',
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
      background: '#080d1a',
      padding: '7rem 2rem',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">Experience</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-1.5px',
            color: '#f1f5f9',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            Where I've worked.
          </h2>
          <p style={{ color: '#475569', fontSize: '0.85rem' }}>
            Click any card to expand
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
