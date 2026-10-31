import { Link } from 'react-router-dom';

import type { Service } from '../data/services';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt="" loading="lazy" />
      </div>
      <div className="service-card__content">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Link to={`/services/${service.slug}`}>
          Learn more <span aria-hidden="true">&rarr;</span>
          <span className="visually-hidden"> about {service.title}</span>
        </Link>
      </div>
    </article>
  );
}
