import PageBanner from '../components/PageBanner';

export default function ContactPage() {
  return (
    <>
      <PageBanner title="GET IN TOUCH" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />

      <section className="section-padding">
        <div className="container contact-grid">
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>REACH OUT TO US</h3>

            {[
              { icon: '📍', title: 'STORE ADDRESS', text: 'SOLEMATE Flagship Store, Bandra West, Mumbai, Maharashtra 400050' },
              { icon: '✉️', title: 'EMAIL US', text: <>support@solemate.com<br />sales@solemate.com</> },
              { icon: '📞', title: 'CALL US', text: <>+91 1800 266 9999<br />Mon-Sat: 9:00 AM – 8:00 PM</> },
            ].map((info) => (
              <div className="contact-info-item" key={info.title}>
                <div className="contact-info-icon">{info.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>{info.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>SEND US A MESSAGE</h3>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input type="text" className="form-input" placeholder="Rahul Sharma" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="rahul@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea rows="5" className="form-textarea" placeholder="How can we help you today?" required></textarea>
              </div>
              <button type="submit" className="btn-yellow" style={{ width: '100%', height: '50px' }}>SEND MESSAGE →</button>
            </form>
          </div>
        </div>

        <div className="container" style={{ marginTop: '50px' }}>
          <div className="map-placeholder">
            <span>📍 SOLEMATE STORE LOCATION MAP — MUMBAI, INDIA</span>
          </div>
        </div>
      </section>
    </>
  );
}
