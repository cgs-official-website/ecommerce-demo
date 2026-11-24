import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <main className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h2>CREATE ACCOUNT</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Join SOLEMATE for VIP drops and rewards</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="Rahul Sharma" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="rahul@example.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-input" placeholder="+91 98765 43210" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="••••••••" required />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-input" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-yellow" style={{ width: '100%', height: '50px', marginTop: '10px' }}>CREATE ACCOUNT</button>
        </form>

        <div className="auth-footer-links">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </main>
  );
}
