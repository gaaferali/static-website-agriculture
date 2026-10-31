import { Link } from 'react-router-dom';

import { Logo } from './Logo';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Logo />
          <p>
            Practical, sustainable solutions for the challenges farmers face in the field.
          </p>
        </div>
        <div>
          <h2>Navigation</h2>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <a href="/#about">About Us</a>
            <a href="/#services">Services</a>
            <Link to="/contact">Contact Us</Link>
            <a href="/#ai-services">AI Service</a>
          </nav>
        </div>
        <div>
          <h2>Why choose us</h2>
          <ul className="footer-list">
            <li>Experienced professionals</li>
            <li>Modern farming technology</li>
            <li>Practical solutions</li>
            <li>Focus on efficiency</li>
          </ul>
        </div>
        <div>
          <h2>Contact us</h2>
          <address>
            <a href="tel:+2499910188">+249 99 101 88</a>
            <a href="mailto:hello@greenharvest.org">hello@greenharvest.org</a>
            <span>128 Rural District, Omdurman, Sudan</span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} GreenHarvest Agriculture. All rights reserved.
      </div>
    </footer>
  );
}
