import { useParams, Link, Navigate } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi2';
import members from '../../data/members';
import './TeamMember.css';

const ICONS = { instagram: FaInstagram, github: FaGithub, linkedin: FaLinkedinIn, twitter: FaTwitter };

function TeamMember() {
  const { memberId } = useParams();
  const index = members.findIndex((m) => m.id === memberId);

  if (index === -1) return <Navigate to="/team" replace />;

  const member = members[index];
  const prev = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];

  return (
    <section className="section member-page">
      <div className="container">
        <p className="member-page__crumbs">
          <Link to="/">Home</Link> <span>/</span> <Link to="/team">Team</Link> <span>/</span> {member.name}
        </p>

        <div className="member-page__grid">
          <div className="member-page__photo-col">
            <span className="member-page__badge">
              {String(member.order).padStart(2, '0')} / {members.length} Legends
            </span>
            <div className="member-page__photo">{member.name.charAt(0)}</div>
            <blockquote className="member-page__quote">&ldquo;{member.quote}&rdquo;</blockquote>
          </div>

          <div className="member-page__info">
            <h1>{member.name}</h1>
            <p className="member-page__tag">{member.tag}</p>

            <ul className="member-page__meta">
              {member.age && <li>{member.age} Years</li>}
              {member.education && <li>{member.education}</li>}
              {member.location && <li>{member.location}</li>}
            </ul>

            <div className="member-page__socials">
              {Object.entries(member.social || {}).map(([key, href]) => {
                const Icon = ICONS[key];
                return Icon ? (
                  <a key={key} href={href} aria-label={key} className="member-page__social-icon">
                    <Icon />
                  </a>
                ) : null;
              })}
            </div>

            <div className="member-page__panel">
              <h2><HiOutlineUsers /> About Me</h2>
              <p>{member.about}</p>
            </div>

            <div className="member-page__panel">
              <h2>Fun Attitudes</h2>
              <ul className="member-page__pills">
                {member.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            {member.randomFact && (
              <div className="member-page__panel">
                <h2>Random Fact</h2>
                <p>{member.randomFact}</p>
              </div>
            )}

            {member.favorites && (
              <div className="member-page__panel">
                <h2>Favorite Things</h2>
                <dl className="member-page__favorites">
                  {Object.entries(member.favorites).map(([key, value]) => (
                    <div key={key}>
                      <dt>{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {member.skills && (
              <div className="member-page__panel">
                <h2><HiOutlineUserGroup /> Skills &amp; Interests</h2>
                <ul className="member-page__pills">
                  {member.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <nav className="member-page__nav" aria-label="Other members">
          <Link to={`/team/${prev.id}`} className="member-page__nav-link">
            <HiOutlineArrowLeft /> Previous: {prev.name}
          </Link>
          <Link to="/team" className="member-page__nav-link member-page__nav-link--center">
            All Members
          </Link>
          <Link to={`/team/${next.id}`} className="member-page__nav-link">
            Next: {next.name} <HiOutlineArrowRight />
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default TeamMember;
