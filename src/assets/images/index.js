/**
 * CENTRAL IMAGE MANIFEST
 * ----------------------
 * Every image used by the About page is referenced from this single file,
 * so you can swap artwork without touching any component.
 *
 * HOW TO REPLACE AN IMAGE WITH YOUR OWN FILE
 * 1. Drop the file into this folder, e.g. src/assets/images/showroom.jpg
 * 2. Import it at the top of this file:
 *        import showroom from './showroom.jpg';
 * 3. Replace the matching Unsplash URL below with the import:
 *        showroom,                     // instead of: showroom: 'https://images.unsplash.com/...'
 *
 * Vite hashes and bundles local imports automatically — no other change needed.
 */

export const images = {
  // Wide banner behind the "ABOUT US" hero. Replace with your showroom facade.
  aboutHero:
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',

  // Large rounded showroom card. Replace with a photo of the Agrabad flagship.
  showroom:
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',

  // Portrait of Managing Director Abul Kalam Bhuiyan. Replace with the real portrait.
  director:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
};

export default images;
