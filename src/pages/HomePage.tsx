import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { aiServices, agricultureServices, mediaPath } from '../data/services';

export function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow="GreenHarvest Agriculture"
        title={
          <>
            Smarter Farming,
            <br />
            Stronger Harvests
          </>
        }
        lead="Let's plan the next season with confidence."
        body="Commercial farm development, water systems, and field intelligence for practical growth."
        image={mediaPath('08-home-agriculture-agency.jpg')}
        imageAlt="Aerial view of healthy agricultural fields"
        actions={
          <>
            <a className="button button--primary" href="#services">
              Explore solutions
            </a>
            <a className="button button--secondary" href="#method">
              See our approach
            </a>
          </>
        }
      />

      <main>
        <section id="about" className="section about-section">
          <div className="container">
            <p className="eyebrow">About us</p>
            <h2>Practical agricultural expertise for resilient operations.</h2>
            <div className="about-grid">
              <div>
                <p className="lead-copy">
                  GreenHarvest partners with farmers, businesses, and rural communities
                  to deliver practical, technology-driven solutions—from crop planning
                  and irrigation to consulting and field intelligence.
                </p>
                <p>
                  We combine experience with innovation to create measurable answers
                  for today's agricultural challenges and long-term partnerships.
                </p>
              </div>
              <div className="focus-list">
                <article>
                  <p className="eyebrow">Our focus</p>
                  <h3>Smarter decisions, stronger harvests</h3>
                  <p>Move from reactive operations to proactive, data-informed growth.</p>
                </article>
                <article>
                  <p className="eyebrow">What we deliver</p>
                  <h3>Solutions built for the field</h3>
                  <p>
                    Planning, irrigation, consulting, and insights that are ready to act
                    on.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="field-image" aria-hidden="true">
          <img src={mediaPath('AGRI.jpg')} alt="" loading="lazy" />
        </div>

        <section id="services" className="section services-section">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>Practical solutions for every stage of the farm cycle.</h2>
            <div className="card-grid">
              {agricultureServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="ai-services" className="section ai-section">
          <div className="container">
            <p className="eyebrow eyebrow--light">AI service</p>
            <h2>Field intelligence that works.</h2>
            <p className="section-intro">
              Field sensors, satellite imagery, weather data, and farmer observations
              come together to flag crop stress early, recommend irrigation windows,
              and prioritize action.
            </p>
            <div className="card-grid">
              {aiServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
            <p className="ai-note">
              AI recommendations support—not replace—agronomist judgment.
            </p>
          </div>
        </section>

        <section id="method" className="section method-section">
          <div className="container">
            <p className="eyebrow">Our method vs. traditional methods</p>
            <h2>A clearer way to make agricultural decisions.</h2>
            <div className="method-grid">
              <article>
                <img
                  src={mediaPath('traditional method.jpg')}
                  alt="Traditional manual farming observation"
                  loading="lazy"
                />
                <div>
                  <h3>Traditional method</h3>
                  <p>
                    Manual observation and fixed schedules can make resource management
                    and early problem detection harder as operations grow.
                  </p>
                </div>
              </article>
              <article>
                <img
                  src={mediaPath('ouer method .jpg')}
                  alt="Data-informed large-scale farming"
                  loading="lazy"
                />
                <div>
                  <h3>Our method</h3>
                  <p>
                    Field data, modern agronomy, and proven technology improve crop
                    quality, reduce waste, and increase productivity.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
