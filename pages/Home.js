import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge"> Hệ thống quản lý sản phẩm</div>
        <h1 className="hero-title">Product Management System</h1>
        <p className="hero-subtitle">
          Quản lý, tìm kiếm và khám phá sản phẩm dễ dàng, nhanh chóng và hiệu quả.
        </p>
        <Link to="/products" className="hero-btn">
          Xem danh sách sản phẩm →
        </Link>
      </div>

      <div className="home-stats">
        <div className="stat-card">
          <span className="stat-number">15</span>
          <span className="stat-label">Sản phẩm</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">4</span>
          <span className="stat-label">Danh mục</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">Tiện lợi</span>
        </div>
      </div>
    </div>
  )
}

export default Home
