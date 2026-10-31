import type { ReactNode } from 'react';

interface HeroProps {
  actions?: ReactNode;
  body: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  lead: string;
  title: ReactNode;
  variant?: 'home' | 'page';
}

export function Hero({
  actions,
  body,
  eyebrow,
  image,
  imageAlt,
  lead,
  title,
  variant = 'page',
}: HeroProps) {
  return (
    <section className={`hero hero--${variant}`}>
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero__lead">{lead}</p>
          <p className="hero__body">{body}</p>
          {actions && <div className="hero__actions">{actions}</div>}
        </div>
        <div className="hero__image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
