export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f3f6ff 0%, #ffffff 100%)',
      padding: '2rem'
    }}>
      <main style={{
        width: '100%',
        maxWidth: 900,
        background: '#ffffff',
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(16,24,40,0.08)',
        padding: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '2.5rem', margin: 0}}>Welcome to My Next.js App!</h1>
        <p style={{marginTop: '0.75rem', color: '#334155', fontSize: '1.125rem'}}>
          This is the homepage customized by Vhiane Angenae.
        </p>

        <div style={{marginTop: '1.5rem'}}>
          <a
            href="/about"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.25rem',
              background: 'linear-gradient(90deg,#2563eb,#7c3aed)',
              color: '#fff',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Learn more
          </a>
        </div>
      </main>
    </div>
  );
}
