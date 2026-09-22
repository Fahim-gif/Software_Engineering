import React from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import BackToTop from './BackToTop';

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* Back-to-top now lives in its own reusable component */}
      <BackToTop />

      <button
        type="button"
        aria-label="Help and FAQs"
        className="p-3 bg-white rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition text-gray-700"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      <button
        type="button"
        aria-label="Chat with us"
        className="p-3 bg-brand-green text-white rounded-full shadow-xl hover:scale-105 transition duration-200"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
