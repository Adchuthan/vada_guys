import { useState } from 'react';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import './Wall.css';

const SEED_MESSAGES = [
  { name: 'Ajay', text: 'To the guys who made every random Tuesday feel like an event — love you all.' },
  { name: 'Ravi', text: 'Four years, a thousand memes, and still not tired of any of you. Onward!' },
  { name: 'Karthik', text: 'This group taught me that the best debugging happens over chai at midnight.' },
];

function Wall() {
  const [messages, setMessages] = useState(SEED_MESSAGES);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim()) {
      setError('Please fill in both your name and a message.');
      return;
    }

    setMessages((prev) => [{ name: name.trim(), text: text.trim() }, ...prev]);
    setName('');
    setText('');
    setError('');
  };

  return (
    <section className="section wall-page">
      <div className="container wall-page__grid">
        <div>
          <p className="eyebrow">Leave A Message. Make It Last Forever.</p>
          <h1 className="wall-page__title">
            Wall of <span className="text-accent">Messages</span>
          </h1>
          <p className="wall-page__desc">
            Got something to say to the flock? Drop it here — every message stays on this page for the group to read.
          </p>

          <form className="wall-form" onSubmit={handleSubmit} noValidate>
            <label className="wall-form__field">
              <span>Your Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Adchuthan"
              />
            </label>

            <label className="wall-form__field">
              <span>Your Message</span>
              <textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write something for the flock..."
              />
            </label>

            {error && <p className="wall-form__error" role="alert">{error}</p>}

            <button type="submit" className="btn btn--solid">
              <span>Post Message</span>
              <span className="btn__icon"><HiOutlinePaperAirplane /></span>
            </button>
          </form>
        </div>

        <ul className="wall-list">
          {messages.map((m, i) => (
            <li key={`${m.name}-${i}`} className="wall-list__item">
              <div className="wall-list__avatar">{m.name.charAt(0)}</div>
              <div>
                <strong>{m.name}</strong>
                <p>{m.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Wall;
