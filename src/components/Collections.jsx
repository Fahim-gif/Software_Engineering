import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const collections = [
  { title: "Dining Room", subtitle: "Solid Wood Tables, Chairs & Cabinets", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80" },
  { title: "Office & Study", subtitle: "Executive Tables, Bookshelves & Desks", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" },
];

export default function Collections() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">— Collections</span>
        <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-2">Find Furniture For <span className="italic text-brand-green">Every Space.</span></h2>
        <p className="text-xs text-gray-500 mt-2">Curated bespoke suites crafted to your space.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-sm group bg-white border border-gray-100"
          >
            <img src={item.img} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition duration-700" />
            <div className="p-6 flex justify-between items-center bg-white">
              <div>
                <h3 className="font-semibold text-base text-brand-dark">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
              </div>
              <button className="p-3 rounded-full bg-brand-green text-white group-hover:bg-brand-dark transition duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}