import { useState } from 'react';
import { HiOutlineXMark, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import './Memories.css';

// Placeholder gallery data. Per the brief: use placeholders now, and
// swap the `gradient` key for a real `src` image path the moment
// actual photos are provided — nothing else in this file needs to change.
const PHOTOS = [
  { id: 1, caption: 'Sunset squad photo', tall: true },
  { id: 2, caption: 'First road trip' },
  { id: 3, caption: 'Late night chai run' },
  { id: 4, caption: 'Trek at 12,000 ft', tall: true },
  { id: 5, caption: 'Birthday surprise' },
  { id: 6, caption: 'Gym day gains' },
  { id: 7, caption: 'Cricket match chaos' },
  { id: 8, caption: 'College farewell', tall: true },
  { id: 9, caption: 'Rainy day hangout' },
  { id: 10, caption: 'Diwali celebrations' },
];

function Memories() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const step = (dir) =>
    setActiveIndex((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length));

  return (
    <section className="section memories-page">
      <div className="container">
        <p className="eyebrow">Pictures That Speak Louder Than Words</p>
        <h1 className="memories-page__title">
          Our <span className="text-accent">Memories</span>
        </h1>
        <p className="memories-page__desc">
          A thousand-and-one moments, condensed into a wall of photos. Click any tile for a closer look.
        </p>

        <div className="masonry">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.id}
              className={`masonry__tile ${photo.tall ? 'masonry__tile--tall' : ''}`}
              onClick={() => openAt(i)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <span className="masonry__caption">{photo.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <HiOutlineXMark size={28} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
          >
            <HiOutlineChevronLeft size={28} />
          </button>

          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__image" />
            <p>{PHOTOS[activeIndex].caption}</p>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
          >
            <HiOutlineChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Memories;
