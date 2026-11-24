import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import { kidsProducts } from '../data/products';

export default function KidsPage() {
  return (
    <>
      <PageBanner
        title="KIDS' FOOTWEAR"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: 'Kids' }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="products-grid">
            {kidsProducts.map((p) => (
              <ProductCard key={p.id} product={p} showWishlist={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
