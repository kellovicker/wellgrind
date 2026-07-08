import { Link } from 'react-router-dom';
import '../styles/About.css';

export default function About() {
  return (
    <main className="about-page">
      <div className="page-hero">
        <div className="page-hero-img">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=1600&q=85&fit=crop&crop=center" alt="Construction site" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <p className="breadcrumb"><Link to="/">Home</Link> › About Us</p>
          <h1>About Us</h1>
          <p className="hero-sub">Delivering World Class Solutions — Proudly Nigerian</p>
        </div>
      </div>

      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div>
              <div className="section-label">Who We Are</div>
              <h2 className="intro-h2">Delivering <em>World Class</em> Solutions.</h2>
              <p>We are a leading EPCIC Engineering, Procurement, Construction, Installation and Commissioning company.</p>
              <p>Well Grand Integrity Limited is a reputable engineering, construction and servicing company registered under the Federal Republic of Nigeria. As an indigenous engineering company, we are managed by a team of qualified, experienced and highly dedicated Nigerian professionals who are committed to excellence.</p>
              <div className="intro-stats">
                <div className="istat"><span className="istat-num">NRS 105</span><span className="istat-label">Registered</span></div>
                <div className="istat"><span className="istat-num">20</span><span className="istat-label">Projects</span></div>
              </div>
            </div>
            <div className="about-img-collage">
              <img className="collage-main" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=700&q=85&fit=crop&crop=center" alt="Engineering team" />
              <img className="collage-accent" src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&w=400&q=85&fit=crop&crop=center" alt="Industrial work" />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Values</div>
            <h2 className="section-h2">Here are the values that drive us</h2>
          </div>
          <div className="values-grid">
            {[
              { num:'01', t:'Integrity', d:'We conduct our business with the utmost integrity — transparent, honest and ethical in every engagement with clients and partners.', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&w=400&q=85&fit=crop&crop=center' },
              { num:'02', t:'Excellence', d:'We relentlessly pursue the highest standards of quality in our engineering and construction services across every discipline.', img:'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&w=400&q=85&fit=crop&crop=center' },
              { num:'03', t:'Safety', d:'The safety and wellbeing of our employees, clients and host communities is non-negotiable in every operation we carry out.', img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=400&q=85&fit=crop&crop=center' },
              { num:'04', t:'Innovation', d:'We embrace new technologies and methods to deliver smarter, more efficient project outcomes for our clients.', img:'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&w=400&q=85&fit=crop&crop=center' },
            ].map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card-img">
                  <img src={v.img} alt={v.t} loading="lazy" />
                  <div className="value-num-badge">{v.num}</div>
                </div>
                <div className="value-card-body">
                  <h4>{v.t}</h4>
                  <p>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
