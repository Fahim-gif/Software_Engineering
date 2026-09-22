import React from 'react';

/**
 * Inline SVG icons.
 *
 * Lucide dropped its brand glyphs (WhatsApp never existed there at all), so the
 * social marks are hand-rolled here. They inherit `currentColor`, take the same
 * `className` sizing utilities as lucide icons, and add no dependency.
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function HouseIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      {...base}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...base} className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.12-1.13l-.29-.17-3.06.8.82-2.99-.19-.31a8.02 8.02 0 0 1-1.23-4.29c0-4.46 3.63-8.09 8.08-8.09Zm-2.4 4.18c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.8c.14.18 1.9 2.9 4.61 3.96 2.25.89 2.71.71 3.2.67.49-.05 1.58-.64 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.31-.27-.14-1.58-.78-1.83-.87-.25-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.83-1.98-.21-.51-.43-.44-.59-.45h-.53Z" />
    </svg>
  );
}

export function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...base} className={className} fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33v7.03C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      {...base}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...base} className={className} fill="currentColor">
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z" />
    </svg>
  );
}
