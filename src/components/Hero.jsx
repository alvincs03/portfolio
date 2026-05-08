import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 50) }, [])

  return (
    <section id="about" style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      background: '#080d1a',
    }}>
      {/* Dot grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none',
      }} />
      {/* Aqua ambient glow */}
      <div style={{
        position: 'absolute', top: '-180px', left: '-100px',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Pink ambient glow */}
      <div style={{
        position: 'absolute', bottom: '-180px', right: '-80px',
        width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '3rem 2rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '5rem',
        alignItems: 'center',
        position: 'relative', zIndex: 1,
      }} className="two-col">

        {/* Left: text */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)',
        }}>
          {/* Status */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '2rem',
            fontSize: '0.8rem', fontWeight: 500, color: '#475569',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#4ade80',
              flexShrink: 0,
              animation: 'pulseGlow 2s ease infinite',
            }} />
            Available for internships · Summer 2026
          </div>

          {/* Name — large editorial heading */}
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3.8rem, 9.5vw, 8rem)',
            lineHeight: 0.88,
            letterSpacing: '-3px',
            marginBottom: '2rem',
          }}>
            <span style={{ display: 'block', color: '#f1f5f9' }}>ALVIN</span>
            <span style={{ display: 'block' }}>
              <span style={{ color: '#22d3ee' }}>CHEN</span>
              <span style={{ color: '#f472b6' }}>.</span>
            </span>
          </h1>

          {/* Role */}
          <p style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#475569',
            marginBottom: '1.25rem',
            fontFamily: 'DM Sans, sans-serif',
          }}>
            CS + Applied Math / Brown University / Class of 2028
          </p>

          <p style={{
            fontSize: '1rem',
            color: '#94a3b8',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: '480px',
          }}>
            I build full-stack products and ML systems, focused on making software that's actually useful.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href="#projects"
              className="btn-press"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '12px 28px',
                borderRadius: '10px',
                background: '#22d3ee',
                color: '#080d1a',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'box-shadow 180ms ease',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(34,211,238,0.35)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              View Projects →
            </a>
            <a
              href="#experience"
              className="btn-press"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '12px 28px',
                borderRadius: '10px',
                background: 'transparent',
                color: '#f1f5f9',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'inline-block',
                transition: 'border-color 150ms ease, background 150ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Experience
            </a>
          </div>

          {/* Social links — plain text, no pill borders */}
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            {[
              { label: 'GitHub',   href: 'https://github.com/alvincs03' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/alv1nchen' },
              { label: 'Email',    href: 'mailto:alvin_chen@brown.edu' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#475569',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo with rings */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.12s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.12s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ position: 'relative', width: '240px', height: '240px' }}>
            {/* Outer pink accent ring */}
            <div style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              border: '1px solid rgba(244,114,182,0.3)',
            }} />
            {/* Inner aqua ring */}
            <div style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '2px solid #22d3ee',
              boxShadow: '0 0 24px rgba(34,211,238,0.2)',
            }} />
            <img
              src={`${import.meta.env.BASE_URL}headshot.jpg`}
              alt="Alvin Chen"
              style={{
                width: '240px', height: '240px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: mounted ? 0.35 : 0,
        transition: 'opacity 0.8s ease 1.4s',
      }}>
        <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.18)' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22d3ee' }} />
      </div>
    </section>
  )
}
