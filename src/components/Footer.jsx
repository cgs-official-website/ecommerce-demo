import { Link } from 'react-router-dom';

export default function Footer({ minimal = false }) {
  if (minimal) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; 2026 SOLEMATE Inc. All prices in INR (₹). Built with React.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" style={{ color: '#ffffff' }}>
              <div className="logo-icon" style={{ background: 'var(--accent-yellow)', color: 'var(--primary)' }}>
                <svg viewBox="0 0 24 24">
                  <path d="M2 18h20v2H2v-2zm18.5-7.5l-2.5-5H6L3.5 10.5C2.6 11.4 2 12.6 2 14v2h20v-2c0-1.4-.6-2.6-1.5-3.5zM6.8 7.5h10.4l1.5 3H5.3l1.5-3z" />
                </svg>
              </div>
              SOLEMATE
            </Link>
            <p>SOLEMATE was created to make premium footwear accessible to everyone. Designed for comfort, speed, and confidence.</p>
          </div>

          <div className="footer-column">
            <h4>SHOP</h4>
            <div className="footer-links-list">
              <Link to="/men">Men's Collection</Link>
              <Link to="/women">Women's Collection</Link>
              <Link to="/kids">Kids' Shoes</Link>
              <Link to="/sports">Sports Shoes</Link>
              <Link to="/shop">New Arrivals</Link>
              <Link to="/shop">Offers &amp; Sale</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4>CUSTOMER SERVICE</h4>
            <div className="footer-links-list">
              <Link to="/contact">Contact Us</Link>
              <Link to="/about">Shipping &amp; Delivery</Link>
              <Link to="/about">Returns &amp; Exchanges</Link>
              <Link to="/product">Size Guide</Link>
              <Link to="/contact">FAQs</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <div className="footer-links-list">
              <Link to="/about">About Us</Link>
              <Link to="/about">Careers</Link>
              <Link to="/about">Privacy Policy</Link>
              <Link to="/about">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SOLEMATE Inc. All prices in INR (₹). Built with React.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['VISA', 'MASTERCARD', 'UPI', 'COD'].map((m) => (
              <span key={m} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontWeight: 700, color: '#fff' }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
