import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../src/data.js'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((p) => p.id === Number(id))

  const handleBack = () => {
    navigate('/products')
  }

  if (!product) {
    return (
      <div className="detail-not-found">
        <div className="not-found-icon">🔍</div>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm với ID <strong>#{id}</strong> không tồn tại trong hệ thống.</p>
        <button className="btn-back" onClick={handleBack}>
          ← Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div className="detail-header">
        <button className="btn-back" onClick={handleBack}>
          ← Back to Products
        </button>
      </div>

      <div className="detail-card">
        <div className="detail-card-header">
          <span className="detail-id">ID: #{product.id}</span>
          <span className="detail-category-badge">{product.category}</span>
        </div>

        <h1 className="detail-name">{product.name}</h1>

        <div className="detail-price">
          {product.price.toLocaleString('vi-VN')} ₫
        </div>

        <div className="detail-info-grid">
          <div className="detail-info-item">
            <span className="detail-label">ID</span>
            <span className="detail-value">#{product.id}</span>
          </div>
          <div className="detail-info-item">
            <span className="detail-label">Tên sản phẩm</span>
            <span className="detail-value">{product.name}</span>
          </div>
          <div className="detail-info-item">
            <span className="detail-label">Danh mục</span>
            <span className="detail-value">{product.category}</span>
          </div>
          <div className="detail-info-item">
            <span className="detail-label">Giá</span>
            <span className="detail-value detail-price-value">
              {product.price.toLocaleString('vi-VN')} ₫
            </span>
          </div>
        </div>

        <div className="detail-description">
          <span className="detail-label">Mô tả</span>
          <p className="detail-desc-text">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
