import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[110vh] w-full bg-stone-950 overflow-hidden flex items-center">
      
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-24 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Text */}
        <div className="md:w-1/2 z-20 mix-blend-difference">
          <div className="overflow-hidden">
             <h1 className="font-serif text-[15vw] md:text-[10vw] leading-[0.85] text-stone-200 uppercase reveal-text" style={{ animationDelay: '0.2s' }}>
              Silent
            </h1>
          </div>
          <div className="overflow-hidden ml-12 md:ml-24">
            <h1 className="font-serif text-[15vw] md:text-[10vw] leading-[0.85] text-stone-200 italic opacity-80 reveal-text" style={{ animationDelay: '0.4s' }}>
              Luxury
            </h1>
          </div>
          
          <div className="mt-12 md:ml-4 max-w-md">
            <p className="text-stone-400 text-xs md:text-sm uppercase tracking-[0.2em] leading-loose">
              An antidote to the ordinary. <br/>
              Curated residences for the uncompromising few.
            </p>
          </div>
        </div>

        {/* Right Image (Parallax) */}
        <div className="absolute top-0 right-0 w-full md:w-[60vw] h-full z-0 opacity-60 md:opacity-100">
          <div 
            className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop")',
              transform: `translateY(${offset * 0.2}px)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-stone-950/20 to-stone-950" />
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-stone-800 opacity-30"></div>
      <div className="absolute top-0 right-24 w-px h-full bg-stone-800 opacity-30 hidden md:block"></div>
    </section>
  );
};
