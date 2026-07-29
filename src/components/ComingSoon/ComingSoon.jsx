import './ComingSoon.css';

// Temporary placeholder for pages we haven't built yet in this pass
// (Personalities, Skills, Journey, Memories, Wall, Contact...).
// Swapping this out for the real page later is a one-line change in App.jsx.
function ComingSoon({ title }) {
  return (
    <section className="coming-soon container">
      <span className="coming-soon__eyebrow">Under Construction</span>
      <h1>{title}</h1>
      <p>This page is being built in the next pass. Check back soon.</p>
    </section>
  );
}

export default ComingSoon;
