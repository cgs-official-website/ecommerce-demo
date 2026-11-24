import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import KidsPage from './pages/KidsPage';

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/men"
            element={
              <CategoryPage
                gender="men"
                title="MEN'S FOOTWEAR"
                breadcrumbLabel="Men"
              />
            }
          />
          <Route
            path="/women"
            element={
              <CategoryPage
                gender="women"
                title="WOMEN'S FOOTWEAR"
                breadcrumbLabel="Women"
              />
            }
          />
          <Route path="/kids" element={<KidsPage />} />
          <Route
            path="/sports"
            element={
              <CategoryPage
                gender="sports"
                title="SPORTS & ATHLETIC"
                breadcrumbLabel="Sports"
              />
            }
          />
        </Routes>
      </main>
      <Footer minimal={!isHomePage} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
