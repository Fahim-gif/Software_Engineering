/**
 * About page content.
 * Everything editorial lives here so components stay presentational.
 */

/**
 * Headline statistics.
 * `to` is the final value the counter animates up to; edit these numbers to
 * change the figures. Set `animate: false` on an entry to render it statically.
 */
export const stats = [
  { to: 2020, suffix: '', label: 'Founded in Chattogram', separator: false },
  { to: 5000, suffix: '+', label: 'Sq Ft Flagship Showroom', separator: true },
  { to: 100, suffix: '%', label: 'Kiln-Dried Hardwood', separator: false },
  { to: 5, prefix: '', suffix: '-Yr', label: 'Structural Warranty', separator: false },
];

/** Timeline entries — rendered with .map() in Timeline.jsx */
export const milestones = [
  {
    year: '2020',
    icon: 'hammer',
    category: 'Showroom Founding',
    title: 'Founded in Chattogram',
    description:
      'Managing Director Abul Kalam Bhuiyan established Heaven Furniture Mart with a commitment to authentic craftsmanship.',
    badge: '100% Solid Hardwood Focus',
  },
  {
    year: '2021',
    icon: 'building',
    category: 'Flagship Launch',
    title: 'Agrabad Showroom Opening',
    description:
      'Inaugurated our premier showroom on Agrabad Access Road featuring curated live room displays.',
    badge: '5,000+ Sq Ft Flagship',
  },
  {
    year: '2024',
    icon: 'sparkles',
    category: 'Industry Showcase',
    title: 'International Furniture Fair',
    description:
      'Exhibited signature hand-carved teak suites and bespoke modular living concepts at the fair.',
    badge: 'Premier Fair Showcase',
  },
  {
    year: '2025',
    icon: 'award',
    category: 'Civic Induction',
    title: 'Chamber of Commerce',
    description:
      'Inducted into the Chamber of Commerce, recognizing our business ethics, trade contributions, and craftsmanship standards.',
    badge: 'Official Chamber Member',
  },
  {
    year: '2026',
    icon: 'trophy',
    category: 'National Honour',
    title: 'Nationwide BFIOA Recognition',
    description:
      'Received nationwide recognition from the Bangladesh Furniture Industry Owners Association for artisan excellence.',
    badge: 'BFIOA Industry Recognition',
  },
];

/** Managing Director quote block */
export const director = {
  name: 'Abul Kalam Bhuiyan',
  role: 'Managing Director',
  quote:
    'At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.',
};
