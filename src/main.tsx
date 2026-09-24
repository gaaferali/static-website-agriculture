import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

type Service = { slug: string; title: string; summary: string; detail: string; image: string; category: 'service' | 'ai' };

const media = (name: string) => `/media/${name}`;
const services: Service[] = [
  { slug: 'soil-analysis', title: 'Soil Analysis & Treatment', category: 'service', image: media('01-soil-analysis-and-treatment.jpg'), summary: 'Soil health, nutrient planning, and restorative treatment for stronger ground.', detail: 'Build a stronger foundation for every season with practical soil analysis, nutrient plans, and restorative treatment tailored to your land.' },
  { slug: 'connected-farm-tools', title: 'Connected Farm Tools', category: 'service', image: media('02-connected-farm-tools-and-reporting.jpg'), summary: 'Connected monitoring, reporting, and farm activity management.', detail: 'Connected tools and clear reporting help you manage water, crops, and farm activity with insight you can act on.' },
  { slug: 'agricultural-advisory', title: 'Agricultural Advisory', category: 'service', image: media('03-agricultural-advisory.jpg'), summary: 'Practical advice for planning, operations, and long-term growth.', detail: 'Get hands-on advice for planning, operations, and growth from agricultural specialists who understand real farm challenges.' },
  { slug: 'irrigation-systems', title: 'Irrigation Systems', category: 'service', image: media('04-efficient-irrigation.jpg'), summary: 'Water systems designed around crops, soil, and local conditions.', detail: 'Use water efficiently through irrigation systems designed around your crops, soil, and local conditions.' },
  { slug: 'predictive-models', title: 'Predictive Farm Models', category: 'ai', image: media('05-predictive-farm-models.jpg'), summary: 'Clear decisions from microclimate, yield, and soil-moisture data.', detail: 'Our predictive models analyze microclimate data, historical yields, and soil moisture levels in real time to surface clearer decisions.' },
  { slug: 'crop-risk-analytics', title: 'Crop Risk Analytics', category: 'ai', image: media('06-crop-risk-analytics.jpg'), summary: 'Earlier risk signals from satellite, field, and weather data.', detail: 'Crop Risk Analytics brings satellite, field, and weather data together to identify stress signals early and prioritize the next best action.' },
  { slug: 'ai-irrigation-command', title: 'AI Irrigation Command', category: 'ai', image: media('07-ai-irrigation-command.jpg'), summary: 'Confident irrigation scheduling that protects every hectare.', detail: 'AI Irrigation Command combines soil moisture, weather signals, and crop-stage information to help teams schedule irrigation with clarity and protect every hectare.' }
];
const coreServices = services.filter((service) => service.category === 'service');
const aiServices = services.filter((service) => service.category === 'ai');

function Logo() {
  return <Link to="/" className="logo" aria-label="GreenHarvest Agriculture home"><span className="logo-mark" aria-hidden="true">⌁</span><span>GREENHARVEST<small>AGRICULTURE</small></span></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<'services' | 'ai' | null>(null);
  const menu = (kind: 'services' | 'ai', label: string, items: Service[], destination: string) => <div className="nav-menu" onMouseEnter={() => setDropdown(kind)} onMouseLeave={() => setDropdown(null)}>
    <a href={destination} onClick={() => setOpen(false)}>{label}</a>
    {(dropdown === kind || open) && <div className="dropdown">{items.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setOpen(false)}>{item.title}</Link>)}</div>}
  </div>;
  return <header className="topbar"><div className="container nav-shell"><Logo /><button type="button" className="menu-btn" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button><nav className={open ? 'open' : ''}>
    <Link to="/" onClick={() => setOpen(false)}>Home</Link><a href="/#about" onClick={() => setOpen(false)}>About Us</a>{menu('services', 'Services', coreServices, '/#services')}<Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>{menu('ai', 'AI Service', aiServices, '/#ai-services')}
  </nav></div></header>;
}

function Hero({ service }: { service?: Service }) {
  const isHome = !service;
  const image = service?.image ?? media('08-home-agriculture-agency.jpg');
  return <section className={`hero ${isHome ? 'home-hero' : 'service-hero'}`}><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">{isHome ? 'GREENHARVEST AGRICULTURE' : service?.category === 'ai' ? 'GREENHARVEST AI' : 'GREENHARVEST SERVICE'}</p><h1>{isHome ? <>Smarter Farming,<br />Stronger Harvests</> : service?.title}</h1>{isHome ? <><p className="hero-lead">Let’s plan the next season with confidence.</p><p className="hero-body">Commercial farm development, water systems, and field intelligence for practical growth.</p><div className="hero-actions"><a className="button button-primary" href="#services">Explore Solutions</a><a className="button button-secondary" href="#method">See Our Approach</a></div></> : <><p className="hero-lead">{service?.summary}</p><p className="hero-body">Practical expertise and clear next steps built around the realities of your operation.</p></>}</div><div className="hero-image"><img src={image} alt={isHome ? 'Aerial view of healthy agricultural fields' : `${service?.title} in action`} /></div></div></section>;
}

function ServiceCard({ service }: { service: Service }) {
  return <motion.article className="service-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}><div className="card-image"><img src={service.image} alt={`${service.title} agriculture service`} /></div><div className="card-copy"><h3>{service.title}</h3><p>{service.summary}</p><Link to={`/services/${service.slug}`}>Learn more <span aria-hidden="true">→</span></Link></div></motion.article>;
}

function Home() {
  return <><Hero /><main><section id="about" className="section about"><div className="container"><p className="eyebrow dark">ABOUT US</p><h2>Practical agricultural expertise for stronger, more resilient operations.</h2><div className="about-grid"><div><p className="large-copy">GreenHarvest Agriculture partners with farmers, businesses, and rural communities to deliver practical, technology-driven farming solutions — from crop planning and irrigation to agricultural consulting and data-driven insights.</p><p>We combine experience with innovation to create useful, measurable solutions for today’s agricultural challenges and long-term partnerships.</p></div><div className="focus-list"><article><p className="eyebrow dark">OUR FOCUS</p><h3>Smarter decisions, stronger harvests</h3><p>Move from reactive operations to proactive, data-informed growth.</p></article><article><p className="eyebrow dark">WHAT WE DELIVER</p><h3>Solutions built for the field</h3><p>Planning, irrigation, consulting, and insights that are useful, sustainable, and ready to act on.</p></article></div></div></div></section>
    <section className="thumbnail-section" aria-label="GreenHarvest in the field"><img src={media('AGRI.jpg')} alt="Large-scale agricultural operation viewed from above" /></section>
    <section id="services" className="section services"><div className="container"><p className="eyebrow dark">SERVICES</p><h2>Practical solutions for every stage of the farm cycle.</h2><div className="card-grid">{coreServices.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>
    <section id="ai-services" className="section ai-section"><div className="container"><p className="eyebrow">AI SERVICE</p><h2>Field intelligence that works.</h2><p className="ai-intro">Field sensors, satellite imagery, weather data, and farmer observations brought together to flag crop stress early, recommend irrigation windows, and prioritize field action.</p><div className="card-grid ai-grid">{aiServices.map((service) => <ServiceCard key={service.slug} service={service} />)}</div><p className="ai-note">AI recommendations support — not replace — agronomist judgment.</p></div></section>
    <section id="method" className="section method"><div className="container"><p className="eyebrow dark">OUR METHOD VS TRADITIONAL METHOD</p><h2>A clearer way to make agricultural decisions.</h2><div className="method-grid"><article><img src={media('traditional method.jpg')} alt="Traditional manual farming observation" /><div><h3>Traditional method</h3><p>Manual observation and fixed schedules can make resource management and early problem detection harder as operations grow.</p></div></article><article><img src={media('ouer method .jpg')} alt="Data-informed large-scale farming" /><div><h3>Our method</h3><p>Field data, modern agronomy, and proven technology improve crop quality, reduce waste, and increase productivity.</p></div></article></div></div></section></main></>;
}

function Detail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) ?? services[0];
  return <><Hero service={service} /><main><section className="section detail-section"><div className="container"><p className="eyebrow dark">SERVICE OVERVIEW</p><div className="detail-grid"><div><h2>{service.detail}</h2><p>Our team combines practical agronomy, accountable planning, and field-ready recommendations to help you make progress with confidence.</p></div><img src={service.image} alt={`${service.title} overview`} /></div></div></section><section className="section provide"><div className="container"><p className="eyebrow dark">WHAT WE PROVIDE</p><h2>A practical path from insight to action.</h2><div className="provide-grid">{['Field assessment', 'Plan and design', 'Implementation support', 'Monitoring and improvement'].map((title, index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>Clear, tailored guidance that keeps decisions grounded in your goals, field conditions, and operating realities.</p></article>)}</div><Link to="/contact" state={{ service: service.title }} className="button button-primary">Request this service</Link></div></section></main></>;
}

function Contact() {
  const selected = (useLocation().state as { service?: string } | null)?.service ?? '';
  return <><Hero /><main className="section"><div className="container contact"><section className="contact-image"><img src={media('04-efficient-irrigation.jpg')} alt="Efficient irrigation system watering healthy crops" /><div><p className="eyebrow">GREENHARVEST AGRICULTURE</p><h1>Let’s plan the next season with confidence.</h1><p>Commercial farm development, water systems, and field intelligence for practical growth.</p></div></section><form><p className="eyebrow dark">CONTACT US</p><h2>Start your project.</h2><p>Tell us about your farm, land, or agricultural operation and our team will be in touch.</p><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@email.com" /></label><label>Service required<select defaultValue={selected}><option value="">Choose a service</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label><label>Description<textarea placeholder="Tell us how we can help" /></label><button className="button button-primary" type="submit">Send message</button></form></div></main></>;
}

function Footer() { return <footer><div className="container footer-grid"><div><Logo /><p>Agricultural company dedicated to innovative, sustainable solutions for real farm challenges.</p></div><div><b>NAVIGATION</b><nav className="footer-nav" aria-label="Footer navigation"><Link to="/">Home</Link><a href="/#about">About Us</a><a href="/#services">Services</a><Link to="/contact">Contact Us</Link><a href="/#ai-services">AI Service</a></nav></div><div><b>WHY CHOOSE US</b><p>Experienced professionals<br />Modern farming technology<br />Practical solutions<br />Focus on productivity and efficiency</p></div><div><b>CONTACT US</b><p>+(249) 991-0188<br />hello@greenharvest.org<br />128 Khartoum Omdurman, Rural District</p></div></div><div className="container copyright">© 2026 GreenHarvest Agriculture. All rights reserved.</div></footer>; }

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}

function App() { return <><ScrollToTop /><Header /><Routes><Route path="/" element={<Home />} /><Route path="/services/:slug" element={<Detail />} /><Route path="/contact" element={<Contact />} /></Routes><Footer /></>; }
createRoot(document.getElementById('root')!).render(<BrowserRouter><App /></BrowserRouter>);
