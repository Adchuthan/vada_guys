import members from '../../data/members';
import './Personalities.css';

const GROUPS = [
  { key: 'tech', label: 'The Tech Brains', blurb: 'They speak in code and dream in cloud diagrams.' },
  { key: 'funny', label: 'The Funny Ones', blurb: 'Never a dull moment when they are in the room.' },
  { key: 'chill', label: 'The Chill Guys', blurb: 'Calm, steady, and quietly holding the group together.' },
  { key: 'foodie', label: 'The Foodies', blurb: 'Every plan starts and ends with "what are we eating?"' },
  { key: 'adventure', label: 'The Adventurers', blurb: 'Always chasing the next trail or road trip.' },
  { key: 'gaming', label: 'The Gamers', blurb: 'Ranked matches and anime debates, on repeat.' },
];

function Personalities() {
  return (
    <section className="section personalities-page">
      <div className="container">
        <p className="eyebrow">Fun, Crazy, Weird & Unique</p>
        <h1 className="personalities-page__title">
          That's <span className="text-accent">Us</span>
        </h1>
        <p className="personalities-page__desc">
          Ten completely different personalities, one crazy bond. Here's how the flock breaks down.
        </p>

        <div className="personalities-page__groups">
          {GROUPS.map((group) => {
            const groupMembers = members.filter((m) => m.category === group.key);
            if (groupMembers.length === 0) return null;

            return (
              <div key={group.key} className="personality-group">
                <div className="personality-group__header">
                  <h2>{group.label}</h2>
                  <p>{group.blurb}</p>
                </div>
                <ul className="personality-group__members">
                  {groupMembers.map((m) => (
                    <li key={m.id}>
                      <span className="personality-group__initial">{m.name.charAt(0)}</span>
                      <div>
                        <strong>{m.name}</strong>
                        <span>{m.tag}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Personalities;
