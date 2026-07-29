import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './TeamCard.css';

function TeamCard({ member }) {
  return (
    <Link to={`/team/${member.id}`} className="team-card">
      <span className="team-card__order">{String(member.order).padStart(2, '0')}</span>
      <div className="team-card__avatar" aria-hidden="true">
        {member.name.charAt(0)}
      </div>
      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__tag">{member.tag}</p>

      <ul className="team-card__traits">
        {member.tags.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="team-card__socials">
        <span aria-hidden="true"><FaInstagram /></span>
        <span aria-hidden="true"><FaGithub /></span>
        <span aria-hidden="true"><FaLinkedinIn /></span>
      </div>
    </Link>
  );
}

export default TeamCard;
