import { useNavigate } from 'react-router-dom';

/**
 * 404 Not Found page.
 */
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '6rem', fontWeight: 800, margin: 0, opacity: 0.2 }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: '#999', marginBottom: '2rem' }}>
        This page doesn't exist.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.75rem 2rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Go Home
      </button>
    </div>
  );
}
