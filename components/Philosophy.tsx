import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-stone-950 border-b border-stone-900 relative">
      <div className="container mx-auto px-6 md:px-24">
        <div className="flex flex-col md:flex-row gap-20">
          
          <div className="md:w-1/3 sticky top-32 h-fit">
            <span className="text-stone-500 text-[10px] uppercase tracking-[0.3em] block mb-6">
              Ethos
            </span>
            <div className="w-full h-px bg-stone-800 mb-8"></div>
            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xs">
              We define luxury not by abundance, but by the thoughtful elimination of the unnecessary. Every property in our collection is chosen for its ability to pause time.
            </p>
          </div>

          <div className="md:w-2/3">
             <h2 className="font-serif text-4xl md:text-7xl text-stone-200 leading-[1.1] mb-16">
               <span className="block opacity-30">Spaces that</span>
               <span className="block ml-12 md:ml-24">Breathe.</span>
               <span className="block opacity-30 mt-8">Silence that</span>
               <span className="block ml-12 md:ml-24">Speaks.</span>
             </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
               <div className="bg-stone-900/50 p-12 border border-stone-800/50 hover:border-stone-700 transition-colors">
                 <span className="font-mono text-stone-600 text-xs mb-4 block">01 / Curated</span>
                 <p className="text-stone-300 font-serif text-xl">
                   We reject 99% of listings. If it does not inspire awe, it is not Lumière.
                 </p>
               </div>
               <div className="bg-stone-900/50 p-12 border border-stone-800/50 hover:border-stone-700 transition-colors mt-0 md:mt-12">
                 <span className="font-mono text-stone-600 text-xs mb-4 block">02 / Private</span>
                 <p className="text-stone-300 font-serif text-xl">
                   Off-market access to the world's most guarded architectural masterpieces.
                 </p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
