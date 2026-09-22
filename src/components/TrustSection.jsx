import React from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Sliders } from 'lucide-react';
import CountUp from './CountUp';

export default function TrustSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs text-gray-500 tracking-widest uppercase">— Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-1">Built On <span className="italic text-brand-green">Trust.</span></h2>
        <p className="text-xs text-gray-500 mt-2">Custom-built in Chattogram for your space.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <Sliders className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-2">100% Tailored To Your Space</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Every sofa, bed, and dining suite is crafted to your <span className="font-semibold text-black">exact room dimensions</span> and interior layout.</p>
          </div>
          <a href="#" className="mt-8 text-xs font-semibold text-gray-700 flex items-center space-x-1 hover:text-brand-green transition">
            <span>Explore Bespoke Process</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-gradient-to-br from-white to-green-50/40 rounded-3xl p-8 border border-green-100/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-2">Kiln-Dried Seasoned Timber</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Handcrafted with seasoned teak and mahogany, protected by a <span className="font-semibold text-black"><CountUp value={5} suffix="-year" className="inline-block" /> structural warranty</span>.</p>
          </div>
          <a href="#" className="mt-8 text-xs font-semibold text-brand-green flex items-center space-x-1 hover:underline">
            <span>View Curated Collections</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg text-brand-dark mb-2">Flagship Agrabad Showroom</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Visit our <span className="font-semibold text-black"><CountUp value={5000} suffix="+ sq ft" separator className="inline-block" /> showroom</span> on Agrabad Access Road to inspect timber and meet our design team.</p>
          </div>
          <a href="#" className="mt-8 text-xs font-semibold text-gray-700 flex items-center space-x-1 hover:text-brand-green transition">
            <span>View on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}