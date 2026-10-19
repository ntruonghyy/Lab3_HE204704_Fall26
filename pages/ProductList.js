import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../src/data.js'
import './ProductList.css'

const CATEGORIES = ['Điện thoại', 'Laptop', 'Máy tính bảng']
const ITEMS_PER_PAGE = 3

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('search') || ''
  const selectedCategory = searchParams.get('category') || ''
  const currentPage = parseInt(searchParams.get('page')) || 1

  const [inputValue, setInputValue] = useState(keyword)

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) =>
        selectedCategory ? p.category === selectedCategory : true
      )
      .filter((p) =>
        keyword ? p.name.toLowerCase().includes(keyword.toLowerCase()) : true
      )
  }, [keyword, selectedCategory])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const pagedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )
  }, [filteredProducts, currentPage])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    const params = {}
    if (trimmed) params.search = trimmed
    if (selectedCategory) params.category = selectedCategory
    setSearchParams(params)
  }

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value
    const params = {}
    if (keyword) params.search = keyword
    if (newCategory) params.category = newCategory
    setSearchParams(params)
  }

  const handlePageChange = (newPage) => {
    const params = {}
    if (keyword) params.search = keyword
    if (selectedCategory) params.category = selectedCategory
    if (newPage > 1) params.page = newPage  
    setSearchParams(params)
  }

  const handleClear = () => {
    setInputValue('')
    setSearchParams({})
  }

  const hasActiveFilter = keyword || selectedCategory

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>Danh sách sản phẩm</h1>
        <span className="product-count">{filteredProducts.length} sản phẩm</span>
      </div>

      <div className="filter-bar">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              id="search-input"
              placeholder="Tìm kiếm theo tên sản phẩm..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="search-input"
            />
          </div>
          <button type="submit" className="btn-search">Tìm kiếm</button>
        </form>

        <div className="category-filter">
          <select
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            <option value="">Tất cả danh mục</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {hasActiveFilter && (
          <button type="button" className="btn-clear" onClick={handleClear}>
            ✕ Xóa lọc
          </button>
        )}
      </div>

      {hasActiveFilter && (
        <div className="active-filters">
          {keyword && <span className="filter-tag">🔍 "{keyword}"</span>}
          {selectedCategory && <span className="filter-tag"> {selectedCategory}</span>}
          <span className="filter-result">— {filteredProducts.length} kết quả</span>
        </div>
      )}

      <div className="total-count">
        Total Products: <strong>{filteredProducts.length}</strong>
        {(keyword || selectedCategory) && (
          <span className="total-count-sub">
            {' '}/ {products.length} tổng
          </span>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h2>Không tìm thấy sản phẩm</h2>
          <p>Không có sản phẩm nào phù hợp với bộ lọc hiện tại.</p>
          <button className="btn-search" onClick={handleClear} style={{ marginTop: '1rem' }}>
            Xem tất cả sản phẩm
          </button>
        </div>
      ) : (
        <>
          <div className="product-table-wrapper">
            <table className="product-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Giá</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {pagedProducts.map((product) => (
                  <tr key={product.id} className="product-row">
                    <td className="product-id">{product.id}</td>
                    <td className="product-name">{product.name}</td>
                    <td>
                      <span className="category-badge">{product.category}</span>
                    </td>
                    <td className="product-price">
                      {product.price.toLocaleString('vi-VN')} ₫
                    </td>
                    <td>
                      <Link to={`/products/${product.id}`} className="btn-view">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="btn-page"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span className="page-info">
                Page: <strong>{currentPage}</strong>/{totalPages}
              </span>

              <button
                className="btn-page"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ProductList

