import React from 'react';
import { Mail, MapPin, Phone, Send, Clock3 } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <section className="rounded-[2rem] bg-white border border-gray-200 p-7 md:p-10 shadow-[0_20px_55px_-35px_rgba(17,17,17,0.4)]">
          <p className="text-[11px] uppercase tracking-[0.25em] text-brand-green font-semibold">
            Contact us
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-brand-dark leading-none">
            Plan your space with us.
          </h1>

          <form className="mt-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none transition focus:border-brand-green"
                />
              </label>
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block font-medium">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none transition focus:border-brand-green"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block font-medium">Phone</span>
                <input
                  type="tel"
                  placeholder="+880 ..."
                  className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none transition focus:border-brand-green"
                />
              </label>
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block font-medium">Project type</span>
                <select className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none transition focus:border-brand-green">
                  <option>Living room</option>
                  <option>Dining room</option>
                  <option>Bedroom suite</option>
                  <option>Office</option>
                  <option>Custom project</option>
                </select>
              </label>
            </div>

            <label className="block text-sm text-gray-700">
              <span className="mb-2 block font-medium">Project details</span>
              <textarea
                rows="6"
                placeholder="Tell us about your space, dimensions, finish preferences, and timeline."
                className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none transition focus:border-brand-green"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B4E38] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0d5c43]"
            >
              Send enquiry
              <Send className="w-4 h-4" />
            </button>
          </form>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] bg-[#111111] p-7 text-white shadow-[0_20px_55px_-35px_rgba(17,17,17,0.8)]">
            <h2 className="text-xl font-semibold">Visit our showroom</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-200">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 w-4 h-4 text-[#8fe0b9]" />
                <span>Agrabad Access Road, Chattogram, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8fe0b9]" />
                <a href="tel:+8801700000000" className="hover:text-white">+880 1700-000000</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8fe0b9]" />
                <a href="mailto:heavenfurnituremart@gmail.com" className="hover:text-white">
                  heavenfurnituremart@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="w-4 h-4 text-[#8fe0b9]" />
                <span>Sun – Thu: 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-4 shadow-[0_20px_55px_-35px_rgba(17,17,17,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury showroom interior"
              className="h-56 w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
