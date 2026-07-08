import { Link } from 'react-router-dom';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="page-hero">
        <div className="page-hero-img">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&w=1600&q=85&fit=crop&crop=center" alt="Our office team" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <p className="breadcrumb"><Link to="/">Home</Link> › Contact Us</p>
          <h1>Contact Us</h1>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-map">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&w=800&q=85&fit=crop&crop=center" alt="Nigeria aerial view" />
                <div className="map-overlay">
                  <div className="map-pin">📍 Port Harcourt, Nigeria</div>
                </div>
              </div>
              <div className="info-card"><h3>Lagos Address</h3><p>Plot 1, Almayd Industrial Layout Rd, Trans Amadi,<br />Port Harcourt 500102, Rivers</p></div>
              <div className="info-card"><h3>Port Harcourt Address</h3><p>Gate Trans Amadi Industrial Layout Rd, Trans Amadi,<br />Port Harcourt 500108, Rivers</p></div>
              <div className="info-card"><h3>Contact Email</h3><p>info@wellgrand.com &nbsp;•&nbsp; wellgrand500@gmail.com</p></div>
              <div className="info-card"><h3>Contact Numbers</h3><p>+234 (087) 303-0428 &nbsp;•&nbsp; +234 (087) 303-0445</p></div>
            </div>

            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <h3>Send Us a Message</h3>
              <p>Fill in the form below and our team will get back to you promptly.</p>
              <div className="form-row"><input type="text" placeholder="Full Name" required /></div>
              <div className="form-row two-col">
                <input type="tel" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-row"><textarea placeholder="What can we do for you?" rows={5} /></div>
              <button type="submit" className="submit-btn">Submit Message →</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
