import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Team', to: '/team' },
  { label: 'Personalities', to: '/personalities' },
  { label: 'Skills', to: '/skills' },
  { label: 'Journey', to: '/journey' },
  { label: 'Memories', to: '/memories' },
  { label: 'Wall', to: '/wall' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Give the navbar a slightly denser background once the page scrolls,
  // so it stays readable over whatever content passes underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="" className="navbar__logo" aria-hidden="true" />
          <span className="navbar__brand-text">
            VADA <span className="text-accent">GUYS</span>
          </span>
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button to="/contact" variant="outline">Join Us</Button>
          <button
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Button to="/contact" onClick={() => setMenuOpen(false)}>Join Us</Button>
      </div>
    </header>
  );
}

export default Navbar;
