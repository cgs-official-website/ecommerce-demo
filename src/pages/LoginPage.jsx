import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <main className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h2>WELCOME BACK</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Log in to access your SOLEMATE account</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="enter your email" required />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>Password</label>
              <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>Forgot Password?</a>
            </div>
            <input type="password" className="form-input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn-dark" style={{ width: '100%', height: '50px', marginTop: '10px' }}>LOGIN</button>
        </form>

        <div className="auth-footer-links">
          Don't have an account? <Link to="/register">Create Account</Link>
        </div>
      </div>
    </main>
  );
}
