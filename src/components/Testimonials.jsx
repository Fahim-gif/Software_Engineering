import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "I love the Heaven bespoke concept. Custom dimensions tailored to our ceiling height. Customer care is very good and attentive.",
      author: "Engr. Mahmudul Hasan",
      location: "Nasirabad, Chattogram",
      highlight: '"What\'s the next benchmark in luxury furniture? Heaven is the studio to watch."',
      source: "THE DESIGN STRATEGIST"
    },
    {
      quote: "Having seasoned solid teak with us means zero wobble or creaking. No need to worry even after years of daily family use.",
      author: "Dr. Farzana Ahmed",
      location: "Khulshi, Chattogram",
      highlight: '"The definition of a luxury living room heirloom we won\'t go without."',
      source: "ARCHITECTURAL JOURNAL BD"
    },
    {
      quote: "We commissioned custom bedroom suites for our duplex. The 10-year timber guarantee and free 3D consultation gave us total peace of mind.",
      author: "Syed Rashedul Karim",
      location: "Agrabad, Chattogram",
      highlight: '"The bespoke studio we recommend most for seasoned timber and 3D planning."',
      source: "POPULAR INTERIORS"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#0B4E38] font-semibold">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#111111]">Cherished in Homes & Executive Suites</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
              <p className="text-gray-600 text-sm italic">"{item.quote}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-[#111111]">{item.author}</p>
                <p className="text-xs text-gray-400">{item.location}</p>
                <p className="text-xs font-semibold text-[#0B4E38] mt-3 uppercase tracking-wider">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}