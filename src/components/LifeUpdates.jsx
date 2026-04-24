import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ACCENT_GRADS = [
  'linear-gradient(135deg, #C084FC, #9333EA)',
  'linear-gradient(135deg, #4ADE80, #22C55E)',
  'linear-gradient(135deg, #FBBF24, #F59E0B)',
  'linear-gradient(135deg, #FF6EB4, #E91E8C)',
  'linear-gradient(135deg, #4DC9F6, #0EA5E9)',
  'linear-gradient(135deg, #FB923C, #EF4444)',
  'linear-gradient(135deg, #4DC9F6, #4ADE80)',
  'linear-gradient(135deg, #C084FC, #4DC9F6)',
  'linear-gradient(135deg, #FF6EB4, #C084FC)',
]

const posts = [
  { month: 'April',     title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'May',       title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'June',      title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'July',      title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'August',    title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'September', title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'October',   title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'November',  title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
  { month: 'December',  title: 'Coming Soon', summary: 'Monthly recap coming soon. Check back later!', image: null, tags: [] },
]

function PostCard({ post, index }) {
  const [ref, visible] = useScrollReveal()
  const [expanded, setExpanded] = useState(false)
  const grad = ACCENT_GRADS[index % ACCENT_GRADS.length]
  const isEmpty = post.title === 'Coming Soon'

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 0.07}s` }}
    >
      <div
        className={isEmpty ? undefined : 'hover-scale'}
        style={{
          background: '#fff',
          border: '1.5px solid rgba(0,0,0,0.07)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          display: 'flex', flexDirection: 'column',
          height: '100%',
          cursor: isEmpty ? 'default' : 'pointer',
        }}
        onClick={() => !isEmpty && setExpanded(p => !p)}
      >
        {/* Image / placeholder area */}
        <div style={{
          height: '160px', position: 'relative', overflow: 'hidden', flexShrink: 0,
        }}>
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              background: isEmpty ? 'linear-gradient(135deg, #f0f0f0, #e8e8e8)' : grad,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '8px',
            }}>
              {isEmpty ? (
                <>
                  <div style={{ fontSize: '1.8rem', opacity: 0.25 }}>📷</div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#bbb', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Coming soon
                  </span>
                </>
              ) : (
                <div style={{
                  fontFamily: 'Syne, Space Grotesk, sans-serif',
                  fontWeight: 800, fontSize: '2.5rem',
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '-2px',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              )}
            </div>
          )}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: grad }} />
        </div>

        {/* Content */}
        <div style={{ padding: '1rem 1.1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1.5px',
            textTransform: 'uppercase', marginBottom: '4px',
            background: grad,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.08))',
          }}>
            {post.month} 2026
          </div>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700, fontSize: '0.95rem',
            letterSpacing: '-0.3px', color: '#111827',
            marginBottom: '0.4rem', lineHeight: 1.3,
          }}>
            {post.title}
          </h3>
          {!isEmpty && post.summary && (
            <p style={{
              fontSize: '0.78rem', color: '#6B7280', lineHeight: 1.65,
              display: expanded ? 'block' : '-webkit-box',
              WebkitLineClamp: expanded ? 'unset' : 3,
              WebkitBoxOrient: 'vertical',
              overflow: expanded ? 'visible' : 'hidden',
              marginBottom: post.tags?.length ? '0.6rem' : 0,
              flex: 1,
            }}>
              {post.summary}
            </p>
          )}
          {post.tags?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: 'auto', paddingTop: '0.5rem' }}>
              {post.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.62rem', fontWeight: 600,
                  padding: '2px 8px', borderRadius: '100px',
                  background: 'rgba(0,0,0,0.05)',
                  color: '#6B7280', border: '1px solid rgba(0,0,0,0.07)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          )}
          {!isEmpty && (
            <button
              onClick={e => { e.stopPropagation(); setExpanded(p => !p) }}
              style={{
                marginTop: '0.5rem', background: 'none', border: 'none',
                padding: 0, cursor: 'pointer',
                fontSize: '0.7rem', fontWeight: 700,
                color: '#9CA3AF', textAlign: 'left',
              }}
            >
              {expanded ? '↑ Show less' : '↓ Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function LifeUpdates() {
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="life" style={{
      background: 'linear-gradient(180deg, #fafafa 0%, #f0fbff 50%, #faf5ff 100%)',
      padding: '7rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          ref={titleRef}
          className={`reveal${titleVisible ? ' visible' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{
                display: 'block',
                fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '3px', textTransform: 'uppercase',
                color: '#9333EA', marginBottom: '8px',
                textShadow: '0 1px 3px rgba(147,51,234,0.2)',
              }}>
                — Monthly Updates —
              </span>
              <h2 style={{
                fontFamily: 'Syne, Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                letterSpacing: '-1.5px', color: '#111827',
                lineHeight: 1,
                textShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}>
                How My Life Is Going
              </h2>
            </div>

            {/* Year tab */}
            <div style={{
              fontFamily: 'Syne, Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-3px',
              background: 'linear-gradient(135deg, #C084FC 0%, #4DC9F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(192,132,252,0.35))',
              lineHeight: 1,
            }}>
              2026
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem', height: '2px',
            background: 'linear-gradient(90deg, #C084FC, #4DC9F6, #4ADE80, transparent)',
            borderRadius: '1px',
          }} />
        </div>

        {/* 3×3 grid — 9 months (April–December) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }} className="life-grid">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} index={i} />
          ))}
        </div>

        <p style={{
          textAlign: 'center', marginTop: '2rem',
          fontSize: '0.78rem', color: '#C4B5D0', fontWeight: 500,
          letterSpacing: '0.3px',
        }}>
          Updated monthly throughout 2026
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .life-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .life-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
