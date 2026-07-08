import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><span>WG</span></div>
              <span className="footer-logo-text">Well Grand Integrity Limited</span>
            </div>
            <p>
              A reputable engineering, construction and servicing company registered
              under the Federal Republic of Nigeria — committed to excellence in every
              project we undertake.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn" aria-label="Facebook">f</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/qhse">QHSE Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/engineering">Engineering</Link></li>
              <li><Link to="/services/procurement">Procurement</Link></li>
              <li><Link to="/services/construction">Construction</Link></li>
              <li><Link to="/services/commissioning">Commissioning</Link></li>
              <li><Link to="/services/marine">Marine Support</Link></li>
              <li><Link to="/services/manpower">Manpower Supply</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-item">
              <span>📍</span>
              <p>
                <strong>Corporate HQ (Lagos)</strong>
                Plot 1, Almayd Industrial Layout Rd,<br />
                Trans Amadi, Port Harcourt 500102, Rivers
              </p>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <p>
                <strong>Operational Office (PH)</strong>
                Gate Trans Amadi Industrial Layout Rd,<br />
                Trans Amadi, Port Harcourt 500108, Rivers
              </p>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <p><a href="mailto:info@wellgrand.com">info@wellgrand.com</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Well Grand Integrity Limited. All rights reserved.</span>
          <span>Registered under the Federal Republic of Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
