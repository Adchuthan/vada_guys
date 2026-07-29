import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { FaUsers, FaFire, FaCameraRetro, FaMugHot, FaGrinBeam } from 'react-icons/fa';
import { HiOutlineUserGroup, HiOutlineFaceSmile, HiOutlineBolt, HiOutlineCalendarDays, HiOutlinePhoto, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Button from '../../components/Button/Button';
import members from '../../data/members';
import logo from '../../assets/images/logo.png';
import './Home.css';

const STATS = [
  { icon: FaUsers, value: '10', label: 'Members' },
  { icon: FaFire, value: '4+', label: 'Years Together' },
  { icon: FaCameraRetro, value: '1000+', label: 'Memories Captured' },
  { icon: FaMugHot, value: '5000+', label: 'Chai & Coffee' },
  { icon: FaGrinBeam, value: '∞', label: 'Laughs' },
];

const EXPLORE = [
  { icon: HiOutlineUserGroup, title: 'Our Team', desc: 'Meet the 10 legends who make the magic happen.', to: '/team' },
  { icon: HiOutlineFaceSmile, title: 'Personalities', desc: "Fun, crazy, weird & unique — that's us!", to: '/personalities' },
  { icon: HiOutlineBolt, title: 'Skills', desc: "What we're good at? Let's just say... a lot.", to: '/skills' },
  { icon: HiOutlineCalendarDays, title: 'Journey', desc: 'The timeline of our beautiful chaos.', to: '/journey' },
  { icon: HiOutlinePhoto, title: 'Memories', desc: 'Pictures that speak louder than words.', to: '/memories' },
  { icon: HiOutlineChatBubbleLeftRight, title: 'Wall of Messages', desc: 'Leave a message. Make it last forever.', to: '/wall' },
];

function Home() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__eyebrow">One Flock. <span className="text-accent">One Fight.</span></p>
            <h1 className="hero__title">
              VADA<br /><span className="text-accent">GUYS</span>
            </h1>
            <p className="hero__subtitle">
              We are more than just a team.
              We are a vibe, a family, a memory in the making.
            </p>
            <div className="hero__actions">
              <Button to="/team" icon={<HiArrowRight />}>Meet The Legends</Button>
              <Button to="/journey" variant="outline">Our Journey</Button>
            </div>

            <div className="hero__avatars">
              <div className="hero__avatar-stack">
                {members.slice(0, 5).map((m) => (
                  <span key={m.id} className="hero__avatar-dot" title={m.name}>
                    {m.name.charAt(0)}
                  </span>
                ))}
                <span className="hero__avatar-dot hero__avatar-dot--more">+5</span>
              </div>
              <p>
                <span className="text-accent">10 Members.</span> Countless Memories.
              </p>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__glow" aria-hidden="true" />
            <img src={logo} alt="Vada Guys mascot logo — One Flock, One Fight" className="hero__logo" />
          </div>
        </div>

        <div className="container">
          <ul className="stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <li key={label} className="stats__item">
                <Icon className="stats__icon" />
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- About ---- */}
      <section className="section about">
        <div className="container about__grid">
          <div className="about__copy">
            <p className="eyebrow">About Us</p>
            <h2>Different Minds.<br /><span className="text-accent">Same Crazy Bond.</span></h2>
            <p>
              From late night talks to early morning chai, from college benches
              to life's big dreams — Vada Guys have been there for it all.
            </p>
            <p>Here's to the chaos, the memories, and the unbreakable bond!</p>
            <Button to="/journey" variant="outline" icon={<HiArrowRight />}>Discover Our Story</Button>
          </div>
          <div className="about__photo">
            <div className="about__photo-glow" aria-hidden="true" />
            <span className="about__photo-caption">WE ARE VADA GUYS</span>
          </div>
        </div>
      </section>

      {/* ---- Explore grid ---- */}
      <section className="section explore">
        <div className="container">
          <p className="eyebrow eyebrow--center">Explore Our World</p>
          <h2 className="explore__title">More Than <span className="text-accent">Just a Team</span></h2>

          <div className="explore__grid">
            {EXPLORE.map(({ icon: Icon, title, desc, to }) => (
              <Link key={title} to={to} className="explore__card">
                <Icon className="explore__icon" />
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="explore__link">
                  Explore <HiArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
