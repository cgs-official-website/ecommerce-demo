import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';

export default function WishlistPage() {
  const wishlistItems = allProducts.slice(0, 3);

  return (
    <>
      <PageBanner title="MY WISHLIST" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Wishlist' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="products-grid">
            {wishlistItems.map((p) => (
              <ProductCard key={p.id} product={p} wishlistMode={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
