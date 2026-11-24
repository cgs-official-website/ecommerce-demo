import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, renderStars } from '../data/products';

export default function ProductCard({ product, showWishlist = true, showCartBtn = true, wishlistMode = false }) {
  const [wishlisted, setWishlisted] = useState(wishlistMode);

  return (
    <article className="product-card">
      <div className="product-top-bar">
        <span className={`badge-tag ${product.badgeType}`}>{product.badge}</span>
        {showWishlist && !wishlistMode && (
          <>
            <input
              type="checkbox"
              id={`fav-${product.id}`}
              className="wishlist-checkbox"
              checked={wishlisted}
              onChange={() => setWishlisted(!wishlisted)}
            />
            <label htmlFor={`fav-${product.id}`} className="wishlist-btn" title="Add to Wishlist">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </label>
          </>
        )}
        {wishlistMode && (
          <button className="wishlist-btn" style={{ background: 'var(--accent-red)', color: '#fff' }} title="Remove from wishlist">
            ❤️
          </button>
        )}
      </div>
      <Link to="/product" className="product-image-box">
        <img src={product.image} alt={product.name} />
      </Link>
      <span className="product-brand">{product.brand}</span>
      <h3 className="product-name"><Link to="/product">{product.name}</Link></h3>
      <div className="product-rating">
        {renderStars(product.rating)} <span className="product-rating-count">({product.reviews})</span>
      </div>
      <div className="product-price-row">
        <div className="product-prices">
          <span className="price-current">{formatPrice(product.price)}</span>
          <span className="price-original">{formatPrice(product.originalPrice)}</span>
        </div>
        {showCartBtn && !wishlistMode && (
          <Link to="/cart" className="cart-icon-btn" title="Add to Cart">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
          </Link>
        )}
      </div>
      {wishlistMode && (
        <Link to="/cart" className="btn-dark" style={{ marginTop: '14px', width: '100%' }}>ADD TO CART</Link>
      )}
    </article>
  );
}
