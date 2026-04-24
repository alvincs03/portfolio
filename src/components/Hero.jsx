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
      paddingTop: '68px',
    }}>
      {/* Animated gradient background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(-45deg, #ffecd9, #ffd6e7, #d6eeff, #e8d6ff, #d6ffe8, #ffd6e7)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 12s ease infinite',
      }} />

      {/* Soft halftone overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Floating orbs */}
      {[
        { top: '10%', left: '8%',  size: 220, color: 'rgba(255,110,180,0.18)', delay: '0s' },
        { top: '60%', right: '6%', size: 280, color: 'rgba(77,201,246,0.18)',  delay: '2s' },
        { top: '30%', right: '18%',size: 160, color: 'rgba(192,132,252,0.18)',delay: '4s' },
        { bottom: '15%', left: '20%', size: 190, color: 'rgba(74,222,128,0.15)', delay: '1s' },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: orb.size, height: orb.size,
          borderRadius: '50%',
          background: orb.color,
          filter: 'blur(40px)',
          animation: `float 8s ease-in-out infinite`,
          animationDelay: orb.delay,
          top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom,
        }} />
      ))}

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '2rem 2rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative', zIndex: 1,
      }} className="two-col">

        {/* Left: Text content */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,110,180,0.25)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 12px rgba(255,110,180,0.12)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#555',
            letterSpacing: '0.5px',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #4ADE80, #22C55E)',
              boxShadow: '0 0 0 3px rgba(74,222,128,0.2)',
              animation: 'pulse-ring 1.5s ease-out infinite',
            }} />
            Available for internships · Summer 2026
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'Syne, Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: '1rem',
            color: '#111827',
            textShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6EB4 0%, #C084FC 50%, #4DC9F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(255,110,180,0.45))',
            }}>
              Alvin
            </span>
            <br />
            <span style={{ color: '#111827' }}>Chen.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#6B7280',
            letterSpacing: '-0.2px',
            marginBottom: '1.5rem',
          }}>
            CS & Applied Math @ Brown · Software Engineer 
          </p>

          <p style={{
            fontSize: '1rem',
            fontWeight: 400,
            color: '#4B5563',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: '460px',
          }}>
            I design and ship full-stack systems at the intersection of AI, data, and real-world engineering


          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="#projects" style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600, fontSize: '0.95rem',
              padding: '13px 28px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #FF6EB4 0%, #C084FC 100%)',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(255,110,180,0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,110,180,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,110,180,0.35)'
            }}
            >
              View Projects →
            </a>
            <a href="#experience" style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600, fontSize: '0.95rem',
              padding: '13px 28px', borderRadius: '14px',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              color: '#111827',
              textDecoration: 'none',
              border: '1.5px solid rgba(0,0,0,0.1)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.95)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.background = 'rgba(255,255,255,0.7)'
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
            }}
            >
              Experience →
            </a>
          </div>

          {/* Social chips */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {[
              { label: '🐙 GitHub', href: 'https://github.com/alvincs03' },
              { label: '💼 LinkedIn', href: 'https://linkedin.com/in/alv1nchen' },
              { label: '✉️ Email', href: 'mailto:alvin_chen@brown.edu' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                fontWeight: 500, fontSize: '0.8rem',
                padding: '6px 14px',
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(8px)',
                color: '#374151',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
              }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Profile card */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
        }}>
          <div style={{ position: 'relative' }}>
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: '-20px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF6EB4, #C084FC, #4DC9F6)',
              filter: 'blur(30px)',
              opacity: 0.35,
              animation: 'float 6s ease-in-out infinite',
            }} />

            {/* Card */}
            <div style={{
              width: 'clamp(280px, 38vw, 400px)',
              background: 'rgba(255,255,255,0.70)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255,255,255,0.9)',
              borderRadius: '28px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,110,180,0.1)',
              padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              position: 'relative', overflow: 'hidden',
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '0.5s',
            }}>
              {/* Gradient bar top */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #FF6EB4, #C084FC, #4DC9F6, #4ADE80)',
              }} />

              {/* Headshot circle */}
              <div style={{
                width: '160px', height: '160px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6EB4 0%, #C084FC 50%, #4DC9F6 100%)',
                padding: '3px',
                marginBottom: '1.25rem',
                boxShadow: '0 8px 32px rgba(255,110,180,0.35)',
                flexShrink: 0,
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}headshot.jpg`}
                  alt="Alvin Chen"
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>

              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1.4rem',
                color: '#111827', marginBottom: '4px',
                letterSpacing: '-0.5px',
              }}>
                Alvin H. Chen
              </div>

              <div style={{
                fontSize: '0.85rem', fontWeight: 500, color: '#6B7280',
                marginBottom: '1.5rem',
              }}>
                Brown University · Class of 2028
              </div>

              {/* Stat pills */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '0.6rem', width: '100%',
              }}>
                {[
                  { val: '3.82', label: 'GPA', color: '#FF6EB4' },
                  { val: 'CS + AM', label: 'Major', color: '#C084FC' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: `1px solid ${stat.color}33`,
                    borderRadius: '12px',
                    padding: '10px 12px',
                    textAlign: 'center',
                    boxShadow: `0 2px 8px ${stat.color}15`,
                  }}>
                    <div style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700, fontSize: '1.1rem',
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}bb)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {stat.val}
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 500, color: '#9CA3AF' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: mounted ? 0.6 : 0,
        transition: 'opacity 1s ease 1s',
        animation: mounted ? 'float 2.5s ease-in-out infinite' : 'none',
      }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', color: '#9CA3AF', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: '24px', height: '40px',
          border: '2px solid rgba(0,0,0,0.15)',
          borderRadius: '12px',
          display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <div style={{
            width: '3px', height: '8px',
            background: 'linear-gradient(180deg, #FF6EB4, transparent)',
            borderRadius: '2px',
            animation: 'fadeInDown 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
