import React from 'react';

export const Lifestyle: React.FC = () => {
  return (
    <section className="py-32 bg-stone-950">
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 overflow-hidden">
            <div className="relative group overflow-hidden aspect-[16/9]">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-20 mt-12 md:mt-0">
            <span className="text-stone-600 text-[10px] uppercase tracking-[0.4em] mb-6 block">Atmosphere</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-200 leading-tight mb-8">
              The Sensory <br/> <span className="italic">Dimension</span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed text-sm">
              Luxury is not just seen; it is felt. The cool touch of honed Carrara marble, the warmth of reclaimed oak, and the way the golden hour interacts with floor-to-ceiling glass. We curate environments that engage every sense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};