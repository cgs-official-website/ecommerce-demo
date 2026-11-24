import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';

export default function CategoryPage({ gender, title, breadcrumbLabel }) {
  let products;
  if (gender === 'men') {
    products = allProducts.filter((p) => p.gender === 'men').slice(0, 4);
  } else if (gender === 'women') {
    products = allProducts.filter((p) => p.gender === 'women').slice(0, 4);
  } else if (gender === 'sports') {
    products = allProducts.filter((p) => p.category.includes('sports') || p.category.includes('running')).slice(0, 4);
  } else {
    products = allProducts.slice(0, 4);
  }

  return (
    <>
      <PageBanner
        title={title}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: breadcrumbLabel }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} showWishlist={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
