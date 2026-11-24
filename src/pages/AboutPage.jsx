import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function AboutPage() {
  return (
    <>
      <PageBanner title="OUR STORY" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <section className="section-padding">
        <div className="container about-hero-grid">
          <div>
            <span style={{ textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '2px' }}>THE SOLEMATE LEGACY</span>
            <h2 style={{ fontSize: '2.75rem', fontWeight: 900, marginBottom: '20px', lineHeight: 1.15 }}>
              REDEFINING FOOTWEAR FOR EVERY STRIDE
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginBottom: '16px', lineHeight: 1.7 }}>
              <strong>SOLEMATE was created to make premium footwear accessible to everyone.</strong> Founded with a passion for street fashion and ergonomic performance, we curate world-class footwear from iconic global brands.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginBottom: '28px', lineHeight: 1.7 }}>
              Every shoe in our catalog undergoes rigorous authenticity and quality testing, ensuring that you receive footwear engineered for long-lasting durability, responsive cushioning, and effortless confidence.
            </p>
            <Link to="/shop" className="btn-yellow">EXPLORE COLLECTION →</Link>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80" alt="SOLEMATE Brand Story" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header-minimal">
            <h2>MISSION &amp; VISION</h2>
            <p>Built on integrity, speed, and passion for sneaker culture</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ background: 'var(--bg-main)', padding: '40px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>OUR MISSION</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                To deliver authentic, cutting-edge footwear with unmatched customer support, lightning-fast dispatch, and transparent pricing in Indian Rupees (₹).
              </p>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '40px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>OUR VISION</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                To become India's #1 trusted online destination for athletic sneakers, casual fashion shoes, and performance footwear for the whole family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
