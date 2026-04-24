export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a18',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'Syne, Space Grotesk, sans-serif',
          fontWeight: 800, fontSize: '1.4rem',
          letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #FF6EB4 0%, #C084FC 50%, #4DC9F6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          alvin
        </div>
      </div>
    </footer>
  )
}
