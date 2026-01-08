import React from 'react';

export const CuratorNote: React.FC = () => {
  return (
    <section className="py-40 bg-stone-900/30 border-y border-stone-900">
      <div className="container mx-auto px-6 md:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-stone-600 text-[10px] uppercase tracking-[0.5em] mb-12 block italic">From the Founder</span>
          <blockquote className="font-serif text-3xl md:text-6xl text-stone-300 leading-tight tracking-tight">
            "We don't sell square footage. We broker the backdrop for your most <span className="text-white italic">precious</span> memories."
          </blockquote>
          <div className="mt-12 flex flex-col items-center">
             <div className="w-12 h-px bg-stone-700 mb-6"></div>
             <p className="font-serif text-stone-500 italic text-xl">Julian V. Lumière</p>
          </div>
        </div>
      </div>
    </section>
  );
};