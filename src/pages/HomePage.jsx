import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { allProducts, heroShoes, categories, reviews } from '../data/products';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="social-sidebar">
          <div className="social-sidebar-line"></div>
          <a href="#" aria-label="Facebook">fb</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="Twitter">tw</a>
        </div>

        <div className="hero-watermark">SOLE AIR</div>

        <div className="hero-shoes-grid">
          {heroShoes.map((shoe, i) => (
            <div className="hero-shoe-card" key={i} style={i === 1 ? { transform: 'translateY(-20px)' } : undefined}>
              {i === 0 && <div className="yellow-circle-backdrop"></div>}
              {i === 2 && <div className="yellow-circle-backdrop" style={{ left: 'auto', right: '10px' }}></div>}
              {i === 2 && <Link to="/product" className="yellow-arrow-btn" title="View Details">→</Link>}
              <Link to="/product">
                <img src={shoe.image} alt={shoe.name} className="hero-shoe-img" />
              </Link>
              <div className="hero-shoe-info">
                <h3 className="hero-shoe-title">{shoe.name}</h3>
                <p className="hero-shoe-price">{shoe.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-bottom-content">
          <h1 className="hero-main-title">JUST DO IT</h1>
          <p className="hero-subtext">
            When you want to run for extended periods, make sure you choose a good pair of running shoes that can withstand the rigors of your daily schedule.
          </p>
          <div className="hero-cta-group">
            <Link to="/shop" className="btn-yellow">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header-minimal">
            <h2>CATEGORIES</h2>
            <p>Handcrafted footwear designed for every stride</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <article className="category-card" key={cat.title}>
                <img src={cat.image} alt={`${cat.title} Collection`} className="category-img" />
                <div className="category-content">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-subtitle">{cat.subtitle}</p>
                  <Link to={cat.link} className="category-link">SHOP NOW →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-minimal">
            <h2>FEATURED PRODUCTS</h2>
            <p>Curated for lifestyle, performance, and unmatched durability</p>
          </div>
          <div className="products-grid">
            {allProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '55px' }}>
            <Link to="/shop" className="btn-dark">EXPLORE ALL PRODUCTS →</Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container section-padding">
        <div className="promo-section">
          <div className="promo-grid">
            <div>
              <h2 className="promo-title">UP TO 50% OFF</h2>
              <p className="promo-text">Step into the season with our latest high-performance athletic collection.</p>
              <Link to="/shop" className="btn-yellow">Shop Sale Collection →</Link>
            </div>
            <div className="promo-img-wrapper">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" alt="Promo Shoe" className="promo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-minimal">
            <h2>WHY CHOOSE SOLEMATE</h2>
            <p>Uncompromising commitment to quality and service</p>
          </div>
          <div className="features-grid">
            {[
              { icon: <><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></>, title: 'FREE SHIPPING', desc: 'Free delivery across India on qualifying orders with live order tracking.' },
              { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></>, title: 'EASY RETURNS', desc: 'Simple 30-day return policy with doorstep pickup facilities.' },
              { icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></>, title: 'SECURE PAYMENT', desc: '100% encrypted safe payments via Cards, Net Banking, and UPI.' },
              { icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></>, title: 'PREMIUM QUALITY', desc: '100% authentic brands with original warranty & craftsmanship.' },
            ].map((f) => (
              <div className="feature-item" key={f.title}>
                <div className="feature-icon-box">
                  <svg viewBox="0 0 24 24">{f.icon}</svg>
                </div>
                <h3 className="feature-h3">{f.title}</h3>
                <p className="feature-p">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header-minimal">
            <h2>CUSTOMER REVIEWS</h2>
            <p>What sneaker lovers say about SOLEMATE</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <article className="review-box" key={i}>
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}>{'★'.repeat(r.stars)}</div>
                <p className="review-quote">{r.quote}</p>
                <div className="review-user">
                  <img src={r.avatar} alt={r.name} className="review-avatar" />
                  <div>
                    <h4 className="review-name">{r.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Verified Buyer</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container section-padding">
        <div className="newsletter-card">
          <h2 className="newsletter-title">JOIN THE SOLEMATE CLUB</h2>
          <p className="newsletter-sub">Subscribe to get updates about new arrivals, secret drops, and special offers.</p>
          <form className="newsletter-form-inline" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="newsletter-input-field" required aria-label="Email Address" />
            <button type="submit" className="btn-dark">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </>
  );
}
