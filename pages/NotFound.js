import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <h1 style={{ fontSize: '5rem', margin: 0, color: '#e94560' }}>404</h1>
      <h2 style={{ color: '#374151' }}>Trang không tồn tại</h2>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Trang bạn tìm kiếm không tồn tại.</p>
      <Link
        to="/"
        style={{
          background: '#e94560',
          color: '#fff',
          padding: '0.7rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Về trang chủ
      </Link>
    </div>
  )
}

export default NotFound
