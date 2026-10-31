import { Navigate, Link, useParams } from 'react-router-dom';

import { Hero } from '../components/Hero';
import { services } from '../data/services';

const deliverySteps = [
  {
    title: 'Field assessment',
    description: 'We learn the land, operation, constraints, and goals.',
  },
  {
    title: 'Plan and design',
    description: 'We turn the findings into a focused and measurable plan.',
  },
  {
    title: 'Implementation support',
    description: 'We help your team put the right systems and actions in place.',
  },
  {
    title: 'Monitor and improve',
    description: 'We review results and refine the approach as conditions change.',
  },
];

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/not-found" replace />;

  return (
    <>
      <Hero
        eyebrow={service.category === 'ai' ? 'GreenHarvest AI' : 'GreenHarvest service'}
        title={service.title}
        lead={service.summary}
        body="Practical expertise and clear next steps built around the realities of your operation."
        image={service.image}
        imageAlt={`${service.title} in action`}
      />
      <main>
        <section className="section service-overview">
          <div className="container">
            <p className="eyebrow">Service overview</p>
            <div className="overview-grid">
              <div>
                <h2>{service.detail}</h2>
                <p>
                  Our team combines practical agronomy, accountable planning, and
                  field-ready recommendations to help you move forward with confidence.
                </p>
              </div>
              <img src={service.image} alt={`${service.title} overview`} />
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <p className="eyebrow">What we provide</p>
            <h2>A practical path from insight to action.</h2>
            <ol className="process-grid">
              {deliverySteps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <Link
              to="/contact"
              state={{ service: service.title }}
              className="button button--primary"
            >
              Request this service
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
