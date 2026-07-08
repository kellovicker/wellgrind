import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Verified Unsplash image IDs — engineering, construction, marine, industrial
const slides = [
  {
    tag: 'Indigenous Engineering Excellence',
    title: <>Built on <em>Integrity.</em><br />Driven by Purpose.</>,
    desc: 'A reputable engineering, construction and servicing company registered under the Federal Republic of Nigeria — managed by qualified, experienced and highly dedicated Nigerian professionals committed to excellence.',
    // Construction workers / heavy industry site
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=1600&q=85&fit=crop&crop=center',
    cta: { label: 'Our Services', to: '/services' },
    cta2: { label: 'About Us', to: '/about' },
  },
  {
    tag: 'End-to-End Project Execution',
    title: <>Engineering. <em>Procurement.</em><br />Construction.</>,
    desc: 'We provide end-to-end project execution services — from detailed engineering design through procurement, construction, installation and commissioning.',
    // Industrial pipeline / oil & gas facility
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&w=1600&q=85&fit=crop&crop=center',
    cta: { label: 'View Projects', to: '/projects' },
    cta2: { label: 'Contact Us', to: '/contact' },
  },
  {
    tag: 'Marine & Offshore Solutions',
    title: <>Reliable <em>Marine Support</em><br />Services.</>,
    desc: "Comprehensive marine support and offshore engineering services for Nigeria's oil, gas and industrial sectors. Our team is equipped and ready to deliver safe, efficient operations.",
    // Offshore / marine vessel
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&w=1600&q=85&fit=crop&crop=center',
    cta: { label: 'Marine Services', to: '/services/marine' },
    cta2: { label: 'Get a Quote', to: '/contact' },
  },
  {
    tag: 'Qualified Nigerian Professionals',
    title: <>Excellence Through <em>Dedicated</em><br />People.</>,
    desc: 'Our workforce is our greatest asset. We supply skilled, experienced and highly dedicated Nigerian professionals — engineers, technicians and project managers.',
    // Engineers / team on site with helmets
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=1600&q=85&fit=crop&crop=center',
    cta: { label: 'Manpower Supply', to: '/services/manpower' },
    cta2: { label: 'Join Our Team', to: '/careers' },
  },
];

const services = [
  {
    icon: '⚙️', title: 'Engineering',
    img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&w=600&q=85&fit=crop&crop=center',
    desc: 'Precision engineering solutions spanning structural, mechanical, electrical, instrumentation and process disciplines for complex projects.',
  },
  {
    icon: '📦', title: 'Procurement',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&w=600&q=85&fit=crop&crop=center',
    desc: 'Strategic sourcing and procurement management ensuring quality materials and equipment delivered on time and within budget.',
  },
  {
    icon: '🏗️', title: 'Construction',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=600&q=85&fit=crop&crop=center',
    desc: 'Full-cycle construction services with strict adherence to safety, quality and environmental standards across all project types.',
  },
  {
    icon: '🔧', title: 'Commissioning',
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&w=600&q=85&fit=crop&crop=center',
    desc: 'Systematic commissioning processes ensuring all systems perform to full specification from day one of operations.',
  },
  {
    icon: '⚓', title: 'Marine Support',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&w=600&q=85&fit=crop&crop=center',
    desc: "Comprehensive marine support services for offshore and coastal engineering operations across Nigeria's waterways.",
  },
  {
    icon: '👷', title: 'Manpower Supply',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=600&q=85&fit=crop&crop=center',
    desc: 'Skilled and experienced Nigerian personnel deployed to meet your project workforce requirements on time.',
  },
];

const whyItems = [
  { icon: '🏆', title: 'Committed to Excellence', desc: 'Every project is executed to the highest professional standards, consistently exceeding client expectations.' },
  { icon: '🇳🇬', title: 'Proudly Indigenous', desc: 'Fully Nigerian-owned and operated, with deep local knowledge and strong community ties.' },
  { icon: '🔒', title: 'Safety First (QHSE)', desc: 'Rigorous quality, health, safety and environmental management systems govern all our operations.' },
  { icon: '👥', title: 'Experienced Team', desc: 'Managed by highly qualified Nigerian professionals with decades of combined industry experience.' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <main>
      {/* ── HERO CAROUSEL ── */}
      <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="hero-slides">
          {slides.map((slide, i) => (
            <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
              <div className="hero-slide-bg">
                <img src={slide.img} alt={slide.title} loading={i === 0 ? 'eager' : 'lazy'} />
                <div className="slide-overlay" />
              </div>
              <div className="hero-slide-content">
                <div className="hero-tag">{slide.tag}</div>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <div className="hero-btns">
                  <Link to={slide.cta.to} className="btn-primary">{slide.cta.label} →</Link>
                  <Link to={slide.cta2.to} className="btn-outline-white">{slide.cta2.label}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-arrow" onClick={prev} aria-label="Previous">‹</button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <span className="slide-counter">{String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          <button className="carousel-arrow" onClick={next} aria-label="Next">›</button>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="container">
          <div className="about-inner">
            <div className="about-body">
              <div className="section-label">About Us</div>
              <h2 className="about-h2">Your Trusted <em>Indigenous</em> Engineering Partner</h2>
              <p>Well Grand Integrity Limited is a reputable engineering, construction and servicing company registered under the Federal Republic of Nigeria. As an indigenous engineering company, we are deeply rooted in the communities we serve.</p>
              <p>Managed by a team of qualified, experienced and highly dedicated Nigerian professionals who are committed to excellence in every project we undertake.</p>
              <div className="about-stats">
                <div><div className="astat-num">15+</div><div className="astat-label">Years Experience</div></div>
                <div><div className="astat-num">80+</div><div className="astat-label">Projects Completed</div></div>
                <div><div className="astat-num">100%</div><div className="astat-label">Nigerian Professionals</div></div>
              </div>
              <Link to="/about" className="about-link">Learn more about us →</Link>
            </div>

            {/* Image mosaic */}
            <div className="about-image-mosaic">
              <div className="mosaic-grid">
                <div className="mosaic-img tall">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=600&q=85&fit=crop&crop=center" alt="Construction workers on site" />
                  <div className="mosaic-badge"><span>100%</span>Nigerian Owned</div>
                </div>
                <div className="mosaic-img">
                  <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&w=600&q=85&fit=crop&crop=center" alt="Engineering work" />
                </div>
                <div className="mosaic-img">
                  <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&w=600&q=85&fit=crop&crop=center" alt="Industrial facility" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-h2">Our Core Services</h2>
            <p className="section-sub">End-to-end engineering, procurement, construction and commissioning solutions tailored to Nigeria's oil, gas and industrial landscape.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="svc-card" key={i}>
                <div className="svc-card-img">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="svc-card-body">
                  <span className="svc-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="why-glow" />
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <div className="section-label">Why Choose Us</div>
              <h2>Expertise You Can <em>Trust</em></h2>
              <p>With over a decade of proven performance in Nigeria's engineering and construction sector, Well Grand Integrity Limited brings the professionalism and dedication your project demands.</p>
              <div className="why-items">
                {whyItems.map((item, i) => (
                  <div className="why-item" key={i}>
                    <div className="why-item-icon">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=800&q=85&fit=crop&crop=center"
                alt="Engineers at work on industrial site"
                loading="lazy"
              />
              <div className="why-image-caption">
                <h4>Dedicated Nigerian Professionals</h4>
                <p>Our team brings world-class expertise to every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how Well Grand Integrity Limited can deliver excellence for you.</p>
            </div>
            <Link to="/contact" className="btn-navy">Talk to Us →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
