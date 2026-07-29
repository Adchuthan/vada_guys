import members from '../../data/members';
import './Skills.css';

function Skills() {
  // Build a de-duplicated, frequency-ranked list of every skill mentioned
  // across all members, so the most common skills in the group appear
  // largest in the cloud — a quick visual read of the group's strengths.
  const counts = {};
  members.forEach((m) => (m.skills || []).forEach((s) => (counts[s] = (counts[s] || 0) + 1)));
  const cloud = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = cloud.length ? cloud[0][1] : 1;

  return (
    <section className="section skills-page">
      <div className="container">
        <p className="eyebrow">What We're Good At</p>
        <h1 className="skills-page__title">
          Let's Just Say... <span className="text-accent">A Lot</span>
        </h1>
        <p className="skills-page__desc">
          Ten people, one flock, and a ridiculous spread of skills — from cloud
          architecture to trip planning to knowing exactly which restaurant is open at 1 AM.
        </p>

        <div className="skills-cloud">
          {cloud.map(([skill, count]) => (
            <span
              key={skill}
              className="skills-cloud__tag"
              style={{ fontSize: `${0.8 + (count / max) * 0.9}rem` }}
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="skills-page__subtitle">Who Brings What</h2>
        <div className="skills-page__grid">
          {members.map((m) => (
            <div key={m.id} className="skills-card">
              <h3>{m.name}</h3>
              <p className="skills-card__tag">{m.tag}</p>
              <ul>
                {(m.skills || m.tags).slice(0, 4).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
