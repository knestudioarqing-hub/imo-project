import React, { useState } from 'react';
import { Property } from '../types';
import { ArrowUpRight } from 'lucide-react';

const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Glass Pavilion',
    location: 'Montecito, California',
    price: '$12,500,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    specs: { beds: 5, baths: 6, sqft: '6,200' },
    tag: 'Architectural'
  },
  {
    id: '2',
    title: 'Stone Creek Estate',
    location: 'Aspen, Colorado',
    price: '$24,000,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    specs: { beds: 7, baths: 8, sqft: '10,500' },
    tag: 'Alpine'
  },
  {
    id: '3',
    title: 'Villa Sereno',
    location: 'Mallorca, Spain',
    price: '€8,900,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop',
    specs: { beds: 6, baths: 5, sqft: '5,800' },
    tag: 'Coastal'
  },
  {
    id: '4',
    title: 'Kyoto House',
    location: 'Kyoto, Japan',
    price: '¥210,000,000',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54cc0c21c?q=80&w=1600&auto=format&fit=crop',
    specs: { beds: 4, baths: 3, sqft: '4,100' },
    tag: 'Minimalist'
  }
];

export const FeaturedCollection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(PROPERTIES[0].image);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="collection" className="relative bg-stone-900 py-32 overflow-hidden">
      
      {/* Background Image Display - Absolute */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-0 transition-opacity duration-700 pointer-events-none opacity-40 md:opacity-100">
         <div className="relative h-full w-full">
            <img 
              src={activeImage} 
              alt="Active Property" 
              className="h-full w-full object-cover transition-all duration-700 ease-in-out filter brightness-75 md:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent"></div>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-24 relative z-10">
        <div className="mb-20">
          <span className="text-stone-500 text-[10px] uppercase tracking-[0.3em] block mb-2">
            The Portfolio
          </span>
          <h2 className="font-serif text-4xl text-stone-200">Selected Works</h2>
        </div>

        <div className="flex flex-col">
          {PROPERTIES.map((prop, idx) => (
            <div 
              key={prop.id}
              onMouseEnter={() => {
                setActiveImage(prop.image);
                setActiveIndex(idx);
              }}
              className="group border-t border-stone-800 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-500 hover:pl-8"
            >
              <div className="flex items-baseline gap-8">
                <span className={`text-xs font-mono transition-colors duration-300 ${activeIndex === idx ? 'text-stone-200' : 'text-stone-600'}`}>
                  0{idx + 1}
                </span>
                <div>
                  <h3 className={`font-serif text-3xl md:text-5xl transition-colors duration-300 ${activeIndex === idx ? 'text-white' : 'text-stone-500 group-hover:text-stone-300'}`}>
                    {prop.title}
                  </h3>
                  <p className="text-stone-500 text-xs uppercase tracking-widest mt-2">{prop.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-12 mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-right hidden md:block">
                  <span className="block text-stone-300 font-serif text-xl italic">{prop.price}</span>
                  <span className="text-[10px] text-stone-600 uppercase tracking-widest">{prop.specs.sqft} sq ft</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-stone-600 flex items-center justify-center text-stone-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-stone-800"></div>
        </div>
      </div>
    </section>
  );
};
