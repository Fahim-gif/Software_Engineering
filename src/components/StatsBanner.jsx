import React from 'react';
import CountUp from './CountUp';

export default function StatsBanner() {
  const stats = [
    { value: 500, suffix: '+', label: 'BESPOKE HOMES STYLED', separator: true },
    { value: 100, suffix: '%', label: 'SEASONED SOLID TEAK', separator: false },
    { value: 3, prefix: 'Free ', suffix: 'D', label: 'SPACE CONSULTATION', separator: false },
    { value: 1, suffix: ' showroom', label: 'FLAGSHIP LOCATION', separator: false },
  ];

  return (
    <section className="bg-[#0B4E38] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
              <CountUp
                value={stat.value}
                prefix={stat.prefix || ''}
                suffix={stat.suffix || ''}
                separator={stat.separator}
                className="inline-block"
              />
            </h3>
            <p className="text-xs tracking-wider text-emerald-100 uppercase font-light">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
