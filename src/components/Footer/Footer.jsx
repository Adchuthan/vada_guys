import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Team', to: '/team' },
  { label: 'Personalities', to: '/personalities' },
  { label: 'Skills', to: '/skills' },
  { label: 'Journey', to: '/journey' },
  { label: 'Memories', to: '/memories' },
  { label: 'Wall', to: '/wall' },
  { label: 'Contact Us', to: '/contact' },
];

const SOCIALS = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            VADA <span className="text-accent">GUYS</span>
          </Link>
          <p>One Flock. One Fight.<br />Forever Vada Guys.</p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="footer__social-icon">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {year} Vada Guys. All rights reserved. Made with ❤️ by Vada Guys</p>
      </div>

      <button className="footer__to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <HiArrowUp size={20} />
      </button>
    </footer>
  );
}

export default Footer;
