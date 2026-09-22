import React from 'react';
import PageHero from './PageHero';
import Breadcrumb from './Breadcrumb';
import StorySection from './StorySection';
import ShowroomCard from './ShowroomCard';
import StatsSection from './StatsSection';
import DirectorQuote from './DirectorQuote';
import Timeline from './Timeline';
import { images } from '../assets/images';

/**
 * About Us — Heaven Furniture Mart.
 * All imagery comes from the manifest in src/assets/images/index.js,
 * so swapping photography never requires touching this file.
 */
export default function About() {
  return (
    <main className="bg-about-bg text-about-ink">
      <PageHero
        title="About Us"
        subtitle="Know more about us"
        image={images.aboutHero}
        alt="Luxury furniture showroom interior"
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '#/' },
          { label: 'About Us' },
        ]}
      />

      <StorySection />

      <ShowroomCard image={images.showroom} />

      <StatsSection />

      <DirectorQuote image={images.director} />

      <Timeline />
    </main>
  );
}
