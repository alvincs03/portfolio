import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    num: '01',
    title: 'CodeLens',
    subtitle: 'AI Code Review Platform',
    date: 'Mar 2026',
    url: 'https://code-lens-lake.vercel.app/',
    stack: ['Python', 'Flask', 'React', 'PostgreSQL', 'Anthropic API', 'GitHub OAuth 2.0'],
    accentColor: '#22d3ee',
    bullets: [
      'AI code review platform adopted by 60+ students, scoring 0–100 on production readiness across 7 languages with GitHub OAuth integration',
      'Cut cached request latency 30% via 3-tier caching: PostgreSQL persistence, SHA-256 hashing, in-memory validation',
    ],
    stats: [
      { val: '60+',  label: 'Users' },
      { val: '7',    label: 'Languages' },
      { val: '30%',  label: 'Faster' },
    ],
  },
  {
    num: '02',
    title: 'iCoN Fraud Detection',
    subtitle: 'ML Fraud Classifier System',
    date: 'Jan 2026',
    url: 'https://icon-fraud-detector-ml-system-762r.vercel.app/',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'Next.js', 'PostgreSQL'],
    accentColor: '#f472b6',
    bullets: [
      'Fraud classifier trained on 50K+ transactions: 95% accuracy, 94% precision, 92% recall via velocity, recency & merchant entropy features',
      'FastAPI scoring endpoint with sub-second latency, secured via JWT + Google OAuth',
    ],
    stats: [
      { val: '95%',  label: 'Accuracy' },
      { val: '50K+', label: 'Transactions' },
      { val: '<1s',  label: 'Latency' },
    ],
  },
]

function BrowserPreview({ url, title, accentColor }) {
  const [failed, setFailed] = useState(false)

  return (
    <div style={{
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.07)',
      background: '#0a0f1e',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: '#0a0f1e',
        padding: '9px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
          {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
            <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.07)',
          borderRadius: '5px', padding: '3px 9px',
          fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)',
          fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: '0.62rem', fontWeight: 700, color: accentColor,
            textDecoration: 'none', flexShrink: 0,
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          ↗
        </a>
      </div>

      {/* Iframe */}
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        {!failed ? (
          <>
            <iframe
              src={url}
              title={title}
              loading="lazy"
              onError={() => setFailed(true)}
              style={{
                width: '160%',
                height: '160%',
                transform: 'scale(0.625)',
                transformOrigin: 'top left',
                border: 'none',
                display: 'block',
                pointerEvents: 'none',
              }}
            />
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'transparent',
                transition: 'background 220ms ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.5)'
                e.currentTarget.querySelector('span').style.opacity = '1'
                e.currentTarget.querySelector('span').style.transform = 'translateY(0) scale(1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.querySelector('span').style.opacity = '0'
                e.currentTarget.querySelector('span').style.transform = 'translateY(8px) scale(0.96)'
              }}
            >
              <span style={{
                opacity: 0,
                transform: 'translateY(8px) scale(0.96)',
                transition: 'opacity 180ms ease, transform 180ms cubic-bezier(0.23,1,0.32,1)',
                background: 'rgba(255,255,255,0.95)',
                color: '#080d1a',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '0.82rem',
                padding: '9px 18px', borderRadius: '100px',
                letterSpacing: '-0.2px',
              }}>
                Visit Live Site →
              </span>
            </a>
          </>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              height: '100%', gap: '10px',
              background: `${accentColor}08`,
              textDecoration: 'none',
            }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}35`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem',
            }}>
              🔗
            </div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700, fontSize: '0.85rem', color: accentColor,
            }}>
              Visit Live Site →
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="project-inner"
        style={{
          background: '#0e1628',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          transition: 'border-color 220ms ease',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = project.accentColor === '#22d3ee'
          ? 'rgba(34,211,238,0.3)'
          : 'rgba(244,114,182,0.3)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
      >
        {/* Left: preview */}
        <div style={{
          padding: '1.5rem',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          background: '#080d1a',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}>
          {/* Number + live link */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800, fontSize: '2.8rem',
              lineHeight: 1, letterSpacing: '-2px',
              color: project.accentColor,
              opacity: 0.12,
            }}>
              {project.num}
            </span>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="btn-press"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600, fontSize: '0.72rem',
                color: project.accentColor,
                textDecoration: 'none',
                background: project.accentColor === '#22d3ee'
                  ? 'rgba(34,211,238,0.1)'
                  : 'rgba(244,114,182,0.1)',
                border: `1px solid ${project.accentColor === '#22d3ee'
                  ? 'rgba(34,211,238,0.28)'
                  : 'rgba(244,114,182,0.28)'}`,
                borderRadius: '7px',
                padding: '4px 12px',
                transition: 'background 150ms ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = project.accentColor === '#22d3ee'
                ? 'rgba(34,211,238,0.18)'
                : 'rgba(244,114,182,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background = project.accentColor === '#22d3ee'
                ? 'rgba(34,211,238,0.1)'
                : 'rgba(244,114,182,0.1)'}
            >
              ↗ Live
            </a>
          </div>
          <BrowserPreview url={project.url} title={project.title} accentColor={project.accentColor} />
        </div>

        {/* Right: info */}
        <div style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: project.accentColor,
              marginBottom: '5px',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              {project.date} · {project.subtitle}
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800, fontSize: '1.55rem',
              letterSpacing: '-0.5px', color: '#f1f5f9',
              lineHeight: 1.05,
            }}>
              {project.title}
            </h3>
          </div>

          {/* Stats — solid color, no gradient text */}
          <div style={{
            display: 'flex', gap: '1.5rem',
            marginBottom: '1.25rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            {project.stats.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800, fontSize: '1.2rem',
                  letterSpacing: '-0.5px',
                  color: project.accentColor,
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: '0.62rem', fontWeight: 700,
                  color: '#475569', letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: 'auto' }}>
            {project.bullets.map((b, i) => (
              <div key={i} style={{
                display: 'flex', gap: '10px',
                fontSize: '0.825rem', fontWeight: 400, color: '#94a3b8', lineHeight: 1.65,
              }}>
                <div style={{
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: project.accentColor,
                  flexShrink: 0, marginTop: '8px',
                }} />
                {b}
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.35rem',
            marginTop: '1.25rem', paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            {project.stack.map(t => (
              <span key={t} style={{
                background: project.accentColor === '#22d3ee'
                  ? 'rgba(34,211,238,0.07)'
                  : 'rgba(244,114,182,0.07)',
                border: `1px solid ${project.accentColor === '#22d3ee'
                  ? 'rgba(34,211,238,0.22)'
                  : 'rgba(244,114,182,0.22)'}`,
                borderRadius: '6px',
                padding: '3px 9px',
                fontSize: '0.68rem', fontWeight: 600,
                color: project.accentColor,
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

export default function Projects() {
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="projects" style={{
      background: '#0d1529',
      padding: '7rem 2rem',
      position: 'relative',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Projects</span>
              <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                letterSpacing: '-1.5px', color: '#f1f5f9',
                lineHeight: 1,
              }}>
                Selected work.
              </h2>
            </div>
            <p style={{
              fontSize: '0.82rem', color: '#475569', fontWeight: 400,
              maxWidth: '220px', textAlign: 'right', lineHeight: 1.6,
            }}>
              Hover the preview to explore live
            </p>
          </div>
          {/* Aqua-to-pink divider */}
          <div style={{
            marginTop: '1.5rem', height: '1px',
            background: 'linear-gradient(90deg, #22d3ee, #f472b6, transparent)',
          }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        <div style={{
          marginTop: '1.75rem',
          padding: '1.2rem 1.5rem',
          background: 'rgba(255,255,255,0.02)',
          border: '1px dashed rgba(255,255,255,0.08)',
          borderRadius: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 500, color: '#475569' }}>
            More in progress
          </span>
          <a
            href="https://github.com/alvincs03"
            target="_blank"
            rel="noreferrer"
            className="btn-press"
            style={{
              fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8',
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.04)',
              padding: '6px 16px', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'color 150ms ease, border-color 150ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#22d3ee'
              e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            View GitHub →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .project-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
