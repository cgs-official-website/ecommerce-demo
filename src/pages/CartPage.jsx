import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const initialCartItems = [
  { id: 1, name: 'Nike Air Max Crimson Pro', size: 8, color: 'Crimson', price: 8999, qty: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80' },
  { id: 4, name: 'New Balance 574 Core', size: 8, color: 'Grey', price: 8499, qty: 1, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=200&q=80' },
];

export default function CartPage() {
  const [items, setItems] = useState(initialCartItems);

  const updateQty = (id, newQty) => {
    setItems(items.map((item) => item.id === id ? { ...item, qty: Math.max(1, Math.min(5, newQty)) } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 1500;
  const total = subtotal - discount;

  return (
    <>
      <PageBanner title="YOUR SHOPPING CART" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />

      <section className="section-padding">
        <div className="container cart-grid">
          <div className="cart-table-card">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>PRODUCT</th><th>PRICE</th><th>QTY</th><th>SUBTOTAL</th><th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-item-flex">
                        <img src={item.image} alt={item.name} className="cart-item-img" />
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{item.name}</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Size: {item.size} | Color: {item.color}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontWeight: 700 }}>₹{item.price.toLocaleString('en-IN')}</td>
                    <td>
                      <input
                        type="number"
                        value={item.qty}
                        min="1"
                        max="5"
                        className="qty-input"
                        style={{ width: '50px', padding: '6px' }}
                        onChange={(e) => updateQty(item.id, Number(e.target.value))}
                        aria-label={`${item.name} Quantity`}
                      />
                    </td>
                    <td style={{ fontWeight: 800, color: 'var(--text-dark)' }}>₹{(item.price * item.qty).toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--accent-red)' }} title="Remove Item">✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
              <Link to="/shop" className="btn-outline">← CONTINUE SHOPPING</Link>
              <button className="btn-dark">UPDATE CART</button>
            </div>
          </div>

          <div className="order-summary-card">
            <h3 className="summary-title">ORDER SUMMARY</h3>
            <div className="summary-row"><span>Subtotal</span><span style={{ fontWeight: 700 }}>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <div className="summary-row"><span>Estimated Shipping</span><span style={{ fontWeight: 700, color: 'green' }}>FREE</span></div>
            <div className="summary-row"><span>Discount (SOLE20)</span><span style={{ fontWeight: 700, color: 'var(--accent-red)' }}>-₹{discount.toLocaleString('en-IN')}</span></div>
            <div className="summary-row total"><span>Grand Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
            <Link to="/checkout" className="btn-yellow" style={{ width: '100%', marginTop: '24px', textAlign: 'center' }}>PROCEED TO CHECKOUT →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
