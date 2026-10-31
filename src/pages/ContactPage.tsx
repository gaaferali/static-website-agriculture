import { useState, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';

import { Hero } from '../components/Hero';
import { mediaPath, services } from '../data/services';

interface ContactLocationState {
  service?: string;
}

export function ContactPage() {
  const selectedService =
    (useLocation().state as ContactLocationState | null)?.service ?? '';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <Hero
        eyebrow="Contact GreenHarvest"
        title="Let's plan the next season with confidence."
        lead="Tell us what you are growing toward."
        body="Share a little about your land or operation and our team will help identify the most useful next step."
        image={mediaPath('04-efficient-irrigation.jpg')}
        imageAlt="Efficient irrigation watering healthy crops"
      />
      <main className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Contact us</p>
            <h2>Start your project.</h2>
            <p>
              Whether you need a focused assessment or support across an entire farm,
              we are ready to listen.
            </p>
            <dl>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+2499910188">+249 99 101 88</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hello@greenharvest.org">hello@greenharvest.org</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>128 Rural District, Omdurman, Sudan</dd>
              </div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="form-row">
              <label htmlFor="service">Service required</label>
              <select id="service" name="service" defaultValue={selectedService}>
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button className="button button--primary" type="submit">
              Send message
            </button>
            <p className="form-status" aria-live="polite">
              {submitted
                ? 'Thank you. To send your request now, email hello@greenharvest.org.'
                : ''}
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
