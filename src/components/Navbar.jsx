import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const services = [
  { label: 'Engineering', icon: '⚙️', path: '/services/engineering' },
  { label: 'Procurement', icon: '📦', path: '/services/procurement' },
  { label: 'Construction', icon: '🏗️', path: '/services/construction' },
  { label: 'Commissioning', icon: '🔧', path: '/services/commissioning' },
  { label: 'Marine Support', icon: '⚓', path: '/services/marine' },
  { label: 'Manpower Supply', icon: '👷', path: '/services/manpower' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          <div className="logo-icon"><span>WG</span></div>
          <span className="logo-text">Well Grand Integrity Limited</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(o => !o)}>
              Our Services <span className={`chevron${dropdownOpen ? ' open' : ''}`}>▾</span>
            </button>
            <div className={`dropdown${dropdownOpen ? ' open' : ''}`}>
              {services.map(s => (
                <Link key={s.path} to={s.path} onClick={() => setDropdownOpen(false)}>
                  <span className="dropdown-icon">{s.icon}</span>
                  {s.label}
                </Link>
              ))}
            </div>
          </li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact" className="nav-cta">Contact Us</Link></li>
        </ul>

        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <button onClick={() => setMobileServicesOpen(o => !o)}>
          Our Services {mobileServicesOpen ? '▲' : '▾'}
        </button>
        {mobileServicesOpen && (
          <div className="mobile-submenu">
            {services.map(s => (
              <Link key={s.path} to={s.path}>{s.icon} {s.label}</Link>
            ))}
          </div>
        )}
        <Link to="/projects">Projects</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact" className="mobile-cta">Contact Us</Link>
      </div>
    </>
  );
}
