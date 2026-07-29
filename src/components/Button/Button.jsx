import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button
 * A single reusable button that can render as either a <button> (when an
 * onClick is given) or a router <Link> (when a `to` path is given), so
 * every CTA in the app — "Meet The Legends", "Join Us", form submits —
 * shares the exact same visual style.
 *
 * variant: 'solid' (filled flame gradient) | 'outline' (bordered, transparent)
 */
function Button({ children, to, href, onClick, variant = 'solid', icon, type = 'button', ...rest }) {
  const className = `btn btn--${variant}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

export default Button;
