import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { formatPrice } from '../data/products';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(8);
  const [selectedColor, setSelectedColor] = useState('#e63946');
  const [qty, setQty] = useState(1);

  const thumbnails = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=200&q=80',
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0].replace('w=200', 'w=800'));

  return (
    <>
      <div className="container" style={{ paddingTop: '30px', paddingBottom: '10px' }}>
        <div className="breadcrumb" style={{ justifyContent: 'flex-start' }}>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>Nike Air Max Crimson Pro</span>
        </div>
      </div>

      <section className="section-padding" style={{ paddingTop: '20px' }}>
        <div className="container product-detail-grid">
          <div>
            <div className="gallery-main">
              <img src={mainImage} alt="Nike Air Max Main View" />
            </div>
            <div className="gallery-thumbnails">
              {thumbnails.map((t, i) => (
                <div
                  className={`thumb-item${mainImage.includes(t.split('?')[0].split('/').pop()) ? ' active' : ''}`}
                  key={i}
                  onClick={() => setMainImage(t.replace('w=200', 'w=800'))}
                >
                  <img src={t} alt={`Thumbnail ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="detail-brand">NIKE</span>
            <h1 className="detail-title">Air Max Crimson Pro</h1>

            <div className="product-rating" style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
              ★★★★★ <span className="product-rating-count" style={{ fontSize: '0.9rem' }}>(128 Customer Reviews)</span>
            </div>

            <div className="detail-price-box">
              <span className="detail-price">{formatPrice(8999)}</span>
              <span className="detail-original-price">{formatPrice(11999)}</span>
              <span className="badge-tag yellow" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>25% OFF</span>
            </div>

            <p className="detail-desc">
              Engineered for maximal energy return and plush daily comfort. The Nike Air Max Crimson Pro features a lightweight flyknit mesh upper, responsive full-length Air unit, and a durable rubber waffle outsole designed for multi-surface traction.
            </p>

            <div>
              <h4 className="option-title">SELECT SIZE (UK/INDIA):</h4>
              <div className="size-picker">
                {[6, 7, 8, 9, 10, 11].map((s) => (
                  <button key={s} className={`size-btn${selectedSize === s ? ' active' : ''}`} onClick={() => setSelectedSize(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="option-title">COLOR WAY:</h4>
              <div className="color-picker">
                {[{ color: '#e63946', title: 'Crimson Red' }, { color: '#111111', title: 'Midnight Black' }, { color: '#ffffff', title: 'Pure White' }].map((c) => (
                  <div
                    key={c.color}
                    className={`color-dot${selectedColor === c.color ? ' active' : ''}`}
                    style={{ background: c.color, ...(c.color === '#ffffff' ? { border: '2px solid #ccc' } : {}) }}
                    title={c.title}
                    onClick={() => setSelectedColor(c.color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="qty-group">
              <div>
                <h4 className="option-title">QTY:</h4>
                <input type="number" min="1" max="10" value={qty} onChange={(e) => setQty(Number(e.target.value))} className="qty-input" aria-label="Quantity" />
              </div>
              <Link to="/cart" className="btn-dark" style={{ flex: 1, height: '50px' }}>ADD TO CART</Link>
              <Link to="/checkout" className="btn-yellow" style={{ flex: 1, height: '50px' }}>BUY NOW</Link>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>⚡ <strong>Free Express Shipping</strong> across India</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>🔄 <strong>30 Days Easy Return &amp; Doorstep Exchange</strong></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>🔒 <strong>100% Authentic Brand Guarantee</strong> with Warranty</div>
            </div>

            <div className="size-guide-box">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '6px' }}>SIZE CONVERSION GUIDE</h4>
              <table className="size-table">
                <thead>
                  <tr><th>US</th><th>UK / INDIA</th><th>EU</th><th>Foot Length (cm)</th></tr>
                </thead>
                <tbody>
                  {[
                    [7, 6, 40, '25.0 cm'],
                    [8, 7, 41, '25.8 cm'],
                    [9, 8, 42, '26.5 cm'],
                    [10, 9, 43, '27.1 cm'],
                    [11, 10, 44, '28.0 cm'],
                  ].map(([us, uk, eu, len], i) => (
                    <tr key={i} style={uk === 8 ? { background: 'rgba(255, 224, 90, 0.2)', fontWeight: 700 } : undefined}>
                      <td>{us}</td><td>{uk}</td><td>{eu}</td><td>{len}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
