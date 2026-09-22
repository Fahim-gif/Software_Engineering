import React from 'react';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import Collections from '../components/Collections';
import TrustSection from '../components/TrustSection';
import ReelsSection from '../components/ReelsSection';
import Testimonials from '../components/Testimonials';

/**
 * Landing page — the original App.jsx composition, moved here unchanged
 * so App.jsx can stay a thin routing shell.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBanner />
      <Collections />
      <TrustSection />
      <ReelsSection />
      <Testimonials />
    </main>
  );
}
