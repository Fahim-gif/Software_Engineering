import React from 'react';

const posts = [
  {
    date: 'June 2026',
    title: 'How to choose wood tones that age beautifully',
    excerpt:
      'A quick guide to mixing warm teak, charcoal accents, and layered textures for a timeless living room.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    category: 'Style Guide',
  },
  {
    date: 'May 2026',
    title: 'Designing a family dining room that works every day',
    excerpt:
      'Practical layouts, durable finishes, and thoughtful spacing ideas for busy homes and weekend gatherings.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    category: 'Interiors',
  },
  {
    date: 'April 2026',
    title: 'Three ways to make a bedroom feel boutique and personal',
    excerpt:
      'From custom headboards to layered lighting, here is how to design a luxury retreat without excess.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    category: 'Bedroom',
  },
];

export default function Journal() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-brand-green font-semibold">
            Journal
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-brand-dark leading-none">
            Ideas, insight, and interior living.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]"
            >
              <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-brand-green font-semibold">
                  <span>{post.category}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-serif text-brand-dark leading-tight">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <button className="mt-6 inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-brand-dark transition hover:border-brand-green hover:text-brand-green">
                  Read article
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
