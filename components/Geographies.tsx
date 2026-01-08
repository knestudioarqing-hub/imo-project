import React from 'react';

const LOCATIONS = [
  { city: 'Courchevel', region: 'French Alps', img: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=1200&auto=format&fit=crop' },
  { city: 'Amalfi', region: 'Italy', img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1200&auto=format&fit=crop' },
  { city: 'Naoshima', region: 'Japan', img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop' },
];

export const Geographies: React.FC = () => {
  return (
    <section className="py-32 bg-stone-950 overflow-hidden">
      <div className="container mx-auto px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-stone-600 text-[10px] uppercase tracking-[0.4em] block mb-4">Strategic Expansion</span>
            <h2 className="font-serif text-5xl text-stone-200">Global Enclaves</h2>
          </div>
          <p className="text-stone-500 text-xs uppercase tracking-widest max-w-xs text-right mt-6 md:mt-0">
            Presence in the world's most exclusive tax havens and cultural epicenters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className={`group relative overflow-hidden ${i === 1 ? 'md:-translate-y-12' : 'md:translate-y-12'}`}>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={loc.img} 
                  alt={loc.city} 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-6 flex justify-between items-baseline">
                <h4 className="font-serif text-2xl text-stone-200">{loc.city}</h4>
                <span className="text-[10px] uppercase tracking-widest text-stone-600">{loc.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};