import React from 'react';
import { Play } from 'lucide-react';

const reels = [
  { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" },
  { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" },
  { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" },
  { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" },
];

export default function ReelsSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs text-gray-500 tracking-widest uppercase">— Stories & Reels</span>
        <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-1">Explore Our <span className="italic text-brand-green">Craft in Motion.</span></h2>
        <p className="text-xs text-gray-500 mt-2">Craftsmanship moments captured in motion.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reels.map((reel, index) => (
          <div key={index} className="relative aspect-[9/14] rounded-2xl overflow-hidden shadow-md group cursor-pointer">
            <img src={reel.img} alt="Craft Reel" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition">
                <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}