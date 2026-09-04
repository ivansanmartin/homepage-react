const ErrorPage = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#090e18',
    color: '#dde6f0',
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    gap: '24px',
    textAlign: 'center',
    padding: '24px',
  }}>
    <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#4a6680', fontSize: '14px' }}>404</span>
    <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', margin: 0 }}>Page not found</h1>
    <p style={{ color: '#7a99b8', margin: 0 }}>This page doesn't exist.</p>
    <a href="/" style={{
      padding: '10px 24px',
      background: '#2e86de',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '6px',
      fontSize: '15px',
    }}>
      Back to portfolio
    </a>
  </div>
)

export default ErrorPage
