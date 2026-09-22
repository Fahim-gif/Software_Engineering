import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Pause, Play, X } from 'lucide-react';

const showroomVideo = 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080.mp4';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!showVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [showVideo]);

  return (
    <section className="relative pt-44 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center bg-brand-cream">
      {showVideo ? (
        <div className="hidden lg:flex absolute left-8 bottom-10 w-72 bg-black/80 backdrop-blur-md text-white rounded-[1.5rem] p-3 shadow-[0_30px_60px_rgba(17,17,17,0.2)] border border-white/10 overflow-hidden">
          <div className="relative w-full overflow-hidden rounded-[1.1rem] border border-white/10 bg-black">
            <video
              ref={videoRef}
              className="h-36 w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
            >
              <source src={showroomVideo} type="video/mp4" />
            </video>
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              aria-label="Close showroom video"
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Pause showroom video"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
                >
                  <Pause className="h-4 w-4" />
                </button>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Showroom</p>
                  <p className="text-[10px] text-white/70">Agrabad Flagship Studio</p>
                </div>
              </div>
              <Play className="h-4 w-4 text-white/80" />
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="hidden lg:inline-flex absolute left-8 bottom-10 items-center gap-2 rounded-full border border-brand-green/30 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green shadow-sm transition hover:bg-white"
        >
          <Play className="h-3.5 w-3.5" />
          Reopen tour
        </button>
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.15] font-normal tracking-tight">
          Bespoke Furniture, <br />
          Crafted Around You.
        </h1>

        <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto font-light">
          Chattogram’s premier bespoke atelier — crafting seasoned solid teak furniture tailored to your space.
        </p>

        <div className="pt-2">
          <button className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-xs font-medium hover:bg-[#0B4E38] transition duration-300 shadow-md">
            <span>Request a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}