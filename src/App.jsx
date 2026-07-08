import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function PlaceholderPage({ title }) {
  return (
    <main style={{ paddingTop: 72 }}>
      <div style={{ background: 'linear-gradient(135deg,#021a2e,#063154)', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'white', fontWeight: 700 }}>{title}</h1>
        </div>
      </div>
      <div className="container" style={{ padding: '4rem' }}>
        <p style={{ color: 'var(--gray)', fontSize: 15 }}>This page is coming soon.</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
        <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
        <Route path="/services/*" element={<PlaceholderPage title="Our Services" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
