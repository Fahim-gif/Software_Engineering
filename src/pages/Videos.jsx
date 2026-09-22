import React from 'react';

const videos = [
  {
    title: 'Showroom Tour',
    category: 'Virtual Walkthrough',
    src: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080.mp4',
    poster:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Craftsmanship Close-Up',
    category: 'Workshop',
    src: 'https://videos.pexels.com/video-files/3183197/3183197-hd_1920_1080.mp4',
    poster:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxury Interior Styling',
    category: 'Design Story',
    src: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080.mp4',
    poster:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Videos() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-brand-green font-semibold">
            Videos
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-brand-dark leading-none">
            Design stories in motion.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <article
              key={video.title}
              className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]"
            >
              <div className="overflow-hidden">
                <video
                  controls
                  preload="metadata"
                  poster={video.poster}
                  className="h-72 w-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                  {video.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-brand-dark">{video.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
