import { useState, useMemo } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import TeamCard from '../../components/TeamCard/TeamCard';
import Button from '../../components/Button/Button';
import members from '../../data/members';
import './Team.css';

const FILTERS = [
  { key: 'all', label: 'All Members' },
  { key: 'tech', label: 'Tech Brains' },
  { key: 'funny', label: 'Funny Ones' },
  { key: 'chill', label: 'Chill Guys' },
  { key: 'foodie', label: 'Foodies' },
  { key: 'adventure', label: 'Adventurers' },
  { key: 'gaming', label: 'Gamers' },
];

function Team() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(
    () => (active === 'all' ? members : members.filter((m) => m.category === active)),
    [active],
  );

  return (
    <section className="section team-page">
      <div className="container">
        <p className="eyebrow">10 Friends. 1 Flock. Unlimited Memories.</p>
        <h1 className="team-page__title">
          MEET THE <span className="text-accent">LEGENDS</span>
        </h1>
        <p className="team-page__desc">
          Different personalities, one crazy bond. Get to know the 10 legends
          who make Vada Guys what it is today!
        </p>

        <div className="team-page__stats">
          <div><strong>10</strong><span>Legends</span></div>
          <div><strong>1</strong><span>Family</span></div>
        </div>

        <div className="team-page__filters" role="tablist" aria-label="Filter members by personality">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              className={`filter-pill ${active === f.key ? 'filter-pill--active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="team-page__grid">
          {filtered.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="team-page__cta">
          <h3>More than just friends, <span className="text-accent">we are family!</span></h3>
          <p>Different vibes, different minds, but the same heart. That's the power of Vada Guys.</p>
          <Button to="/contact" icon={<HiArrowRight />}>Join Our Flock</Button>
        </div>
      </div>
    </section>
  );
}

export default Team;
