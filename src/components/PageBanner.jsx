import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumbs }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1 className="page-banner-title">{title}</h1>
        <div className="breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && ' / '}
              {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
