import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clubs', href: '#extracurriculars' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
      background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,110,180,0.12)' : 'none',
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '68px',
      }}>
        {/* Logo — no period */}
        <a href="#about" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Syne, Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: '1.6rem',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #FF6EB4 0%, #C084FC 50%, #4DC9F6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
          }}>
            alvin
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '0.1rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                color: '#374151',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: '10px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FF6EB4'
                e.currentTarget.style.background = 'rgba(255,110,180,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#374151'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'linear-gradient(135deg, #FF6EB4, #C084FC)',
            border: 'none',
            borderRadius: '10px',
            padding: '8px 12px',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: 1,
          }}
          className="hamburger"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,110,180,0.1)',
          padding: '1rem 2rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.4rem',
          animation: 'fadeInDown 0.2s ease',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                color: '#111827',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '12px',
                background: 'rgba(255,110,180,0.05)',
                border: '1px solid rgba(255,110,180,0.1)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
