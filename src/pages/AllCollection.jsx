import React, { useMemo, useState } from 'react';
import { ArrowRight, Filter, Search, Star } from 'lucide-react';

const products = [
  {
    name: 'Aster Teak Dining Set',
    category: 'Dining Room',
    price: 3890,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    badge: 'Bestseller',
  },
  {
    name: 'Marin Velvet Lounge',
    category: 'Living Room',
    price: 2450,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    badge: 'New',
  },
  {
    name: 'Noura Mahogany Bed',
    category: 'Bedroom Suites',
    price: 4100,
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    badge: 'Premium',
  },
  {
    name: 'Sera Executive Desk',
    category: 'Office & Study',
    price: 2190,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
    badge: 'Custom',
  },
  {
    name: 'Horizon Accent Console',
    category: 'Entryway',
    price: 1720,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80',
    badge: 'Limited',
  },
  {
    name: 'Solace Wardrobe Suite',
    category: 'Storage',
    price: 3350,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    badge: 'Top Rated',
  },
  {
    name: 'Harbor King Bed',
    category: 'Bedroom Suites',
    price: 4680,
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    badge: 'Signature',
  },
  {
    name: 'Eden Writing Desk',
    category: 'Office & Study',
    price: 1980,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    badge: 'New',
  },
];

const categoryOptions = [
  { label: 'All', value: 'All' },
  { label: 'Living Room', value: 'Living Room' },
  { label: 'Dining Room', value: 'Dining Room' },
  { label: 'Bedroom Suites', value: 'Bedroom Suites' },
  { label: 'Office & Study', value: 'Office & Study' },
  { label: 'Storage', value: 'Storage' },
  { label: 'Entryway', value: 'Entryway' },
];

export default function AllCollection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return products.filter((product) => {
      const matchesFilter = activeFilter === 'All' || product.category === activeFilter;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchValue]);

  return (
    <main className="px-4 pb-16 pt-28 sm:px-6 md:pt-32 md:pb-20 bg-[#F9F8F6] text-[#111111]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-green sm:text-[11px]">
            All Collection
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-none text-brand-dark sm:text-5xl md:text-6xl">
            Curated furniture for every room.
          </h1>
        </div>

        <div className="mb-8 rounded-[1.5rem] border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex w-full items-center gap-2 rounded-full border border-gray-200 bg-[#F9F8F6] px-4 py-2.5 text-sm text-gray-500 min-w-0 lg:max-w-md">
              <Search className="h-4 w-4 shrink-0" />
              <input
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search collection"
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </label>

            <div className="flex w-full items-center gap-2 text-sm text-gray-600 lg:w-auto lg:justify-end">
              <Filter className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">Sort by:</span>
              <select className="w-full rounded-full border border-gray-200 bg-[#F9F8F6] px-3 py-2 text-sm text-gray-700 outline-none lg:w-auto">
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {categoryOptions.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveFilter(category.value)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition sm:text-xs ${
                  activeFilter === category.value
                    ? 'border-brand-green bg-brand-green text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-gray-300 bg-white p-10 text-center sm:p-12">
            <p className="text-sm font-medium text-gray-600">No items match this selection.</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('All');
                setSearchValue('');
              }}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0B4E38] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.name}
                className="group min-w-0 overflow-hidden rounded-[1.6rem] border border-gray-200 bg-white shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-30px_rgba(17,17,17,0.45)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64 md:h-72"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
                    {product.badge}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
                      <Star className="h-3.5 w-3.5 fill-[#F5B700] text-[#F5B700]" />
                      {product.rating}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-serif text-brand-dark sm:text-2xl">{product.name}</h2>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">From</p>
                      <p className="text-lg font-bold text-brand-dark sm:text-xl">
                        ৳{product.price.toLocaleString()}
                      </p>
                    </div>

                    <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-dark transition hover:border-brand-green hover:text-brand-green sm:px-4 sm:text-xs">
                      View details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
