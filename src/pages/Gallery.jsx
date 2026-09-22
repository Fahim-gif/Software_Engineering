import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';

const galleryImages = [
  {
    title: 'Signature Living Room',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Living Room',
  },
  {
    title: 'Sculpted Dining Suite',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    tag: 'Dining',
  },
  {
    title: 'Warm Bedroom Retreat',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Bedroom',
  },
  {
    title: 'Executive Office',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    tag: 'Office',
  },
  {
    title: 'Modern Minimal Lounge',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    tag: 'Lounge',
  },
  {
    title: 'Bespoke Headboard Detail',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Detail',
  },
  {
    title: 'Timber Accent Wall',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Accent',
  },
  {
    title: 'Luxury Corner Setup',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    tag: 'Corner',
  },
];

export default function Gallery() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-green font-semibold">
              Gallery
            </p>
            <h1 className="mt-3 font-serif text-4xl md:text-6xl text-brand-dark leading-none">
              Crafted for real living.
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm">
            <Camera className="w-4 h-4 text-brand-green" />
            Interior inspiration & material stories
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                    {item.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-brand-green" />
                </div>
                <h2 className="mt-3 text-xl font-semibold text-brand-dark">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
