import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';

export default function ShopPage() {
  const [sort, setSort] = useState('Recommended');

  return (
    <>
      <PageBanner title="ALL PRODUCTS" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />

      <section className="section-padding">
        <div className="container shop-layout">
          <aside className="shop-sidebar">
            <h3 className="sidebar-title">FILTERS</h3>

            <div className="filter-group">
              <h4 className="filter-group-title">CATEGORY</h4>
              <div className="filter-list">
                {['Sneakers', 'Running', 'Casual', 'Formal', 'Sports'].map((c) => (
                  <label className="filter-label" key={c}>
                    <input type="checkbox" defaultChecked={c === 'Sneakers'} /> {c}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4 className="filter-group-title">GENDER</h4>
              <div className="filter-list">
                {['Men', 'Women', 'Kids'].map((g) => (
                  <label className="filter-label" key={g}><input type="checkbox" /> {g}</label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4 className="filter-group-title">SIZE</h4>
              <div className="filter-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[6, 7, 8, 9, 10, 11].map((s) => (
                  <label className="filter-label" key={s}>
                    <input type="checkbox" defaultChecked={s === 7 || s === 8} /> {s}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4 className="filter-group-title">PRICE RANGE</h4>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>₹1,000 — ₹15,000</p>
              <input type="range" min="1000" max="15000" defaultValue="15000" style={{ width: '100%', accentColor: 'var(--primary)' }} />
            </div>

            <div className="filter-group">
              <h4 className="filter-group-title">BRAND</h4>
              <div className="filter-list">
                {['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'].map((b) => (
                  <label className="filter-label" key={b}>
                    <input type="checkbox" defaultChecked={b === 'Nike'} /> {b}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main>
            <div className="shop-toolbar">
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Showing {allProducts.length} of 24 products</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>SORT BY:</span>
                <select className="sort-select" aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option>Recommended</option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {allProducts.slice(0, 8).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
