import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HouseIcon } from './icons/BrandIcons';

/**
 * Breadcrumb trail.
 * @param {{label: string, href?: string}[]} items  Last item renders as current page.
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-6 pt-6 pb-2"
    >
      <ol className="flex items-center flex-wrap gap-1.5 text-[11px] text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index === 0 && <HouseIcon className="w-3.5 h-3.5 text-gray-400" />}

              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="text-about-ink font-medium"
                >
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="hover:text-about-sage transition">
                  {item.label}
                </a>
              )}

              {!isLast && <ChevronRight className="w-3 h-3 text-gray-300" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
