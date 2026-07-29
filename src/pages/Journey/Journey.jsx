import './Journey.css';

const TIMELINE = [
  {
    year: '2022',
    title: 'The Flock Forms',
    desc: 'Ten strangers on the same college campus turned into ten friends over shared benches, group assignments, and questionable canteen food.',
  },
  {
    year: '2022',
    title: 'First Late-Night Chai',
    desc: 'What started as one cup of chai at a roadside stall became a nightly ritual — and the unofficial start of every plan the group ever made.',
  },
  {
    year: '2023',
    title: 'The First Trip',
    desc: 'A chaotic, under-planned road trip that somehow became the trip everyone still talks about. Vada Guys, the name, was born on that drive.',
  },
  {
    year: '2024',
    title: 'The Group Chat Explodes',
    desc: 'Memes, deadlines, 2 AM debates, and a thousand "bro wake up" messages. The group chat became the group\'s real diary.',
  },
  {
    year: '2025',
    title: 'Skills, Side Projects & Growth',
    desc: 'From DevOps pipelines to gym PRs to trek logs, everyone started building something of their own — while still showing up for each other.',
  },
  {
    year: '2026',
    title: 'This Website',
    desc: "Ten legends, one page. Vada Guys goes online — because some friendships deserve more than just a group chat name.",
  },
];

function Journey() {
  return (
    <section className="section journey-page">
      <div className="container">
        <p className="eyebrow">The Timeline of Our Beautiful Chaos</p>
        <h1 className="journey-page__title">
          Our <span className="text-accent">Journey</span>
        </h1>

        <ol className="timeline">
          {TIMELINE.map((item) => (
            <li key={item.title} className="timeline__item">
              <div className="timeline__marker">
                <span>{item.year}</span>
              </div>
              <div className="timeline__content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
