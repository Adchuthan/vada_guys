import { useState } from 'react';
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2';
import './Contact.css';

const INITIAL = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please write a message.';
  return errors;
}

function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(INITIAL);
    }
  };

  return (
    <section className="section contact-page">
      <div className="container contact-page__grid">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h1 className="contact-page__title">
            Join Our <span className="text-accent">Flock</span>
          </h1>
          <p className="contact-page__desc">
            Want to say hi, collaborate, or just find out how ten friends became a whole website? Send a message.
          </p>

          <ul className="contact-details">
            <li>
              <HiOutlineMapPin />
              <div>
                <strong>Address</strong>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </li>
            <li>
              <HiOutlinePhone />
              <div>
                <strong>Phone</strong>
                <span>+91 00000 00000</span>
              </div>
            </li>
            <li>
              <HiOutlineEnvelope />
              <div>
                <strong>Email</strong>
                <span>hello@vadaguys.com</span>
              </div>
            </li>
            <li>
              <HiOutlineClock />
              <div>
                <strong>Best Reach Time</strong>
                <span>Every day, 6 PM – 11 PM IST</span>
              </div>
            </li>
          </ul>

          <div className="contact-map" role="img" aria-label="Map placeholder for Vada Guys location">
            <span>Map goes here</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <p className="contact-form__success" role="status">
              Message sent! We'll get back to you soon.
            </p>
          )}

          <label className="contact-form__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <em>{errors.name}</em>}
          </label>

          <label className="contact-form__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <em>{errors.email}</em>}
          </label>

          <label className="contact-form__field">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <em>{errors.message}</em>}
          </label>

          <button type="submit" className="btn btn--solid">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
