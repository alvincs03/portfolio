export default function Footer() {
  return (
    <footer style={{
      background: '#080d1a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800, fontSize: '1.3rem',
          letterSpacing: '-0.5px',
          color: '#22d3ee',
        }}>
          alvin
        </div>
        <div style={{
          fontSize: '0.75rem',
          color: '#1e3a4a',
          marginTop: '0.5rem',
          fontFamily: 'DM Sans, sans-serif',
        }}>
          Built with React · 2026
        </div>
      </div>
    </footer>
  )
}
