import React, { useState } from 'react';
import { Mail, MapPin, Phone, UserRound } from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from './icons/BrandIcons';
import LoginPanel from './LoginPanel';

/** Link columns — edit here rather than in the markup. */
const LINK_COLUMNS = [
  {
    heading: 'Page Sections',
    links: [
      { label: 'Why Choose Heaven', href: '#/' },
      { label: 'Furniture Collections', href: '#/collections' },
      { label: 'Best Selling Masterpieces', href: '#/collections' },
      { label: 'Bespoke Customization', href: '#/contact' },
    ],
  },
  {
    heading: 'Explore Pages',
    links: [
      { label: 'About Our Heritage', href: '#/about' },
      { label: 'Collections Catalog', href: '#/collections' },
      { label: 'Showroom Videos', href: '#/videos' },
      { label: 'Flagship Showroom', href: '#/contact' },
    ],
  },
];

const SOCIALS = [
  { label: 'WhatsApp', href: 'https://wa.me/', Icon: WhatsAppIcon },
  { label: 'Phone', href: 'tel:+880', Icon: Phone },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'YouTube', href: '#', Icon: YouTubeIcon },
];

export default function Footer() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <footer className="relative overflow-hidden bg-[#111111] text-white pt-16 md:pt-20 pb-8 px-6">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-4 md:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[15vw] leading-none text-white/[0.035]"
        >
          Designed. Crafted. Customized.
        </span>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] pb-12 border-b border-white/10">
            <div>
              <h3 className="font-serif text-2xl tracking-wide mb-4">
                Heaven Furniture Mart
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Bespoke luxury furniture tailored to your space, crafted at our
                Agrabad showroom in Chattogram.
              </p>

              <address className="not-italic mt-6 space-y-3">
                <p className="flex items-start gap-2.5 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-px" />
                  Agrabad Access Road, Chattogram, Bangladesh
                </p>
                <p className="flex items-center gap-2.5 text-xs">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="mailto:heavenfurnituremart@gmail.com"
                    className="text-emerald-400 hover:underline break-all"
                  >
                    heavenfurnituremart@gmail.com
                  </a>
                </p>
              </address>

              <button
                type="button"
                onClick={() => setLoginOpen(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <UserRound className="h-3.5 w-3.5" />
                Staff login
              </button>

              <ul className="flex items-center gap-3 mt-7">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 transition duration-300 hover:bg-brand-green hover:text-white hover:-translate-y-0.5"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {LINK_COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h4 className="text-[10px] uppercase tracking-[0.22em] text-gray-400 mb-5 font-semibold">
                  {column.heading}
                </h4>
                <ul className="text-xs space-y-3 text-gray-300">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block hover:text-emerald-400 hover:translate-x-1 transition duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-500 text-center">
            <p>© 2026 Heaven Furniture Mart. All rights reserved.</p>
            <p>Chattogram, Bangladesh</p>
          </div>
        </div>
      </footer>

      <LoginPanel open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
