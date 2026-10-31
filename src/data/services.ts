export type ServiceCategory = 'agriculture' | 'ai';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  category: ServiceCategory;
}

export const mediaPath = (fileName: string) => `/media/${fileName}`;

export const services: Service[] = [
  {
    slug: 'soil-analysis',
    title: 'Soil Analysis & Treatment',
    category: 'agriculture',
    image: mediaPath('01-soil-analysis-and-treatment.jpg'),
    summary: 'Soil health, nutrient planning, and restorative treatment for stronger ground.',
    detail:
      'Build a stronger foundation for every season with practical soil analysis, nutrient plans, and restorative treatment tailored to your land.',
  },
  {
    slug: 'connected-farm-tools',
    title: 'Connected Farm Tools',
    category: 'agriculture',
    image: mediaPath('02-connected-farm-tools-and-reporting.jpg'),
    summary: 'Connected monitoring, reporting, and farm activity management.',
    detail:
      'Connected tools and clear reporting help you manage water, crops, and farm activity with insight you can act on.',
  },
  {
    slug: 'agricultural-advisory',
    title: 'Agricultural Advisory',
    category: 'agriculture',
    image: mediaPath('03-agricultural-advisory.jpg'),
    summary: 'Practical advice for planning, operations, and long-term growth.',
    detail:
      'Get hands-on advice for planning, operations, and growth from agricultural specialists who understand real farm challenges.',
  },
  {
    slug: 'irrigation-systems',
    title: 'Irrigation Systems',
    category: 'agriculture',
    image: mediaPath('04-efficient-irrigation.jpg'),
    summary: 'Water systems designed around crops, soil, and local conditions.',
    detail:
      'Use water efficiently through irrigation systems designed around your crops, soil, and local conditions.',
  },
  {
    slug: 'predictive-models',
    title: 'Predictive Farm Models',
    category: 'ai',
    image: mediaPath('05-predictive-farm-models.jpg'),
    summary: 'Clear decisions from microclimate, yield, and soil-moisture data.',
    detail:
      'Our predictive models analyze microclimate data, historical yields, and soil moisture levels in real time to surface clearer decisions.',
  },
  {
    slug: 'crop-risk-analytics',
    title: 'Crop Risk Analytics',
    category: 'ai',
    image: mediaPath('06-crop-risk-analytics.jpg'),
    summary: 'Earlier risk signals from satellite, field, and weather data.',
    detail:
      'Crop Risk Analytics brings satellite, field, and weather data together to identify stress signals early and prioritize the next best action.',
  },
  {
    slug: 'ai-irrigation-command',
    title: 'AI Irrigation Command',
    category: 'ai',
    image: mediaPath('07-ai-irrigation-command.jpg'),
    summary: 'Confident irrigation scheduling that protects every hectare.',
    detail:
      'AI Irrigation Command combines soil moisture, weather signals, and crop-stage information to help teams schedule irrigation with clarity and protect every hectare.',
  },
];

export const agricultureServices = services.filter(
  (service) => service.category === 'agriculture',
);

export const aiServices = services.filter((service) => service.category === 'ai');
