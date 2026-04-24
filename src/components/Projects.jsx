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
    accentColor: '#FF6EB4',
    darkColor: '#E91E8C',
    grad: 'linear-gradient(135deg, #FF6EB4 0%, #C084FC 100%)',
    bullets: [
      'AI code review platform adopted by 60+ students, scoring 0–100 on production readiness across 7 languages with GitHub OAuth integration',
      'Cut cached request latency 30% via 3-tier caching: PostgreSQL persistence, SHA-256 hashing, in-memory validation',
    ],
    stats: [
      { val: '60+', label: 'Users' },
      { val: '7', label: 'Languages' },
      { val: '30%', label: 'Faster' },
    ],
  },
  {
    num: '02',
    title: 'iCoN Fraud Detection',
    subtitle: 'ML Fraud Classifier System',
    date: 'Jan 2026',
    url: 'https://icon-fraud-detector-ml-system-762r.vercel.app/',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'Next.js', 'PostgreSQL'],
    accentColor: '#4DC9F6',
    darkColor: '#0EA5E9',
    grad: 'linear-gradient(135deg, #4DC9F6 0%, #4ADE80 100%)',
    bullets: [
      'Fraud classifier trained on 50K+ transactions: 95% accuracy, 94% precision, 92% recall via velocity, recency & merchant entropy features',
      'FastAPI scoring endpoint with sub-second latency, secured via JWT + Google OAuth',
    ],
    stats: [
      { val: '95%', label: 'Accuracy' },
      { val: '50K+', label: 'Transactions' },
      { val: '<1s', label: 'Latency' },
    ],
  },
]

function BrowserPreview({ url, title, accentColor, grad }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div style={{
      borderRadius: '14px',
      overflow: 'hidden',
      border: '1.5px solid rgba(0,0,0,0.1)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
      background: '#1a1a2e',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: '#1a1a2e',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
          {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
            <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.08)',
          borderRadius: '6px', padding: '3px 10px',
          fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)',
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
            fontSize: '0.65rem', fontWeight: 700, color: accentColor,
            textDecoration: 'none', flexShrink: 0,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px',
          }}
        >
          ↗ Open
        </a>
      </div>

      {/* Iframe container */}
      <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#f5f5f5' }}>
        {!failed ? (
          <>
            <iframe
              src={url}
              title={title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
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
            {/* Hover overlay */}
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'transparent',
                transition: 'background 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.45)'
                e.currentTarget.querySelector('span').style.opacity = '1'
                e.currentTarget.querySelector('span').style.transform = 'translateY(0)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.querySelector('span').style.opacity = '0'
                e.currentTarget.querySelector('span').style.transform = 'translateY(8px)'
              }}
            >
              <span style={{
                opacity: 0,
                transform: 'translateY(8px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                background: 'rgba(255,255,255,0.95)',
                color: '#111827',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '0.85rem',
                padding: '10px 20px', borderRadius: '100px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                letterSpacing: '-0.2px',
              }}>
                Visit Live Site →
              </span>
            </a>
          </>
        ) : (
          /* Fallback if iframe blocked */
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              height: '100%',
              background: `linear-gradient(135deg, ${accentColor}11, ${accentColor}22)`,
              textDecoration: 'none', gap: '12px',
            }}
          >
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: grad,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.6rem',
              boxShadow: `0 8px 24px ${accentColor}44`,
            }}>
              🔗
            </div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700, fontSize: '0.9rem', color: accentColor,
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
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className="hover-scale project-inner"
        style={{
          background: '#fff',
          border: '1.5px solid rgba(0,0,0,0.07)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: `0 8px 40px ${project.accentColor}18, 0 1px 0 rgba(255,255,255,0.9) inset`,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* Left: preview */}
        <div style={{
          padding: '1.5rem',
          borderRight: '1.5px solid rgba(0,0,0,0.06)',
          background: 'linear-gradient(160deg, #fafafa 0%, #f5f5f5 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {/* Number + label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'Syne, Space Grotesk, sans-serif',
              fontWeight: 800, fontSize: '3.5rem',
              lineHeight: 1,
              letterSpacing: '-3px',
              background: project.grad,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.35,
            }}>
              {project.num}
            </span>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600, fontSize: '0.78rem',
                color: project.accentColor,
                textDecoration: 'none',
                background: `${project.accentColor}15`,
                border: `1.5px solid ${project.accentColor}33`,
                borderRadius: '100px',
                padding: '4px 14px',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = `${project.accentColor}28`}
              onMouseLeave={e => e.currentTarget.style.background = `${project.accentColor}15`}
            >
              ↗ Live
            </a>
          </div>

          <BrowserPreview
            url={project.url}
            title={project.title}
            accentColor={project.accentColor}
            grad={project.grad}
          />
        </div>

        {/* Right: info */}
        <div style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{
              display: 'inline-block',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700, fontSize: '0.65rem',
              letterSpacing: '2.5px', textTransform: 'uppercase',
              color: project.accentColor,
              marginBottom: '6px',
            }}>
              {project.date} · {project.subtitle}
            </div>
            <h3 style={{
              fontFamily: 'Syne, Space Grotesk, sans-serif',
              fontWeight: 800, fontSize: '1.6rem',
              letterSpacing: '-0.8px', color: '#111827',
              lineHeight: 1.1, marginBottom: '0',
            }}>
              {project.title}
            </h3>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '0',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1.5px solid rgba(0,0,0,0.07)',
            marginBottom: '1.25rem',
          }}>
            {project.stats.map((s, i) => (
              <div key={i} style={{
                flex: 1, padding: '10px 6px',
                textAlign: 'center',
                background: i % 2 === 0 ? '#fafafa' : '#fff',
                borderRight: i < project.stats.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Syne, Space Grotesk, sans-serif',
                  fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.5px',
                  background: project.grad,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {s.val}
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.3px' }}>
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
                fontSize: '0.825rem', fontWeight: 400, color: '#4B5563', lineHeight: 1.65,
              }}>
                <div style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: project.grad,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px', fontSize: '0.55rem', color: '#fff', fontWeight: 800,
                }}>
                  {i + 1}
                </div>
                {b}
              </div>
            ))}
          </div>

          {/* Stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {project.stack.map(t => (
              <span key={t} style={{
                background: `${project.accentColor}0e`,
                border: `1px solid ${project.accentColor}28`,
                borderRadius: '6px',
                padding: '3px 9px',
                fontSize: '0.7rem', fontWeight: 600,
                color: project.accentColor,
                letterSpacing: '0.2px',
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
      background: '#fafafa',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid paper background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          {/* Asymmetric heading */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{
                display: 'block',
                fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '3px', textTransform: 'uppercase',
                color: '#9333EA', marginBottom: '8px',
                textShadow: '0 1px 3px rgba(147,51,234,0.2)',
              }}>
                — Selected Work —
              </span>
              <h2 style={{
                fontFamily: 'Syne, Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                letterSpacing: '-1.5px', color: '#111827',
                lineHeight: 1,
                textShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}>
                Projects
              </h2>
            </div>
            <p style={{
              fontSize: '0.875rem', color: '#9CA3AF', fontWeight: 400,
              maxWidth: '280px', textAlign: 'right', lineHeight: 1.6,
            }}>
              Live previews — hover to explore each site
            </p>
          </div>
          {/* Divider */}
          <div style={{
            marginTop: '1.5rem', height: '2px',
            background: 'linear-gradient(90deg, #FF6EB4, #C084FC, #4DC9F6, transparent)',
            borderRadius: '1px',
          }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1.25rem 1.75rem',
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(8px)',
          border: '1.5px dashed rgba(0,0,0,0.1)',
          borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#9CA3AF' }}>
            More projects in progress...
          </span>
          <a
            href="https://github.com/alvincs03"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.8rem', fontWeight: 700, color: '#374151',
              textDecoration: 'none',
              background: 'rgba(0,0,0,0.05)',
              padding: '6px 16px', borderRadius: '100px',
              border: '1px solid rgba(0,0,0,0.08)',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.09)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          >
            🐙 View GitHub →
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
