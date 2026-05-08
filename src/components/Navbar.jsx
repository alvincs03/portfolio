import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Education',  href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Clubs',      href: '#extracurriculars' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
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
      background: scrolled ? 'rgba(8,13,26,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '68px',
      }}>
        {/* Logo */}
        <a href="#about" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.5rem',
            letterSpacing: '-1px',
            color: '#22d3ee',
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
                color: '#64748b',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'color 150ms ease, background 150ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#22d3ee'
                e.currentTarget.style.background = 'rgba(34,211,238,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#64748b'
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
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '8px 12px',
            cursor: 'pointer',
            color: '#94a3b8',
            fontSize: '1rem',
            lineHeight: 1,
            transition: 'color 150ms ease, background 150ms ease',
          }}
          className="hamburger"
          onMouseEnter={e => {
            e.currentTarget.style.color = '#22d3ee'
            e.currentTarget.style.background = 'rgba(34,211,238,0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#94a3b8'
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(8,13,26,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1rem 2rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          animation: 'fadeInDown 0.18s ease',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                color: '#94a3b8',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                transition: 'color 150ms ease, background 150ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#22d3ee'
                e.currentTarget.style.background = 'rgba(34,211,238,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#94a3b8'
                e.currentTarget.style.background = 'transparent'
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
          .hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
