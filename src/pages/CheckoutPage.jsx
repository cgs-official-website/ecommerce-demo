import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function CheckoutPage() {
  return (
    <>
      <PageBanner title="CHECKOUT" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Cart', to: '/cart' }, { label: 'Checkout' }]} />

      <section className="section-padding">
        <div className="container checkout-grid">
          <div className="checkout-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <h3 className="checkout-section-title">1. CONTACT INFORMATION</h3>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="rahul@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <h3 className="checkout-section-title" style={{ marginTop: '30px' }}>2. SHIPPING ADDRESS</h3>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input type="text" className="form-input" placeholder="Rahul Sharma" required />
              </div>
              <div className="form-group">
                <label className="form-label">Street Address *</label>
                <input type="text" className="form-input" placeholder="Flat No., Building Name, Street" required />
              </div>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">City *</label>
                  <input type="text" className="form-input" placeholder="Mumbai / Bengaluru / Delhi" required />
                </div>
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <select className="form-select" required>
                    {['Maharashtra', 'Karnataka', 'Delhi NCR', 'Tamil Nadu', 'Telangana', 'Gujarat'].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Postal Code (PIN) *</label>
                <input type="text" className="form-input" placeholder="400001" required />
              </div>

              <h3 className="checkout-section-title" style={{ marginTop: '30px' }}>3. DELIVERY METHOD</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                <label className="payment-option-label">
                  <input type="radio" name="delivery" defaultChecked />
                  <div>
                    <div>Standard Delivery (3-5 Days)</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>FREE on all orders</div>
                  </div>
                </label>
                <label className="payment-option-label">
                  <input type="radio" name="delivery" />
                  <div>
                    <div>Express Overnight Dispatch</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>₹199</div>
                  </div>
                </label>
              </div>

              <h3 className="checkout-section-title">4. PAYMENT METHOD</h3>
              <div className="payment-options" style={{ marginBottom: '30px' }}>
                {['💳 Credit / Debit Card (Visa, Mastercard, RuPay)', '⚡ UPI / GPay / PhonePe / Paytm', '💵 Cash on Delivery (COD)'].map((m, i) => (
                  <label className="payment-option-label" key={i}>
                    <input type="radio" name="payment" defaultChecked={i === 0} />
                    <span>{m}</span>
                  </label>
                ))}
              </div>

              <button type="submit" className="btn-yellow" style={{ width: '100%', height: '54px', fontSize: '1.1rem' }}>PLACE ORDER NOW →</button>
            </form>
          </div>

          <div className="order-summary-card">
            <h3 className="summary-title">IN YOUR BAG (2)</h3>

            {[
              { name: 'Nike Air Max Crimson Pro', qty: 1, size: 8, price: '₹8,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=120&q=80' },
              { name: 'New Balance 574 Core', qty: 1, size: 8, price: '₹8,499', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=120&q=80' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid var(--border-light)' }}>
                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700 }}>{item.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Qty: {item.qty} | Size: {item.size}</p>
                  <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>{item.price}</p>
                </div>
              </div>
            ))}

            <div className="summary-row"><span>Subtotal</span><span style={{ fontWeight: 700 }}>₹17,498</span></div>
            <div className="summary-row"><span>Shipping</span><span style={{ fontWeight: 700, color: 'green' }}>FREE</span></div>
            <div className="summary-row"><span>Coupon (SOLE20)</span><span style={{ fontWeight: 700, color: 'var(--accent-red)' }}>-₹1,500</span></div>
            <div className="summary-row total"><span>Total Payable</span><span>₹15,998</span></div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '16px' }}>
              🔒 Encrypted 256-bit SSL connection. Your personal details are safe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
