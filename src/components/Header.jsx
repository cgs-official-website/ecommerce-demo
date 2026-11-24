import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'New', to: '/shop' },
    { label: 'Men', to: '/men' },
    { label: 'Women', to: '/women' },
    { label: 'Kids', to: '/kids' },
    { label: 'Sports', to: '/sports' },
    { label: 'Sale', to: '/shop' },
  ];

  const isActive = (to, label) => {
    if (label === 'New' && location.pathname === '/shop') return true;
    if (label === 'Sale') return false;
    return location.pathname === to;
  };

  return (
    <header className="header">
      <div className="container header-container">
        <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="menu-toggle"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
        />
        <label htmlFor="mobile-menu-toggle" className="hamburger-btn" aria-label="Toggle Navigation Menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24">
              <path d="M2 18h20v2H2v-2zm18.5-7.5l-2.5-5H6L3.5 10.5C2.6 11.4 2 12.6 2 14v2h20v-2c0-1.4-.6-2.6-1.5-3.5zM6.8 7.5h10.4l1.5 3H5.3l1.5-3z" />
            </svg>
          </div>
          SOLEMATE
        </Link>

        <nav className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`nav-link${isActive(link.to, link.label) ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/shop" className="icon-btn" title="Search" aria-label="Search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </Link>
          <Link to="/wishlist" className="icon-btn" title="Wishlist" aria-label="Wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span className="badge-count">3</span>
          </Link>
          <Link to="/cart" className="icon-btn" title="Bag" aria-label="Shopping Cart">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span className="badge-count">2</span>
          </Link>
          <Link to="/login" className="icon-btn" title="Account" aria-label="User Account">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
